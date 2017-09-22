import NodeDetail from "./NodeDetail.jsx";
import React from 'react';
import {render} from 'react-dom';
import Controller from './controller.js';
import GraphTimeline from './GraphTimeline.jsx';
import FnClient from './fnclient.js';
import styles from './index.css'
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import MockCompleterClient from './mockcompleterclient.js';
import CompleterWsClient from './completerclient.js';
import {Button, ButtonGroup, Glyphicon} from 'react-bootstrap';
import SpringyView from "./Springy.jsx";

require('file-loader?name=[name].[ext]!./index.html');

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loadOnNew: true,
            currentGraph: null,
            currentNode: null,
            mode: 'timeline',
        };


        this.state.currentGraph = null;

        let client;
        if (props.match.path === '/mock') {
            client = new MockCompleterClient();
        } else {
            client = new CompleterWsClient();
        }

        this.state.controller = new Controller(client, (c) => {
            this.state.controller = c;
            if (!this.state.currentGraph && c.getKnownGraphs().length > 0 && this.state.loadOnNew) {
                this.onGraphSelected(c.getKnownGraphs().slice(-1)[0].data.graph_id);
            } else {
                this.setState(this.state);
            }
        });

        this.state.fnclient = new FnClient("/fn");


        this.onGraphSelected = this.onGraphSelected.bind(this);
        this.renderCurrentGraph = this.renderCurrentGraph.bind(this);
        this.renderCurrentNode = this.renderCurrentNode.bind(this);
        this.onNodeSelected = this.onNodeSelected.bind(this);
        this.setMode = this.setMode.bind(this);
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

        if (this.state.mode === 'timeline') {
            return (
                <div>
                    <GraphTimeline graph={graph} height='800' onNodeSelected={this.onNodeSelected}/>
                </div>
            );

        } else {
            return (
                <div>
                    <SpringyView graph={graph} height='800'  width='1024' onNodeSelected={this.onNodeSelected}/>
                </div>
            );

        }
    }


    renderCurrentNode() {
        if (this.state.currentNode == null) {
            return (
                <div></div>
            );
        }

        return (
            <div>
                <NodeDetail node={this.state.currentNode} nodeLogs={this.state.nodeLogs}
                            nodeCalls={this.state.nodeCalls}/>
            </div>
        );
    }


    onNodeSelected(graph, node) {
        this.state.currentNode = node;
        this.setState({currentNode: node});

        if ((node != null)) {
            let deps = Array.from(node.transitiveDeps(true));
            deps.reverse();
            deps.push(node);

            console.log(`node ${graph.graph_id}: ${node.stage_id} selected`);

            this.state.nodeLogs = new Map();
            this.state.nodeCalls = new Map();

            for (let nodeDep of deps) {
                this.state.nodeLogs.set(nodeDep, null);
                this.setState({nodeLogs: this.state.nodeLogs});
                if (nodeDep.call_id) {
                    let index = nodeDep.function_id.indexOf("/");
                    let appId = nodeDep.function_id.substring(0, index);
                    this.state.fnclient.loadLogs(appId, nodeDep.call_id)
                        .then((logs) => {
                            if (logs !== "") {
                                this.state.nodeLogs.set(nodeDep, logs);
                                this.setState({nodeLogs: this.state.nodeLogs});
                            }
                        })
                        .catch((e) => {
                            console.log("error loading logs: " + e.message);
                            throw e;
                        });
                    this.state.fnclient.loadCall(appId, nodeDep.call_id)
                        .then((callInfo) => {
                            this.state.nodeCalls.set(nodeDep, callInfo);
                            this.setState({nodeCalls: this.state.nodeCalls});
                        })
                        .catch((e) => {
                            console.log("error loading call: " + e.message);
                            throw e;
                        });
                }
            }
        }
    }

    setMode(mode) {
        this.setState({mode: mode});
    }

    // Please note this currently only works for the first graph you create
    render() {
        let graphListItems = [];
        this.state.controller.getKnownGraphs().forEach((graph) => {
            let elem = (<div key={graph.data.graph_id}
                             style={{
                                 padding: '10px', textAlign: 'center',
                                 borderBottom: '3px double #CCCCCC'
                             }}>
                <a href={"#" + this.props.location.pathname}
                   onClick={(e) => {
                       this.onGraphSelected(graph.data.graph_id);
                       e.stopPropagation();
                       e.nativeEvent.stopImmediatePropagation();
                   }}>{graph.data.function_id} {graph.data.graph_id}</a>

            </div>);
            graphListItems.push(elem);
        });

        return (
            <div>
                <div className={styles.graphlist}>
                    {/*<ButtonGroup>*/}
                        {/*<Button onClick={() => this.setMode('timeline')}*/}
                                {/*active={this.state.mode === 'timeline'}><Glyphicon glyph="align-left"/></Button>*/}
                        {/*<Button onClick={() => this.setMode('springy')}*/}
                                {/*active={this.state.mode === 'springy'}><Glyphicon glyph="flash"/></Button>*/}
                    {/*</ButtonGroup>*/}
                    {graphListItems}
                </div>
                <div className={styles.content}>

                    <div>
                        {this.renderCurrentGraph()}
                    </div>
                    <div>
                        {this.renderCurrentNode()}
                    </div>
                </div>
            </div>
        );
    }
}

render((<Router>
    <div>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/mock" component={App}/>
        </Switch>
    </div>
</Router>), document.getElementById('app'));
