import React from 'react';

import {ForceGraphLink, ForceGraphNode, InteractiveForceGraph} from 'react-vis-force';


class SpringyView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            onNodeSelected: props.onNodeSelected,
            graph: props.graph,
            selectedNode: null,
            width: 1200,
            height: props.height,
            selectedDeps: new Map(),
            graphNode: props.graph.getNodes().shift(),
            nodeHeight: 30,
        };

    }


    render() {
        let nodes = [];
        let links = [];
        this.state.graph.getNodes().forEach((node) => {
            nodes.push((
                <ForceGraphNode key={node.id() + "_node"} node={{id: node.id(),label: node.op}}
                                fill="red"/>
            ));

            node.deps().forEach((dep) => {
                links.push((<ForceGraphLink key={node.id() + "_" + dep.id() + "_node"}
                                            link={{source: dep.id(), target: node.id()}}/>));
            });
        });

        return (
            <InteractiveForceGraph
                simulationOptions={{
                    height: this.state.height, width: this.state.width, animate: true,
                    strength: {x: (n) => {
                        return 1;
                    }}
                }}
                labelAttr="label"
                onSelectNode={(node) => console.log(node)}
                highlightDependencies>
                {nodes}
                {links}

            </InteractiveForceGraph>);
    }
}

export default SpringyView;
