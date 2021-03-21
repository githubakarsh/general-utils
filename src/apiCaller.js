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

        if (!_.isEmpty(body) && (method === "POST" || method === "PUT")) {
            requestData.body = JSON.stringify(body);
        }

        if (credentials) {
            requestData.credentials = credentials;
        }
        const response = await fetch(url, requestData);
        const responseData = await response.json();

        if (response.status === 200) {
            console.log(responseData);
        } else {
            console.log("Service Error");
        }
    } catch (error) {
        // throw some error
        console.log("some error");
    }

}

module.exports = serviceApiRequest;