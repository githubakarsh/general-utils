const _ = require('lodash');

/**
 * @variable serviceRequest must be a Object
 * 
 */

async function serviceApiRequest(serviceRequest, successManager, failureManager) {
    if(_.isEmpty(serviceRequest)) {
        return {message : "service request object is empty ....."};
    }
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
        successManager(responseData);
    } catch (error) {
        // throw some error
        failureManager(error);
    }

}

export default serviceApiRequest;