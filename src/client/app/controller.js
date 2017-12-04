import Graph from './graph.js';

//import CompleterWsClient from "./completerclient";

class Controller {

    constructor(client, onChanged) {
        this.known_graphs = new Set();
        this.active_graphs = new Map();

        this.client = client;
        this.handleGraphEvent = this.handleGraphEvent.bind(this);
        this.handleLifecycleEvent = this.handleLifecycleEvent.bind(this);
        console.log("subscribing to lifecycle");
        this.lifecycleSub = client.subscribeLifecycleStream(this.handleLifecycleEvent);
        this.subs = {};

        this.on_changed = onChanged;
        this.debounce_timeout = null;
    }

    subscribe(flowId) {
        console.log("connecting to ",flowId);
        if (this.subs[flowId]) {
            return;
        }
        this.subs[flowId] = this.client.subscribeGraphStream(flowId, this.handleGraphEvent);
    }

    handleGraphEvent(event) {
        console.debug("Processing graph event", event)
        let graph;
        let flow_id = event.flow_id;

        if (event.graph_created) {
            graph = new Graph(event.graph_created);
            this.active_graphs.set(flow_id, graph);

        } else {
            graph = this.active_graphs.get(flow_id)
            if (!graph) {
                console.log(`Got event for unknown graph ${flow_id}`)
                return;
            }
        }
        graph.receiveEvent(event)
        this.deBounce(() => this.on_changed(this), 200);

    }

    handleLifecycleEvent(event) {
        console.log("Processing lifecycle event", event)
        if (event.graph_created) {
            this.known_graphs.add(event);
        }
        this.deBounce(() => this.on_changed(this), 200);
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
