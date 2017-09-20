

class FnClient {

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.loadLogs = this.loadLogs.bind(this);
        this.loadCall = this.loadCall.bind(this);
    }

    /**
     * Load logs
     * @param app_id app ID
     * @param call_id call ID
     * @return a promise for log data as a string
     */
    loadLogs(app_id, call_id) {
        return fetch(`${this.baseUrl}/v1/apps/${app_id}/calls/${call_id}/log`)
            .then((response) =>{
                    if (!response.ok) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    return response.json()
                        .then(function (data) {
                            if (data.error) {
                                throw data.error.message;
                            } else {
                                return data.log.log;
                            }
                        });
                }
            )
    }

    loadCall(app_id, call_id){
        return fetch(`${this.baseUrl}/v1/apps/${app_id}/calls/${call_id}`)
            .then(
                (response)=>{
                    if (!response.ok) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        throw `Error fetching logs for ${call_id}`;
                    }

                    return response.json()
                        .then((data)=>{
                            if(data.error){
                                throw data.error.message;
                            }else{
                                return data.call;
                            }
                        });

                }
            )
    }
}

export default FnClient;
