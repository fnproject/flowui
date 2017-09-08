/**
 * Reduce an event into a graph, returns the new graph
 * @param g
 * @param evt
 */
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
          case 'model.GraphCreatedEvent': {}
            break;
            case 'model.StageAddedEvent': {
                const evtData = evt.data;
                const stage_id = evtData.stage_id;
                this.stage_map.set(stage_id,
                    {
                        state: 'pending',
                        stage_id: stage_id,
                        created: Date.parse(evtData.ts),
                        op: evtData.op,
                        dependencies: evtData.dependencies
                    });
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
                updateStage(evt.data.stage_id,(stage)=>{
                    stage.state = evt.data.result.successful ? "successful" : "failed";
                    if (!stage.completed){
                      stage.completed = Date.parse(evt.data.ts);
                    }
                    if (!stage.started){
                      stage.started = stage.completed;
                    }
                    return stage;
                });
            }
                break;
            case 'model.GraphCommittedEvent': {
                const evtData = evt.data;
                this.main_ended = Date.parse(evtData.ts);
            }
                break;
            case 'model.GraphCompletedEvent' : {
                const evtData = evt.data;
                this.finished = Date.parse(evtData.ts);
            }
                break;

            default:
                console.log("Unrecognised event ", evt.type);

        }
        if(this.event_map[evt.type]){
            this.event_map[evt.type].forEach((fn)=>fn(evt));
        }
    }

    On(evt_name,fn){
        (this.event_map[evt_name]=this.event_map[evt_name] || []).push(fn);
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


}

export default Graph;
