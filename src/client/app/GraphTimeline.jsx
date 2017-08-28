import React from 'react';

class GraphTimeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            graph: new Graph(),
            eventsOfGraphs: new Map(),
        };
    }

    componentDidMount() {

    }

// Please note this currently only works for the first graph you create
    render() {
        return (
            <div>

            </div>
        );
    }
}