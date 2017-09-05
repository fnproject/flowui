import NodeDetail from "./NodeDetail.jsx";
import React from 'react';
import {render} from 'react-dom';
import Controller from './controller.js';
import GraphTimeline from './GraphTimeline.jsx';
import FnClient from './fnclient.js';

require('file-loader?name=[name].[ext]!./index.html');


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loadOnNew: true,
            currentGraph: null,
            currentNode: null,
        };


        this.state.currentGraph = null;
        this.state.controller = new Controller((c) => {
            this.state.controller = c;
            if (!this.state.currentGraph && c.getKnownGraphs().length > 0 && this.state.loadOnNew) {
                this.onGraphSelected(c.getKnownGraphs().slice(-1)[0].data.graph_id);
            } else {
                this.setState(this.state);
            }
        });

        this.state.fnclient = new FnClient("http://localhost:8080");


        this.onGraphSelected = this.onGraphSelected.bind(this);
        this.renderCurrentGraph = this.renderCurrentGraph.bind(this);
        this.renderCurrentNode = this.renderCurrentNode.bind(this);
        this.onNodeSelected = this.onNodeSelected.bind(this);
    }


    componentDidMount() {

    }

    onGraphSelected(graphId) {
        console.log(`selected graph ${graphId}`);
        this.state.currentGraph = graphId;
        this.state.controller.subscribe(graphId);
        this.state.currentNode = null;
        this.setState(this.state);

    }

    renderCurrentGraph() {
        if (this.state.currentGraph == null) {
            return (
                <div>
                    Select a graph or start running.
                </div>
            );
        }
        var activeGraphs = this.state.controller.getActiveGraphs();
        var graph = activeGraphs.get(this.state.currentGraph);
        if (graph == null) {
            return (
                <div>
                    Graph loading...
                </div>
            );
        }
        //console.log(graph);
        return (
            <div>
                <GraphTimeline live={true} graph={graph} onNodeSelected={this.onNodeSelected}/>
            </div>
        );
    }


    renderCurrentNode() {
        if (this.state.currentNode == null) {
            return (
                <div></div>
            );
        }

        return (
            <div>
                <NodeDetail node={this.state.currentNode} nodeLog={this.state.nodeLogs}/>
            </div>
        );
    }


    onNodeSelected(graph, node) {
        console.log(`node ${graph.graph_id}: ${node.stage_id} selected`);

        this.state.currentNode = node;

        if (node.call_id) {
            let index = node.function_id.indexOf("/");
            let appId = node.function_id.substring(0, index);
            this.state.fnclient.loadLogs(appId, node.call_id)
                .then((logs) => {
                    if (this.state.currentNode === node) {
                        this.state.nodeLogs = logs;
                        this.setState(this.state);
                    }
                }).catch((e) => {
                if (this.state.currentNode === node) {
                    this.state.nodeLogs = "error loading logs";
                    this.setState(this.state);
                }
            });
        }

        this.setState(this.state);
    }

    // Please note this currently only works for the first graph you create
    render() {
        var graphListItems = [];
        this.state.controller.getKnownGraphs().forEach((graph) => {
            graphListItems.push(<li key={graph.data.graph_id}><a href="#"
                                                                 onClick={() => this.onGraphSelected(graph.data.graph_id)}>{graph.data.function_id} {graph.data.graph_id}</a>
            </li>);
        });

        return (
            <div>
                <div>
                    <ul>
                        {graphListItems}
                    </ul>
                </div>
                <div style={{WebkitBoxAlign: 'center', WebkitBoxPack: 'center', display: '-webkit-box'}}>
                    {this.renderCurrentGraph()}
                </div>
                <div style={{WebkitBoxAlign: 'center', WebkitBoxPack: 'center', display: '-webkit-box'}}>
                    {this.renderCurrentNode()}
                </div>

            </div>
        );
    }

}

render(<App/>, document.getElementById('app'));
