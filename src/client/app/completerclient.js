

class CompleterWsClient {
    constructor(receiver) {
        this.receiver = receiver;

        let wsUrl = "ws://"+location.host+"/completer/wss";
        console.log("connecting to ws: ", wsUrl);

        this.ws =   new WebSocket(wsUrl);
        this.ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            receiver(data)
        };
    }

    subscribe(graphId) {
        let cmd = {command:'subscribe',graph_id:graphId};
        this.ws.send(JSON.stringify(cmd));
    }
}

export default CompleterWsClient;
