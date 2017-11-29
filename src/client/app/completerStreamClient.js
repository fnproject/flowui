class CompleterStreamClient {

    constructor() {
        this.connect = this.connect.bind(this);
        this.connect();
        this.reciever = ()=>{}

    }

    connect() {
        let url = "/completer/v1/stream";
        console.log("connecting to stream: ", url);
        var target = this.reciever;
        this.subscribeStream(url, (msg)=>{

        });
    }

    subscribeStream(url, callback) {
        fetch(url, {method: 'GET'}).then(response => {
            let reader = response.body.getReader();

            let decoder = new TextDecoder('utf-8')
            let bytesReceived = 0;
            return reader.read().then(function processResult(result) {
                if (result.done) {
                    console.log("stream closed");
                    return;
                }

                bytesReceived += result.value.length;

                console.log("Got " + bytesReceived + "  byttes")

                let msg = decoder.decode(result.value);
                console.log("Got message : " + msg);

                let jsonMessage = JSON.parse(msg);

                callback(jsonMessage);
                return reader.read().then(processResult);
            });
        });
    }

    subscribe(graphId) {
        let cmd = {command: 'subscribe', graph_id: graphId};
        this.ws.send(JSON.stringify(cmd));
    }
}

export default CompleterStreamClient;
