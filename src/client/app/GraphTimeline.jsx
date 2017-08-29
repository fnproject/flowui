import React from 'react';

class GraphTimeline extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            graph: props.graph,
        };
    }

    componentDidMount() {

    }

    render() {
      let nodes = this.state.graph.getNodes();
      let nodesString = nodes.map((n) => JSON.stringify(n)).join(", ");
      let minTime = null;

      nodes.forEach(node => {
        if (minTime === null || minTime > node.created){
          minTime = node.created;
        }
      });

      var relativeX = function (timeStamp) {
        return (timeStamp - minTime) * 0.3;
      }
      var idx = 0;
      var nodeElements = nodes.map((node)=>{
        let style={position:'absolute',top:'' + (idx++ * 30) + 'px', left:relativeX(node.created)};
          return (<div key={node.stageId} style={style} > {node.title}</div>);
        });



        return (
          <div>
            <div style={{position:'relative', width:"1024px", height:"1024px", border:"1px solid black"}}>
                {nodeElements}
            </div>
            <div>
              {nodesString}
            </div>
            </div>
        );
    }
}

export default GraphTimeline;
