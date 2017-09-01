import React from 'react';

import styles from './zoomline.css'

class ZoomLine extends React.Component {

    constructor(props) {
        super(props)
        //console.log(props);

        this.state = {
            windowDurationMs: props.windowDurationMs,
            maxTs: props.maxTs,
            cursorTs: props.cursorTs,
            onScrollChanged: props.onScrollChanged,
            graph: props.graph,
            width: props.width,
            minScale: props.minScale,
            height: 100
        };
    }

    componentWillReceiveProps(props) {
        //console.log(props);

        this.state.windowDurationMs = props.windowDurationMs;
        this.state.maxTs = props.maxTs;
        this.state.cursorTs = props.cursorTs;

        this.setState(this.state);
    }

    componentDidMount() {
    }

    render() {


        let nodesByStart = this.state.graph.getNodes().filter((n) => n["started"] != null);
        nodesByStart.sort((a, b) => a.started - b.started);
        // running sorted by completion time (increasing)
        let running = [];
        let linePoints = [];


        // todo  deal with running nodes
        if (nodesByStart.length === 0) {
            return (
                <div>

                </div>
            )
        }
        var minTs = this.state.graph.created;


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

        var runningCount = running.length;
        running.forEach((rnode, i) => {
            if(rnode.completed){
                runningCount-=1;
                linePoints.push([rnode.completed, runningCount]);
            }
        });

        if(runningCount > 0){
            linePoints.push([Date.now(),runningCount]);
        }


        const maxCount = linePoints.reduce((v, e) => Math.max(v, e[1]), 0);
        let boxes = []; //[[start,end, count],...]

        let lastPoint = [this.state.graph.created, 0];
        const maxTs = this.state.graph.finished ? this.state.graph.finished : Date.now();

//        console.log(linePoints);

        linePoints.forEach((lp, idx) => {
            boxes.push([lastPoint[0], lp[0], lastPoint[1]]);
            lastPoint = lp;
        });

        let relativeX = function (timeStamp) {
            // graph duration is less than the window, render whatever we have at a fixed scale

            return (timeStamp - minTs) * 0.06;
        };

        relativeX = relativeX.bind(this);

        let relativeY = function (count) {
            var  minMax = Math.max(maxCount,4);
            return count * (this.state.height / minMax);

        };
        relativeY = relativeY.bind(this);

        let elems = boxes.map((box, i) => {
            let estyle = {

                height: relativeY(box[2]) + 'px',
                left: relativeX(box[0]) + 'px',
                width: relativeX(box[1]) - relativeX(box[0]) + 'px'

            };
            return (<div data-tooltip={box[2]} key={i} className={styles.graphblock}
                         style={estyle}></div> );
        });

        //console.log(linePoints);
        return (<div>
            <div style={{
                position: 'relative',
                width: this.state.width + 'px',
                height: this.state.height + "px",
                border: "1px solid black"
            }} className={styles.viewport}>

                {elems}
            </div>
        </div>)
    }
}


export default ZoomLine;
