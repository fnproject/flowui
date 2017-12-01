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
            live: props.live,
            minScale: props.minScale,
            dragging: false,
            dragStartX: 0,
            stopped: false,
            height: props.height,
            scrollBoxWidth: props.width
        };
        this.onDragStart = this.onDragStart.bind(this);
        this.relativeX = this.relativeX.bind(this);
    }

    componentWillReceiveProps(props) {

        this.setState(props);
    }

    componentDidMount() {
    }

    relativeX(timeStamp) {
        var minTs = this.state.graph.toBrowserTime(this.state.graph.created);
        const maxTs = this.state.graph.finished ? this.state.graph.toBrowserTime(this.state.graph.finished): Date.now();
        let curDurationTs = (maxTs - minTs);
        timeStamp = this.state.graph.toBrowserTime(timeStamp);

        if (curDurationTs < this.state.windowDurationMs) {
            return (timeStamp - minTs) * this.state.width / (this.state.windowDurationMs);
        } else {
            this.state.stopped = true;
            return (timeStamp - minTs) * this.state.width / curDurationTs;
        }
    }

    onDragStart(e) {
        //.log("Dragging: ",e);
        this.state.dragging = true;
        this.state.dragStartX = e.screenX;
        let listeners = {};
        listeners.moveListener = (wmme) => {
            let deltaX = wmme.screenX - this.state.dragStartX;
            let inverted;

            let minCursorTs = this.state.graph.toBrowserTime(this.state.graph.created);
            const maxTs = this.state.graph.finished? this.state.graph.toBrowserTime(this.state.graph.finished) : Date.now();
            const maxCursorTs = maxTs - this.state.windowDurationMs;
            let curDurationTs = (maxTs - minCursorTs);
            if (curDurationTs < this.state.windowDurationMs) {
                inverted = (this.state.windowDurationMs) / this.state.width;
            } else {
                inverted = this.state.width / curDurationTs;
            }

            let newCursorTs = this.state.cursorTs + (deltaX / inverted);
            newCursorTs = Math.min(newCursorTs, maxCursorTs);
            newCursorTs = Math.max(newCursorTs, minCursorTs);
            this.state.cursorTs = newCursorTs;

            this.state.onScrollChanged(newCursorTs);
            this.state.dragStartX = wmme.screenX;
            // this.setState(this.state);

        };
        listeners.moveListener = listeners.moveListener.bind(this);

        document.addEventListener('mousemove', listeners.moveListener);

        listeners.upListener = (wmu) => {
            // console.log("Done!!!",wmu);
            this.state.dragging = false;
            document.removeEventListener('mousemove', listeners.moveListener);
            document.removeEventListener('mouseup', listeners.upListener);
        };

        document.addEventListener('mouseup', listeners.upListener);
    }


    render() {

        let nodesArray = this.state.graph.getNodes()
        nodesArray.shift();
        let nodesByStart = nodesArray.filter((n) => n["started"] != null);
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
            if (rnode.completed) {
                runningCount -= 1;
                linePoints.push([rnode.completed, runningCount]);
            }
        });

        if (runningCount > 0) {
            linePoints.push([Date.now(), runningCount]);
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

        let curDurationTs = (maxTs - this.state.graph.created);

        if (curDurationTs < this.state.windowDurationMs) {
            this.state.scrollBoxWidth = this.state.width;
        } else {
            this.state.scrollBoxWidth = this.state.windowDurationMs * (this.state.width / curDurationTs);
        }

        let relativeY = function (count) {
            var minMax = Math.max(maxCount, 4);
            return count * (this.state.height / minMax);

        };
        relativeY = relativeY.bind(this);

        let elems = boxes.map((box, i) => {
            let estyle = {

                height: relativeY(box[2]) + 'px',
                left: Math.floor(this.relativeX(box[0])) + 'px',
                width: Math.ceil(this.relativeX(box[1]) - this.relativeX(box[0])) + 'px'

            };
            return (<div data-tooltip={box[2]} key={i} className={styles.graphblock}
                         style={estyle}> </div> );
        });

        var leftShadeStyle = {
            left: '0px',
            width: this.relativeX(this.state.cursorTs) - this.relativeX(this.state.graph.created),
            height: this.state.height + 'px'
        };

        var rightShadeLeftPx = this.relativeX(this.state.cursorTs) + this.state.scrollBoxWidth;
        var rightShadeWidth = this.state.width - rightShadeLeftPx;
       // console.log(`rsl ${rightShadeLeftPx} rsw : ${rightShadeWidth}`);
        var rightShadeStyle = {
            left: rightShadeLeftPx + 'px',
            width: rightShadeWidth + 'px',
            height: this.state.height + 'px'
        };

        let leftPosition;
        if (this.state.graph.isLive()) {
            leftPosition = {left: this.relativeX(Date.now())};
        } else {
            leftPosition = {left: this.relativeX(this.state.graph.finished)};
        }
        // console.log("CursorTs: " + this.state.cursorTs + ", Start: " + this.state.graph.created);
        //console.log(linePoints);
        return (<div>
            <div className={styles.zoomline}
                 style={{
                     width: this.state.width + 'px',
                     height: this.state.height + "px",
                 }}>
                {elems}
                <div className={styles.scrollboxshade} style={leftShadeStyle}> </div>
                <div onMouseDown={this.onDragStart} className={styles.scrollbox} style={{
                    height: this.state.height + "px",
                    left: this.relativeX(this.state.cursorTs) + 'px',
                    width: this.state.scrollBoxWidth + 'px'
                }}> </div>
                <div className={styles.scrollboxshade} style={rightShadeStyle}></div>
                <div className={styles.currentLine} style={leftPosition}>
                </div>
            </div>
        </div>)
    }
}


export default ZoomLine;
