/**
 * Reduce an event into a graph, returns the new graph
 * @param g
 * @param evt
 */

class Node {
    constructor(props) {
        Object.assign(this, props);
        this.isPending = this.isPending.bind(this);
        this.conflictsWith = this.conflictsWith.bind(this);
        this.deps = this.deps.bind(this);
    }

    id() {
        return this.stage_id
    }

    conflictsWith(b) {
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

    dependsOn(otherNode) {
        return this.dependencies.some((n) => {
            return n === otherNode
        });
    }

    isPending() {
        return this.state === 'pending';
    }

    callDeps(){
        return Array.from(this.deps()).push(this.caller);
    }

    deps() {
        let deps = Array.from(this.dependencies);
        if(this.caller!=null && deps.length ===0){
            deps.push(this.caller);
        }
        return deps;
    }

    // Returns a Set of Nodes
    transitiveDeps(includeCaller) {
        let depsOfNode = this.deps();
        if (depsOfNode.length === 0) {
            return new Set();
        }
        let transitiveDependenciesOfNode = new Set(depsOfNode);
        depsOfNode.forEach((dep) => {
            dep.transitiveDeps(includeCaller).forEach((transitiveDep) => transitiveDependenciesOfNode.add(transitiveDep));
        });

        if(includeCaller && this.caller){
            this.caller.transitiveDeps(true).forEach((d)=>transitiveDependenciesOfNode.add(d));
        }
        return transitiveDependenciesOfNode;
    };

}


class GraphTimeline {

    constructor(activeNodes, pendingNodes, rankMap) {
        this.activeNodes = activeNodes;
        this.pendingNodes = pendingNodes;
        this.rankMap = rankMap;
        this.maxRanks = this.maxRanks.bind(this);
    }

    maxRanks() {
        if (!this.maxR) {
            return this.maxR = Array.from(this.rankMap.values()).reduce((a, b) => Math.max(a, b), 0);
        } else {
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
        this.getNode = this.getNode.bind(this);
        this.getNodes = this.getNodes.bind(this);
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
                    caller: null,
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
                    code_location: evtData.code_location,
                    caller: this.getNode(evtData.caller_id || "main"),
                    dependencies: ((evtData.dependencies || []).map(this.getNode)).map((dep) => {
                        if (dep.composed_node ) {
                            return dep.composed_node;
                        } else {
                            return dep;
                        }
                    })
                });

                this.stage_map.set(stage_id, stage);
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
                let thenComposedNode = this.getNode(evt.data.stage_id);
                let newNode = this.getNode(evt.data.composed_stage_id);
                thenComposedNode.composed_node = newNode;
                console.log(`using ${newNode.id()} (${newNode.op}) in place of ${thenComposedNode.id()} ${thenComposedNode.op}`);

                this.getNodes().forEach((node) => {
                    node.dependencies = node.dependencies.map((dep) => {
                        if (dep.composed_node) {
                            return dep.composed_node;
                        } else {
                            return dep;
                        }
                    });
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


    getNodes() {
        return Array.from(this.stage_map.values());
    }


    /**
     * Create a timeline based on the graph
     * @param visibilityFn (node)->bool
     * @return {GraphTimeline}
     */
    createTimeline(visibilityFn) {
        let pendingNodes = [];
        let activeNodes = [];
        let rootNodes = [];
        // stageId -> node
        let children = new Map();

        this.getNodes()
            .forEach((node) => {
                if (!node.isPending()) {
                    activeNodes.push(node);
                    if (node.deps().length === 0) {
                        rootNodes.push(node);
                    } else {
                        node.deps()
                            .forEach((dep) => {
                                let child_list = children.get(dep.id());
                                if (!child_list) {
                                    child_list = [];
                                }
                                child_list.push(node);
                                children.set(dep.id(), child_list);
                            });
                    }
                } else {
                    pendingNodes.push(node);
                }
            });

        // Returns the children (inverted deps on a node)
        function getChildren(node) {
            return children.get(node.id()) || [];
        }


        rootNodes.sort((a, b) => {
            return a.started - b.started
        });

        // stage_id*
        let visited = new Set();
        let ranks = [];

        function findRank(stage_id) {
            for (let rank in ranks) {
                if (ranks[rank].has(stage_id)) {
                    return rank;
                }
            }
            return -1;
        }

        function visitNodes(node, visitFn) {
            if (visited.has(node.id())) {
                return;
            }
            visited.add(node.id());
            visitFn(node);
            //
            let activeChildren = getChildren(node)
                .filter(node => !node.isPending())
                .sort((a, b) => {
                    return a.started - b.started;
                });

            activeChildren.forEach((childNode) => {
                // only visit a child if all of its parents have been visited.
                if (!childNode.dependencies.some((node) => !visited.has(node.id()))) {
                    visitNodes(childNode, visitFn);
                }
            });
        }

        function allChildren(node) {
            let children = new Set();
            children.add(node);
            getChildren(node)
                .forEach((child) => {
                    allChildren(child).forEach((c) => children.add(c));
                });
            return children;
        }

        // rank_id -> Map[stage_id] - stage
        // visit all children of all root nodes
        rootNodes.forEach((node) => visitNodes(node, (node => {

            // hidden nodes
            const shown = visibilityFn(node);

            let minRank = -1;
            // Never place dependent nodes above their parents
            let lastChildRank = -1;

            node.deps().forEach((dep) => {
                let depRank = findRank(dep.stage_id);
                if (depRank > minRank) {
                    minRank = depRank;
                }
                allChildren(dep).forEach((c) => {
                    lastChildRank = Math.max(lastChildRank, findRank(c.stage_id));
                })
            });

            //console.log("min rank for " + node.stage_id + " " +minRank);
            // no precendence here - put this on a new rank
            if (minRank === -1) {
                if (!shown && ranks.length > 0) {
                    ranks[ranks.length - 1].set(node.id(), node);
                } else {
                    let rankMap = new Map();
                    rankMap.set(node.id(), node);
                    ranks.push(rankMap);
                }
            } else {
                let conflict;
                // if this is an invisible node, just dump it at its parent rank
                if (!(node.op === 'completedValue' || node.op === 'externalFuture')) {
                    for (let [id, other] of ranks[minRank]) {
                        if (shown && visibilityFn(other) && node.conflictsWith(other)) {
                            // not free push this node to a new rank below min rank
                            conflict = true;
                            break;
                        }
                    }
                }
                if (!conflict) {                // parent rank is free here
                    ranks[minRank].set(node.id(), node);
                } else {
                    let rankMap = new Map();
                    rankMap.set(node.id(), node);
                    ranks.splice(lastChildRank + 1, 0, rankMap);
                }

            }

        })));

        // stage-id -> rank
        let rankMap = new Map();
        ranks.forEach((v, rank) => {
            v.forEach((node) => {
                rankMap.set(node.id(), rank);
            })
        });


        return new GraphTimeline(activeNodes, pendingNodes, rankMap);

    }
}

export default Graph;
