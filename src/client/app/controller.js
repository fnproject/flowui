import Graph from './graph.js';

//import CompleterWsClient from "./completerclient";


class Controller {

    constructor(client, onChanged) {
        this.known_graphs = new Set();
        this.active_graphs = new Map();

        this.client = client;
        client.receiver = (e) => {
            this.receiveEvent(e);
        };
        this.on_changed = onChanged;
        this.debounce_timeout = null;
    }


    subscribe(flowId) {
        this.client.subscribeGraphStream(flowId);
    }

    receiveEvent(event) {
        if (event.is_lifecycle) {
            this.handleLifecycleEvent(event);
        } else {
            this.handleGraphEvent(event);
        }
        this.deBounce(() => this.on_changed(this), 200);        
    }

    handleGraphEvent(event) {
        console.log("Processing flow event", event)
        let graph;
        if (!event.flow_id) {
            console.warn("No flow id for event", event);
            return;
        } 
        let flow_id = event.flow_id;

        if (event.graph_created) {
            graph = new Graph(event.graph_created);
            this.active_graphs.set(flow_id, graph);
            
        } else {
            graph = this.active_graphs.get(flow_id) 
            if (!graph) {
                console.warn(`Got event for unknown flow ${flow_id}`)
                return;
            }
        }
        graph.receiveEvent(event)                
    }

    handleLifecycleEvent(event) {
        console.log("Processing lifecycle event", event)        
        if (event.graph_created) {
            this.known_graphs.add(event);
        }
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
