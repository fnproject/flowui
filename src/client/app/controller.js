import Graph from './graph.js';
//import CompleterWsClient from "./completerclient";
import MockCompleterClient from "./mockcompleterclient";


class Controller {

    constructor(onChanged) {
        this.knownGraphs = new Set();
        this.activeGraphs = new Map();
        this.client = new MockCompleterClient((e)=>{this.receiveEvent(e);})
        this.onChanged = onChanged;
    }


    subscribe(graphId) {
        this.client.subscribe(graphId);
    }

    receiveEvent(event) {
        switch (event.sub) {
            case '_all':
                switch (event.type) {
                    case 'model.GraphCreatedEvent':
                        this.knownGraphs.add(event.data.graphId);
                        break;
                }
                break;
            default: {
                let graphId = event.sub;
                if (event.type === 'model.GraphCreatedEvent') {
                    let graph = new Graph(event);
                    this.activeGraphs.set(graphId, graph);

                } else {
                    let graph = this.activeGraphs.get(graphId)
                    if (!graph) {
                        console.log("Got event for unknown graph ${graphId}")
                        return;
                    }
                    graph.receiveEvent(event)
                }
            }

        }
        this.onChanged(this);
    }

    getActiveGraphs() {
        return this.activeGraphs;
    }

    getKnownGraphIds() {
        return this.knownGraphs;
    }

}

export default Controller;
