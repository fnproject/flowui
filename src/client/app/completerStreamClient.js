class CompleterStreamClient {

    constructor() {
        this.connect = this.connect.bind(this);
        this.connect();
        this.receiver = ()=>{}
    }

    connect() {
        let url = "/completer/v1/stream";
        var target = this.receiver;
        this.subscribeStream(url, true, (msg)=>{
            this.receiver(msg);
        });
    }

    subscribeGraphStream(flowId) {
        let url = `/completer/v1/flows/${flowId}/stream`
        var target = this.receiver;        
        this.subscribeStream(url, false, (msg)=>{
            this.receiver(msg);
        });
    }

    subscribeStream(url, isLifecycleStream, callback) {
        console.log("Subscribing to stream on", url);        
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

                console.log("Got " + bytesReceived + "  bytes")

                let msg = decoder.decode(result.value);
                console.log("Got message : " + msg);

                let jsonMessage = JSON.parse(msg);
                jsonMessage.result.is_lifecycle = isLifecycleStream;

                callback(jsonMessage.result);
                return reader.read().then(processResult);
            });
        });
    }



}

export default CompleterStreamClient;
