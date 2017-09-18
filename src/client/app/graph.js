/**
 * Reduce an event into a graph, returns the new graph
 * @param g
 * @param evt
 */

class Node {
    constructor(props){
        Object.assign(this,props);
    }


    conflictsWith( b) {
        if ((this.state === 'running' && b.state === 'running')) {
            return true;
        }
        if (this.state === 'running') {
            if (b.state === 'running') {
                return true;
            } else {
                return b.completed > this.started;
            }
        } else {
            if (b.state === 'running') {
                return this.completed > b.started;
            }   // both completed
            return ((this.started > b.started) && (this.started < b.completed)) ||
                ((this.completed > b.started) && (this.completed < b.completed));
        }
    }
}


class GraphTimeline{

    constructor(activeNodes,pendingNodes,rankMap){
        this.activeNodes = activeNodes;
        this.pendingNodes = pendingNodes;
        this.rankMap = rankMap;
        this.maxRanks = this.maxRanks.bind(this);
    }

    maxRanks() {
        if(!this.maxR){
            return this.maxR =  Array.from(this.rankMap.values()).reduce((a,b)=>Math.max(a,b),0);
        }else{
            return this.maxR;
        }

    }

}
class Graph {
    constructor(createdEvent) {

        this.graph_id = createdEvent.data.graph_id;
        this.created = Date.parse(createdEvent.data.ts);
        this.main_ended = null;
        this.finished = null;
        this.all_events = [];
        this.stage_map = new Map();
        this.function_id = createdEvent.data.function_id;
        this.event_map = [];
    }

    getId() {
        return this.graphId;
    }


    isLive() {
        return this.finished == null;
    }

    /**
     * pushes an event to the graph structure, updates
     * @param evt
     */
    receiveEvent(evt) {
        this.all_events.push(evt);

        function updateStage(stage_id, cb) {
            let stage = this.stage_map.get(stage_id);
            if (!stage) {
                console.log(`Unrecognized stage id ${stage_id}`)
                return;
            }
            this.stage_map.set(stage_id, cb(stage));
        }

        updateStage = updateStage.bind(this);

        switch (evt.type) {
            case 'model.GraphCreatedEvent': {
                let start = Date.parse(evt.data.ts);
                this.stage_map.set("main", new Node({
                    state: 'running',
                    stage_id: "main",
                    created: start,
                    started: start,
                    dependencies: [],
                    function_id: evt.data.function_id,
                    op: 'main',
                }));
            }
                break;
            case 'model.StageAddedEvent': {
                const evtData = evt.data;
                const stage_id = evtData.stage_id;
                let stage = new Node({
                    state: 'pending',
                    stage_id: stage_id,
                    created: Date.parse(evtData.ts),
                    op: evtData.op,
                    code_location:evtData.code_location,
                    dependencies: evtData.dependencies
                });
                if(evtData["parent_id"]){
                    if(!stage.dependencies){
                        stage.dependencies = [];
                    }
                    stage.dependencies.push(evtData.parent_id);
                }

                this.stage_map.set(stage_id,
                    stage);
            }
                break;
            case 'model.DelayScheduledEvent': {
                updateStage(evt.data.stage_id, (stage) => {
                    //stage.state = 'running';
                    //stage.started = Date.parse(evt.data.ts);
                    return stage;
                });

            }
                break;
            case 'model.FaasInvocationStartedEvent': {
                updateStage(evt.data.stage_id, (stage) => {
                    stage.state = 'running';
                    stage.started = Date.parse(evt.data.ts);
                    stage.function_id = evt.data.function_id;
                    return stage;
                });

            }
                break;
            case 'model.FaasInvocationCompletedEvent': {
                updateStage(evt.data.stage_id, (stage) => {
                    stage.call_id = evt.data.call_id;
                    stage.completed = Date.parse(evt.data.ts);
                    return stage;
                });

            }
                break;
            case 'model.StageCompletedEvent': {
                updateStage(evt.data.stage_id, (stage) => {
                    stage.state = evt.data.result.successful ? "successful" : "failed";
                    if (!stage.completed) {
                        stage.completed = Date.parse(evt.data.ts);
                    }
                    if (!stage.started) {
                        stage.started = stage.completed;
                    }
                    return stage;
                });
            }
                break;
            case 'model.GraphCommittedEvent': {
                const evtData = evt.data;
                updateStage("main", (stage) => {
                    stage.completed = Date.parse(evtData.ts);
                    stage.state = "successful";
                    return stage;
                });
                this.main_ended = Date.parse(evtData.ts);
            }
                break;
            case 'model.GraphCompletedEvent' : {
                const evtData = evt.data;
                this.finished = Date.parse(evtData.ts);
            }
                break;
            case 'model.StageComposedEvent': {
                updateStage(evt.data.composed_stage_id, (stage) => {
                    stage.dependencies.push(evt.data.stage_id);
                    return stage;
                });
            }
                break;
            default:
                console.log("Unrecognised event ", evt.type);

        }
        if (this.event_map[evt.type]) {
            this.event_map[evt.type].forEach((fn) => fn(evt));
        }
    }

    On(evt_name, fn) {
        (this.event_map[evt_name] = this.event_map[evt_name] || []).push(fn);
    }

    getNode(id) {
        return this.stage_map.get(id);
    }

    findDepIds(nodeId) {
        let depsOfNode = this.getNode(nodeId).dependencies;
        if (depsOfNode.length === 0) {
            return new Set();
        }
        let transitiveDependenciesOfNode = new Set(depsOfNode);
        depsOfNode.forEach((dep) => {
            this.findDepIds(dep).forEach((transitiveDep) => transitiveDependenciesOfNode.add(transitiveDep));
        });

        return transitiveDependenciesOfNode;
    };

    getNodes() {
        return Array.from(this.stage_map.values());
    }


    /**
     * Create a timeline based on the graph
     * @param visibilityFn (node)->bool
     * @return {GraphTimeline}
     */
    createTimeline(visibilityFn){

        let pendingNodes = [];
        let activeNodes = [];
        this.getNodes()
            .forEach((node) => {
                if (node.state === 'pending') {
                    pendingNodes.push(node);
                } else {
                    activeNodes.push(node);
                }
            });

        activeNodes.sort((a, b) => {
            return a.created - b.created
        });





        // rank_id -> Map[stage_id] - stage
        var ranks = [];

        function findRank(stage_id) {
            for (let rank in ranks) {
                if (ranks[rank].has(stage_id)) {
                    return rank;
                }
            }
            throw "No rank found for stage " + stage_id;
        }

        activeNodes
            .forEach(
                (node) => {
                    // hidden nodes
                    const shown = visibilityFn(node);

                    let minRank = -1;
                    // Never place dependent nodes above their parents
                    node.dependencies.forEach((stage_id) => {
                        minRank = Math.max(minRank, findRank(stage_id))
                    });

                    //console.log("min rank for " + node.stage_id + " " +minRank);
                    // no precendence here - put this on a new rank
                    if (minRank === -1) {
                        if(!shown && ranks.length > 0){
                            ranks[ranks.length-1].set(node.stage_id, node);
                        }else{
                            let rankMap = new Map();
                            rankMap.set(node.stage_id, node);
                            ranks.push(rankMap);
                        }
                    } else {
                        // if this is an invisible node, just dump it at its parent rank
                        if (!(node.op === 'completedValue' || node.op === 'externalFuture')) {
                            for (let [id, other] of ranks[minRank]) {
                                if (shown &&  visibilityFn(other) && node.conflictsWith(other)) {
                                    // not free push this node to a new rank below min rank
                                    let rankMap = new Map();
                                    rankMap.set(node.stage_id, node);
                                    ranks.splice(minRank + 1, 0, rankMap);
                                    return;
                                }
                            }
                        }
                        // parent rank is free here
                        ranks[minRank].set(node.stage_id, node);
                    }
                });

        // stage-id -> rank
        let rankMap = new Map();
        ranks.forEach((v, rank) => {
            v.forEach((node) => {
                rankMap.set(node.stage_id, rank);
            })
        });


        return new GraphTimeline(activeNodes,pendingNodes,rankMap);

    }
}

export default Graph;
