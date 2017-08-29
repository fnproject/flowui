function alterTimeStamp(ts) {
    const date = new Date(ts);
    return (date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
}

const testEvents = [
    {
        "type": "model.GraphCreatedEvent",
        "sub": "135ae706-6819-476a-93a9-d18a62e30292",
        "data": {
            "graphId": "135ae706-6819-476a-93a9-d18a62e30292",
            "functionId": "test/fn",
            "ts": "2017-08-28T13:30:56.817212658Z"
        }
    },
    {
        "type": "model.StageAddedEvent",
        "sub": "135ae706-6819-476a-93a9-d18a62e30292",
        "data": {"stageId": "0", "op": "delay", "ts": "2017-08-28T13:31:31.721281418Z"}
    },
    {
        "type": "model.DelayScheduledEvent",
        "sub": "135ae706-6819-476a-93a9-d18a62e30292",
        "data": {"stageId": "0", "timeMs": "1503927091826", "ts": "2017-08-28T13:31:31.726673270Z"}
    },
    {
        "type": "model.StageCompletedEvent",
        "sub": "135ae706-6819-476a-93a9-d18a62e30292",
        "data": {
            "stageId": "0",
            "result": {"successful": true, "datum": {"empty": {}}},
            "ts": "2017-08-28T13:31:31.830953594Z"
        }
    }];


/**
 * Reduce an event into a graph, returns the new graph
 * @param g
 * @param evt
 */


class Graph {
    constructor(createdEvent) {

        this.graphId = createdEvent.data.graphId;
        this.created = Date.parse(createdEvent.data.ts);

        this.allEvents = [];
        this.stageMap = new Map();
    }

    getId(){
        return this.graphId;
    }

    /**
     * pushes an event to the graph structure, updates
     * @param evt
     */
    receiveEvent(evt) {
        this.allEvents.push(evt);

        switch (evt.type) {
            case 'model.StageAddedEvent': {
                const evtData = evt.data;
                const stageId = evtData.stageId;
                const startTs = Date.parse(evtData.ts);

                this.stageMap.set(stageId,
                    {
                        stageId: stageId,
                        created: startTs,
                        title: evtData.op,
                        dependencies: evtData.dependencies
                    });
            }
                break;
            case 'model.StageCompletedEvent': {
                const evtData = evt.data;
                const stageId = evtData.stageId;
                const endTs = Date.parse(evtData.ts);

                let stage = this.stageMap.get(stageId);
                if (!stage) {
                    console.log("Unrecognized stage id ${stageId}")
                    return;
                }

                stage.completed = endTs;
            }
                break;

            default:
                console.log("Unrecognised event ${evt}");

        }
    }

    getNode(id) {
        return this.stageMap.get(id);
    }

    getNodes() {
        return Array.from(this.stageMap.values());
    }


}

export default Graph;
