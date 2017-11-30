class CompleterStreamClient {

    constructor() {
        this.connect = this.connect.bind(this);
        this.connect();
        this.receiver = ()=>{}
    }

    connect() {
        let url = "/completer/v1/stream";
        //let url = `/completer/v1/flows/cbb714b8-0e7e-450d-b53a-2a0b98226118/stream`
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
        fetch(url, {method: 'GET', mode: 'no-cors'}).then(response => {
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

                let chunk = decoder.decode(result.value);
                // newline delimited JSON events
                var msgs = chunk.split('\n');
                console.log(`Received ${msgs.length - 1} events in cunk`);

                for (var i = 0; i < msgs.length - 1; i++) {
                    console.log("Processing msg", msgs[i]);                    
                    let jsonMessage = JSON.parse(msgs[i]);
                    jsonMessage.result.is_lifecycle = isLifecycleStream;
                    callback(jsonMessage.result);
                }
                return reader.read().then(processResult);
            });
        })
        .catch(this.onChunkedResponseError);
    }

    onChunkedResponseError(err) {
        console.error("Error processing chunk", err);
    }

}

export default CompleterStreamClient;
