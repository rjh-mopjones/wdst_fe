function logToServer(message) {
    const endpoint = process.env.REACT_APP_LOGGING_ENDPOINT

    // Log object to send
    fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: message
    })
}

export default logToServer