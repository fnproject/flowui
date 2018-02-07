let oboe = require("oboe/dist/oboe-browser.min");

class Subscription {
    constructor(baseUrl, callback, resumeSeq) {
        this.callback = callback;
        this.baseUrl = baseUrl;
        this.resmeSeq = resumeSeq;
        this.lastEvent = -1;
        this.running = true;

        this.connect();
    }

    connect() {

        let url = this.baseUrl;
        if (this.resmeSeq) {
            url += "?from_seq=" + (this.lastEvent + 1)
        }
        console.log("requesting stream ", url);

        this.oboe = oboe(url)
            .done((data) => {
                // console.log("Received event from stream", data);

                if (this.resmeSeq) {
                    this.lastEvent = data.result.seq;
                }
                if (this.running) {
                    try {
                        this.callback(data.result);
                    } catch (error) {
                        console.error("Failed to call callback. killing stream ");
                        this.close();
                    }
                }
            })
            .fail((error) => {
                console.error(`Failed to get data from stream stream at ${url}`, error);
                if (this.running) {
                    this.oboe.abort();
                    this.oboe = null;

                    console.log("trying to reconnect");

                    setTimeout(() => {
                        this.connect()
                    }, 1000);
                }
            });
    }

    close() {
        if (this.oboe !== null) {
            this.running = false;
            this.oboe.abort();
            this.oboe = null;
        }
    }
}

class CompleterStreamClient {
    constructor() {
        this.subscriptions = [];
    }

    subscribeLifecycleStream(callback) {
        let url = "/completer/v1/stream";
        let sub = new Subscription(url, callback, false);
        this.subscriptions.push(sub);
        return sub
    }

    subscribeGraphStream(flowId, callback) {
        let url = `/completer/v1/flows/${flowId}/stream`;

        let sub = new Subscription(url, callback, true);
        this.subscriptions.push(sub);
        return sub
    }

    close() {
        console.log("Closing client");
        this.subscriptions.forEach(s=>s.close());
    }

}

export default CompleterStreamClient;
