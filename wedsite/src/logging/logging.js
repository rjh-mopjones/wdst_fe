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
        .then(response => {
            if (!response.ok) {
                console.error('Failed to log to server:', response.status);
            }
        })
        .catch(error => {
            console.error('Error while logging to server:', error);
        });
}

export default logToServer