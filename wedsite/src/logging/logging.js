function logToServer(message) {
    // Replace 'https://logging-server.com/log' with your logging server endpoint
    const endpoint = 'http://homeDomain:8000/log-server';

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