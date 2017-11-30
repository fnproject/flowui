let oboe = require("oboe/dist/oboe-browser.min");

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
        oboe(url)
            .done((data) => {
                console.log("Received event from stream", data);
                data.result.is_lifecycle = isLifecycleStream;
                callback(data.result);
            })
            .fail((error) => {
                console.error(`Failed to subscribe to stream at ${url}`, error);
             });;
    }

    onChunkedResponseError(err) {
        console.error("Error processing chunk", err);
    }

}

export default CompleterStreamClient;
