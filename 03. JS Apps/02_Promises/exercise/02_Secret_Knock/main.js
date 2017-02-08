function secretKnock() {
    const appId = 'kid_BJXTsSi-e';
    const secret = '447b8e7046f048039d95610c1b039390';
    const appDataUrl = `https://baas.kinvey.com/appdata/${appId}/knock`;
    const appLoginUrl = `https://baas.kinvey.com/user/${appId}/login`;
    const username = 'guest';
    const password = 'guest';
    const base64auth = btoa(username + ":" + password);

    let message = 'Knock Knock.';
    let authenticationToken;
    $.post({
        url: appLoginUrl,
        headers: {
            Authorization: `Basic ${base64auth}`
        },
        data: {
            'username': username,
            'password': password
        }
    })
        .then(function (data) {
            authenticationToken = data._kmd.authtoken;
            processRequests();
        })
        .catch(displayError);
    
    function processRequests() {
        if (message != ''){
            $.get({
                url: `${appDataUrl}?query=${message}`,
                headers: {
                    Authorization: `Kinvey ${authenticationToken}`
                }
            })
                .then(function (data) {
                    console.log(message);
                    displayMessage(message); // just for fun
                    message = data.message || '';
                    console.log(data.answer);
                    displayMessage(data.answer); // just for fun

                    processRequests();
                })
                .catch(displayError);
        }
    }
    
    function displayMessage(message) {
        $('#result')
            .append($('<li>')
                .text(message));
    }
    
    function displayError(error) {
        console.dir(error);
    }
}