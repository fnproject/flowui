
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
        this.all_events = [];
        this.stage_map = new Map();
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

        switch (evt.type) {
            case 'model.StageAddedEvent': {
                const evtData = evt.data;
                const stage_id = evtData.stage_id;
                const startTs = Date.parse(evtData.ts);

                this.stage_map.set(stage_id,
                    {
                        state : 'pending',
                        stage_id: stage_id,
                        created: startTs,
                        op: evtData.op,
                        dependencies: evtData.dependencies
                    });
            }break;
            case 'model.DelayScheduledEvent':
            case 'model.FaasInvocationStartedEvent':
            {
                const evtData = evt.data;
                const stage_id = evtData.stage_id;
                const startTs = Date.parse(evtData.ts);
                let stage = this.stage_map.get(stage_id);
                if (!stage) {
                    console.log(`Unrecognized stage id ${stage_id}`)
                    return;
                }
                stage.state= 'running';
                stage.started = startTs;
            }
                break;
            case 'model.StageCompletedEvent': {
                const evtData = evt.data;
                const stage_id = evtData.stage_id;
                const endTs = Date.parse(evtData.ts);

                let stage = this.stage_map.get(stage_id);
                if (!stage) {
                    console.log(`Unrecognized stage id ${stage_id}`)
                    return;
                }

                stage.state  = evtData.result.successful?"successful":"failed";
                stage.completed = endTs;
            }
                break;
            case 'model.GraphCommittedEvent': {
                const evtData = evt.data;
                const endTs = Date.parse(evtData.ts);
                this.main_ended = endTs;
            }
                break;

            default:
                console.log(`Unrecognised event ${evt}`);

        }
    }

    getNode(id) {
        return this.stage_map.get(id);
    }

    getNodes() {
        return Array.from(this.stage_map.values());
    }


}

export default Graph;
