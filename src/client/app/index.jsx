require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import {render} from 'react-dom';
import Controller from './controller.js';
import GraphTimeline from './GraphTimeline.jsx';
import ZoomLine from './ZoomLine.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);
        let controller = new Controller((c) => {
            this.state.controller = c;
            if(!this.state.currentGraph && c.getKnownGraphIds().length > 0 && this.state.loadOnNew){
                this.onGraphSelected(c.getKnownGraphIds().slice(-1)[0]);
            }else{
                this.setState(this.state);
            }
        });

        this.state = {
            loadOnNew: true,
            controller: controller,
            currentGraph: null,
        };
        this.onGraphSelected = this.onGraphSelected.bind(this);
        this.renderCurrentGraph = this.renderCurrentGraph.bind(this);
        this.onNodeSelected = this.onNodeSelected.bind(this);
    }


    componentDidMount() {

    }

    onGraphSelected(graphId) {
        console.log(`selected graph ${graphId}`);
        this.state.currentGraph = graphId;
        this.state.controller.subscribe(graphId);
        this.setState(this.state);

    }

    renderCurrentGraph() {
        if (this.state.currentGraph == null) {
            return (
                <div>
                    Select a graph
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
        console.log(graph);
        return (
            <div>
                <GraphTimeline graph={graph}  onNodeSelected={this.onNodeSelected}/>
                <ZoomLine graph={graph}></ZoomLine>
            </div>
        );
    }

    onNodeSelected(graph,node){
        console.log(`node ${graph.graph_id}: ${node.stage_id} selected`);
    }

// Please note this currently only works for the first graph you create
    render() {
        var graphListItems = [];
        this.state.controller.getKnownGraphIds().forEach((graphId) => {
            graphListItems.push(<li key={graphId}><a href="#"
                                                     onClick={() => this.onGraphSelected(graphId)}>Graph {graphId}</a>
            </li>);
        });

        return (
            <div>
                <div>
                    <ul>
                        {graphListItems}
                    </ul>
                </div>
                <div>
                    {this.renderCurrentGraph()}
                </div>
            </div>
        );
    }

}

render(<App/>, document.getElementById('app'));
