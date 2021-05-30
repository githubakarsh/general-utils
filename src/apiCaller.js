const _ = require('lodash');

async function serviceApiRequest(serviceRequest, successManager, failureManager) {
    const { url, method, headers, body, mode, credentials } = serviceRequest;
    if (!url || !method) {
        return;
    }

    try {
        const requestData = {
            method: method,
            headers: { "Content-Type": "application/json" },
        };

        if(!_.isEmpty(headers)) {
            requestData.headers = headers;
        }

        if (!_.isEmpty(body) && (method === "POST" || method === "PUT")) {
            requestData.body = JSON.stringify(body);
        }

        if (credentials) {
            requestData.credentials = credentials;
        }

        if(code) {
            requestData.mode = mode;
        }

        const response = await fetch(url, requestData);
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        // throw some error
        return error;
    }

}

export default serviceApiRequest;