class CompleterWsClient {


    constructor(receiver) {
        this.receiver = receiver;
        this.tryWsConnect = this.tryWsConnect.bind(this);
        this.tryWsConnect();

    }

    tryWsConnect() {

        let wsUrl = "ws://" + location.host + "/completer/wss";
        console.log("connecting to ws: ", wsUrl);

        const ws = new WebSocket(wsUrl);
        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            this.receiver(data)
        };

        ws.onerror = (event) => {
            console.log("Error on WS");
        };

        ws.onopen = (event) => {
            console.log("Connected");

        };

        ws.onclose = (event) => {
            console.log("WS disconnected");n
            setTimeout(this.tryWsConnect,1000);
        };

        this.ws = ws;
    }

    subscribe(graphId) {
        let cmd = {command: 'subscribe', graph_id: graphId};
        this.ws.send(JSON.stringify(cmd));
    }
}

export default CompleterWsClient;
