

class FnClient {

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.loadLogs = this.loadLogs.bind(this);
    }

    /**
     * Load logs
     * @param app_id app ID
     * @param call_id call ID
     * @return a promise for log data as a string
     */
    loadLogs(app_id, call_id) {
        return fetch(`${this.baseUrl}/v1/apps/${app_id}/calls/${call_id}/log`)
            .then(
                function (response) {
                    if (response.ok) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    response.json()
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
}

export default FnClient;
