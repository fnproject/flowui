import Graph from './graph.js';
//import CompleterWsClient from "./completerclient";
import MockCompleterClient from "./mockcompleterclient";
import CompleterWsClient from "./completerclient";


class Controller {

    constructor(onChanged, mock) {
        this.known_graphs = new Set();
        this.active_graphs = new Map();

        // this.client = new MockCompleterClient((e) => {
        //     this.receiveEvent(e);
        // });
        this.client = new CompleterWsClient((e) => {
            this.receiveEvent(e);
        });
        this.on_changed = onChanged;
        this.debounce_timeout = null;

    }


    subscribe(graphId) {
        this.client.subscribe(graphId);
    }

    receiveEvent(event) {
        switch (event.sub) {
            case '_all':
                switch (event.type) {
                    case 'model.GraphCreatedEvent':
                        this.known_graphs.add(event);
                        break;
                }
                break;
            default: {
              let graph;
                let graph_id = event.sub;
                if (event.type === 'model.GraphCreatedEvent') {
                    graph = new Graph(event);
                    this.active_graphs.set(graph_id, graph);

                } else {
                    graph = this.active_graphs.get(graph_id)
                    if (!graph) {
                        console.log("Got event for unknown graph ${graphId}")
                        return;
                    }
                }
                graph.receiveEvent(event)
            }

        }
        this.deBounce(() => this.on_changed(this), 100);
    }

    //debounces the number of updates to the runtime down to  a max of 10x per second
    deBounce(fn, deadline) {
        if (this.debounce_timeout === null) {
            this.debounce_timeout = setTimeout(() => {
                this.debounce_timeout = null;
                fn()
            }, deadline)
        }
    }

    getActiveGraphs() {
        return this.active_graphs;
    }

    getKnownGraphs() {
        return Array.from(this.known_graphs);
    }

}

export default Controller;
