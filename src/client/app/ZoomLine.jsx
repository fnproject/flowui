import React from 'react';

import styles from './zoomline.css'

class ZoomLine extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            currentX: 0,
            width: 200,
            onSelectionChanged: props.onSelectionChanged,
            graph: props.graph
        };
    }

    componentDidMount() {
    }

    render() {


        let nodesByStart = this.state.graph.getNodes();
        nodesByStart.sort((a, b) => a.started - b.started);
        // running sorted by completion time (increasing)
        let running = [];
        let linePoints = [];

        const width = 1024;


        // todo  deal with running nodes
        var maxTs = nodesByStart[nodesByStart.length - 1].completed;
        var minTs = this.state.graph.created;

        let relativeX = function (ts) {
            return (ts - minTs / ((maxTs - minTs)));
        };


        nodesByStart.forEach((node) => {
            let ts = node.started;
            running.forEach((rnode) => {
                if (rnode.completed < ts) {
                    running.splice(running.indexOf(rnode), 1);
                    linePoints.push([rnode.completed, running.length]);
                }
            });

            let insertIndex = running.findIndex((n) => n.completed > node.completed);
            if (insertIndex === -1) {
                running.push(node);
            } else {
                running.splice(insertIndex, 0, node);
            }
            linePoints.push([node.started, running.length]);
        });
        running.forEach((rnode) => {
            running.splice(running.indexOf(rnode), 1);
            linePoints.push([rnode.completed, running.length]);
        });


        var maxCount = linePoints.reduce((v,e)=>Math.max(v,e[1]),0);
        let relativeY = function (count) {
            return count * 20;
        };
        var lastPoint = [0, 0];
        let elems = [];

        linePoints.forEach((point,i) => {
            let estyle = {
                position: 'absolute',
                bottom: 0,
                height: relativeY(lastPoint[1]) + 'px',
                left: relativeX(lastPoint[0])+ 'px',
                width: relativeX(point[0]) - relativeX(lastPoint[1]) + 'px'
            };
            elems.push((<div  key={point} className={styles.graphblock} style={estyle}/> ));
            lastPoint = point;
        });

        console.log(elems);
        return (<div style={{position: 'relative', width: "1024px", height: "100px", border:"1px solid black"}} className={styles.viewport}>
            {elems}
        </div>)
    }
}


export default ZoomLine;