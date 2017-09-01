import React from 'react';

import styles from './zoomline.css'

class ZoomLine extends React.Component {

    constructor(props) {
        super(props)
        //console.log(props);

        this.state = {
            windowDurationMs: props.windowDurationMs ,
            maxTs: props.maxTs,
            cursorTs: props.cursorTs,
            onScrollChanged: props.onScrollChanged,
            graph: props.graph,
            width: props.width,
            height:100
        };
    }

    componentWillReceiveProps(props) {
        //console.log(props);

        this.state.windowDurationMs= props.windowDurationMs;
        this.state.maxTs = props.maxTs;
        this.state.cursorTs = props.cursorTs;

        this.setState(this.state);
    }

    componentDidMount() {
    }

    render() {


        let nodesByStart = this.state.graph.getNodes().filter((n)=>n["started"] !=null);
        nodesByStart.sort((a, b) => a.started - b.started);
        // running sorted by completion time (increasing)
        let running = [];
        let linePoints = [];


        // todo  deal with running nodes
        if(nodesByStart.length === 0){
          return (
            <div>

            </div>
          )
        }
        var minTs = this.state.graph.created;

        // map
        let relativeX = function (ts) {
            let ratio = (this.state.width) / (this.state.maxTs - minTs);

            let val =  (ts - minTs) * Math.min(ratio,100/this.state.width);
            //console.log(`${ts} -> ${val} r${ratio}`);
            return val;
        };


        relativeX = relativeX.bind(this);

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
            linePoints.push([Date.now(), running.length]);
        });


        var maxCount = linePoints.reduce((v,e)=>Math.max(v,e[1]),0);
        let relativeY = function (count) {
            return count * (this.state.height/maxCount);
        };
        relativeY = relativeY.bind(this);

        var lastPoint = [minTs, 0];
        let elems = [];

        linePoints.forEach((point,i) => {
            let estyle = {

                height: relativeY(lastPoint[1]) + 'px',
                left: relativeX(lastPoint[0])+ 'px',
                width: relativeX(point[0]) - relativeX(lastPoint[0]) + 'px'

            };
            console.log("e",estyle);
            elems.push((<div  key={point} className={styles.graphblock} style={estyle}></div> ));
            lastPoint = point;
        });

        //console.log(elems);
        return (<div style={{position: 'relative', width: this.state.width + 'px', height: this.state.height + "px", border:"1px solid black"}} className={styles.viewport}>

            {elems}
        </div>)
    }
}


export default ZoomLine;
