function logToServer(message) {
    fetch(process.env.REACT_APP_LOGGING_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: message
    }).then(r =>{})
}

export default logToServer