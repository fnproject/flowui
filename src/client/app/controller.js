import Graph from './graph.js';
//import CompleterWsClient from "./completerclient";
import MockCompleterClient from "./mockcompleterclient";


class Controller {

    constructor(onChanged) {
        this.known_graphs = new Set();
        this.active_graphs = new Map();
        this.client = new MockCompleterClient((e)=>{this.receiveEvent(e);})
        this.on_changed = onChanged;
    }


    subscribe(graphId) {
        this.client.subscribe(graphId);
    }

    receiveEvent(event) {
        switch (event.sub) {
            case '_all':
                switch (event.type) {
                    case 'model.GraphCreatedEvent':
                        this.known_graphs.add(event.data.graph_id);
                        break;
                }
                break;
            default: {
                let graph_id = event.sub;
                if (event.type === 'model.GraphCreatedEvent') {
                    let graph = new Graph(event);
                    this.active_graphs.set(graph_id, graph);

                } else {
                    let graph = this.active_graphs.get(graph_id)
                    if (!graph) {
                        console.log("Got event for unknown graph ${graphId}")
                        return;
                    }
                    graph.receiveEvent(event)
                }
            }

        }
        this.on_changed(this);
    }

    getActiveGraphs() {
        return this.active_graphs;
    }

    getKnownGraphIds() {
        return this.known_graphs;
    }

}

export default Controller;
