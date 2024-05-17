function logToServer(message) {
    const endpoint = process.env.REACT_APP_LOGGING_ENDPOINT

    // Log object to send
    try {
        fetch(endpoint, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: message
        }).catch((error) => console.log("logging failed error: " + error.toString()))
    } catch (e) {
        console.log("logging failed with: " + e.toString())
    }
}

export default logToServer