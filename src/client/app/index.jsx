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

        let live = true;
        if(graph.completed){
          live = false;
        }
        return (
            <div>
                <GraphTimeline graph={graph} onNodeSelected={this.onNodeSelected} live={live}/>
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
                <NodeDetail node={this.state.currentNode} nodeLogs={this.state.nodeLogs}/>
            </div>
        );
    }


    onNodeSelected(graph, node) {
      this.state.currentNode = node;

      if(node != null){
        let deps = Array.from(graph.findDepIds(node.stage_id));
        deps.reverse();
        deps.push(node.stage_id);
        console.log(deps)

        console.log(`node ${graph.graph_id}: ${node.stage_id} selected`);

        this.state.nodeLogs = new Map();
        for(let item of deps){
          let nodeDep = graph.getNode(item);
          if (nodeDep.call_id) {
              let index = nodeDep.function_id.indexOf("/");
              let appId = nodeDep.function_id.substring(0, index);
              this.state.fnclient.loadLogs(appId, nodeDep.call_id)
                  .then((logs) => {
                        if(logs != ""){
                          this.state.nodeLogs.set(nodeDep.stage_id, logs);
                          this.setState(this.state);
                        }
                  }).catch((e) => {
                    console.log("error loading logs: " + e.message);
              })
        }
        }
          this.setState(this.state);
        }


    }

    // Please note this currently only works for the first graph you create
    render() {
        var graphListItems = [];
        this.state.controller.getKnownGraphs().forEach((graph) => {
          let elem = (<div key={graph.data.graph_id}
                           style={{padding:'10px', textAlign:'center',
                           borderBottom: '3px double #CCCCCC'}}>
                           <a href="#"
                              onClick={() => this.onGraphSelected(graph.data.graph_id)}>{graph.data.function_id} {graph.data.graph_id}</a>

                     </div>);
            graphListItems.push(elem);
        });

        return (
            <div>
              <div style={{position:'absolute', minHeight:'1000px', top:'0px', left:'0px',
                 backgroundColor:'lightgrey', width:'400px', padding:'10px',}}>
                 {graphListItems}
              </div>
              <div>
                <div style={{WebkitBoxAlign: 'center', WebkitBoxPack: 'center', display: '-webkit-box'}}>
                    {this.renderCurrentGraph()}
                </div>
                <div style={{WebkitBoxAlign: 'center', WebkitBoxPack: 'center', display: '-webkit-box', height:'400px'}}>
                    {this.renderCurrentNode()}
                </div>
              </div>
            </div>
        );
    }

}

render(<App/>, document.getElementById('app'));
