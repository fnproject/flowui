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
            dragging:false,
            dragStartX: 0,
            height: 100
        };
        this.onDragStart = this.onDragStart.bind(this);
        this.relativeX = this.relativeX.bind(this);
    }

    componentWillReceiveProps(props) {
        // console.log("new props",props);

        this.state.windowDurationMs = props.windowDurationMs;
        this.state.maxTs = props.maxTs;
        this.state.cursorTs = props.cursorTs;

        this.setState(this.state);
    }

    componentDidMount() {
    }

    relativeX(timeStamp){
      var minTs = this.state.graph.created;
      const maxTs = this.state.graph.finished ? this.state.graph.finished : Date.now();
      let  curDurationTs = (maxTs - this.state.graph.created) ;
      if (curDurationTs < this.state.windowDurationMs){
        return (timeStamp - minTs) * this.state.width/(this.state.windowDurationMs);
      }else {
        return (timeStamp - minTs) * this.state.width/curDurationTs;
      }
    }

    onDragStart(e){
      //.log("Dragging: ",e);
      this.state.dragging = true;
      this.state.dragStartX = e.screenX;
      let listeners = {};
      listeners.moveListener = (wmme)=>{
        let deltaX = wmme.screenX - this.state.dragStartX ;
        let inverted;

        let minCursorTs = this.state.graph.created;
        const maxTs = this.state.graph.finished ? this.state.graph.finished : Date.now();
        const maxCursorTs = maxTs - this.state.windowDurationMs;
        let  curDurationTs = (maxTs - minCursorTs) ;
        if (curDurationTs < this.state.windowDurationMs){
          inverted = this.state.width/(this.state.windowDurationMs);
        }else {
          inverted = this.state.width/curDurationTs;
        }

        let newCursorTs = this.state.cursorTs   +  (deltaX/inverted);
        newCursorTs= Math.min(newCursorTs,maxCursorTs);
        newCursorTs= Math.max(newCursorTs,minCursorTs);
        this.state.cursorTs = newCursorTs;

        this.state.onScrollChanged(newCursorTs);
        this.state.dragStartX = wmme.screenX;
          //this.setState(this.state);

      };
      listeners.moveListener = listeners.moveListener.bind(this);

      document.addEventListener('mousemove',listeners.moveListener);

      listeners.upListener = (wmu)=>{
          // console.log("Done!!!",wmu);
          this.state.dragging= false;
          document.removeEventListener('mousemove',listeners.moveListener);
          document.removeEventListener('mouseup',listeners.upListener);
      };

      document.addEventListener('mouseup',listeners.upListener);
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

        let  curDurationTs = (maxTs - this.state.graph.created) ;

        let scrollBoxWidthPx;
        if (curDurationTs < this.state.windowDurationMs){
          scrollBoxWidthPx = this.state.width;
        }else{
          scrollBoxWidthPx = this.state.windowDurationMs * (this.state.width/curDurationTs);
        }

        let relativeY = function (count) {
            var  minMax = Math.max(maxCount,4);
            return count * (this.state.height / minMax);

        };
        relativeY = relativeY.bind(this);

        let elems = boxes.map((box, i) => {
            let estyle = {

                height: relativeY(box[2]) + 'px',
                left: this.relativeX(box[0]) + 'px',
                width: this.relativeX(box[1]) - this.relativeX(box[0]) + 'px'

            };
            return (<div data-tooltip={box[2]} key={i} className={styles.graphblock}
                         style={estyle}></div> );
        });

        var leftShadeStyle = {
          left: '0px',
          width:  this.relativeX(this.state.cursorTs) - this.relativeX(this.state.graph.created) ,
          height: this.state.height + 'px'
        };

        var rightShadeLeftPx= this.relativeX(this.state.cursorTs) + scrollBoxWidthPx;
        var rightShadeWidth = this.state.width - rightShadeLeftPx;

        var rightShadeStyle = {
          left: rightShadeLeftPx + 'px',
          width:  rightShadeWidth + 'px',
          height: this.state.height + 'px'
        };

        // console.log("CursorTs: " + this.state.cursorTs + ", Start: " + this.state.graph.created);
        //console.log(linePoints);
        return (<div>
            <div style={{
                position: 'relative',
                width: this.state.width + 'px',
                height: this.state.height + "px",
                border: "3px solid black"
            }} className={styles.viewport}>

                {elems}
                <div className={styles.scrollboxshade} style={leftShadeStyle}> </div>
                <div  onMouseDown={this.onDragStart} className={styles.scrollbox} style={{height: this.state.height + "px", left:this.relativeX(this.state.cursorTs)+ 'px', width:scrollBoxWidthPx + 'px'}}> </div>
                  <div className={styles.scrollboxshade} style={rightShadeStyle}> </div>

            </div>
        </div>)
    }
}


export default ZoomLine;
