function startApp() {
    const baseUrl = 'https://baas.kinvey.com/';
    const appId = 'kid_HyWFCd9Qe';
    const appSecret = '5333b1355f69448e8b1d4a8d28142656';
    const base64Auth = btoa(appId + ':' + appSecret);
    let currentUser = '';

    bindMainMenuEvents();
    bindActionEvents();
    renderMainMenu();
    renderView('viewAppHome');

    /**
     * Bind events
     */

    function bindMainMenuEvents() {
        $('header a').on('click', (event) => {
            let name = formatViewName($(event.target).attr('id'), 8);
            renderView(name);
        });

        $('#viewUserHome').find('a').on('click', (event) => {
            let name = formatViewName($(event.target).attr('id'), 12);
            renderView(name);
        });
    }

    function bindActionEvents() {
        $(document).on({
            ajaxStart: () => $('#loadingBox').show(),
            ajaxStop: () => {
                $('#loadingBox').hide()
            }
        });

        $('#formRegister').find('input[type="submit"]').click(processRegistration);
        $('#formLogin').find('input[type="submit"]').click(processLogin);
        $('#formSendMessage').submit(sendMessage);
    }

    /**
     * Main logic
     */

    function processRegistration(event) {
        event.preventDefault();
        let username = $('#registerUsername').val().trim();
        let password = $('#registerPasswd').val().trim();
        let name = $('#registerName').val().trim();

        // TODO: name check

        $.ajax({
            method: 'POST',
            url: baseUrl + 'user/' + appId,
            headers: {Authorization: `Basic ${base64Auth}`},
            contentType: 'application/json',
            data: JSON.stringify({
                username,
                password
            }),
            success: completeRegistration,
            error: errorHandler
        });

        function completeRegistration(userData) {
            updateSessionData(userData);
            renderMainMenu();
            welcomeMsg(userData.username);
            renderView('viewUserHome');
            renderNotifications('info', 'Successfully registered!');
            clearInputs(['#registerUsername', '#registerPasswd', '#registerName']);
            currentUser = userData.username;
        }
    }

    function processLogin(event) {
        event.preventDefault();
        let username = $('#loginUsername').val().trim();
        let password = $('#loginPasswd').val().trim();

        $.ajax({
            method: 'POST',
            url: baseUrl + 'user/' + appId + '/login',
            headers: {Authorization: `Basic ${base64Auth}`},
            contentType: 'application/json',
            data: JSON.stringify({
                username,
                password
            }),
            success: completeLogin,
            error: errorHandler
        })

        function completeLogin(userData) {
            updateSessionData(userData);
            renderMainMenu();
            welcomeMsg(userData.username);
            renderView('viewUserHome');
            renderNotifications('info', 'Successfully logged in!');
            clearInputs(['#loginUsername', '#loginPasswd']);
            currentUser = userData.username;
        }
    }

    function formatDate(dateISO8601) {
        let date = new Date(dateISO8601);
        if (Number.isNaN(date.getDate()))
            return '';
        return date.getDate() + '.' + padZeros(date.getMonth() + 1) +
            "." + date.getFullYear() + ' ' + date.getHours() + ':' +
            padZeros(date.getMinutes()) + ':' + padZeros(date.getSeconds());

        function padZeros(num) {
            return ('0' + num).slice(-2);
        }
    }

    function formatSender(name, username) {
        if (!name)
            return username;
        else
            return username + ' (' + name + ')';
    }

    /**
     * Display content
     */

    function processMyMessages() {
        $('div#myMessages table tbody').find('tr').remove();
        $.ajax({
            method: 'GET',
            url: baseUrl + 'appdata/' + appId + '/messages',
            headers: {Authorization: `Kinvey ${sessionStorage.getItem('token')}`},
        })
            .then(renderMyMessages)
            .catch(errorHandler);

        function renderMyMessages(messages) {
            let table = $('#myMessages').find('tbody');

            for (let message of messages) {
                if (message.recipient_username == currentUser) {
                    let row = $('<tr>');
                    row.append($('<td>')
                            .text(formatSender(message.sender_name, message.sender_username)),
                        $('<td>').text(message.text),
                        $('<td>').text(formatDate(message._kmd.lmt)));
                    table.append(row);
                }
            }
        }
    }

    function processArchive() {
        $('#sentMessages').find('tbody').empty();
        $.ajax({
            method: 'GET',
            url: baseUrl + 'appdata/' + appId + '/messages',
            headers: {Authorization: `Kinvey ${sessionStorage.getItem('token')}`},
        })
            .then(renderArchive)
            .catch(errorHandler)

        function renderArchive(messages) {
            let table = $('#sentMessages').find('tbody');

            for (let message of messages) {
                if (message.sender_username == currentUser) {
                    let row = $('<tr>');
                    row.append($('<td>')
                            .text(message.recipient_username),
                        $('<td>').text(message.text),
                        $('<td>').text(formatDate(message._kmd.lmt)));
                    row.append($('<td>')
                        .append($('<button>')
                            .text('Delete')
                            .on('click', () => deleteMessage(message._id))));
                    table.append(row);
                }
            }

            function deleteMessage(id) {
                $.ajax({
                    method: 'DELETE',
                    url: baseUrl + 'appdata/' + appId + '/messages/' + id,
                    headers: {Authorization: `Kinvey ${sessionStorage.getItem('token')}`}
                })
                    .then(function () {
                        renderView('viewArchiveSent');
                        renderNotifications('info', 'Message deleted!');
                    })
                    .catch(errorHandler)
            }
        }
    }

    function processSendMessage() {
        $.ajax({
            method: 'GET',
            url: baseUrl + 'user/' + appId,
            headers: {Authorization: `Kinvey ${sessionStorage.getItem('token')}`}
        })
            .then(renderRecipient)
            .catch(errorHandler)

        function renderRecipient(users) {
            $('#msgRecipientUsername').empty();
            for (let user of users) {
                $('<option>')
                    .text(formatSender(user.name, user.username))
                    .val(user.username)
                    .appendTo($('#msgRecipientUsername'))
            }
        }
    }

    function sendMessage(event) {
        event.preventDefault();
        let text = $('#msgText').val();
        let recipient_username = $('#msgRecipientUsername option:selected').val();
        let sender_username = sessionStorage.getItem('username');
        let sender_name = sessionStorage.getItem('name');

        $.ajax({
            method: 'POST',
            url: baseUrl + 'appdata/' + appId + '/messages',
            headers: {Authorization: `Kinvey ${sessionStorage.getItem('token')}`},
            contentType: 'application/json',
            data: JSON.stringify({
                sender_username,
                sender_name,
                recipient_username,
                text
            })
        })
            .then(function () {
                renderNotifications('info', 'Message sent!');
                renderView('viewArchiveSent');
            })
            .catch(errorHandler)
    }

    function renderMainMenu() {
        $('#menu').find('a').hide();
        $('#loadingBox, #infoBox, #errorBox').hide();
        if (!isLoggedIn()) {
            $('#linkMenuAppHome, #linkMenuLogin, #linkMenuRegister').show();
            $('#spanMenuLoggedInUser').hide();
        } else {
            $('#linkMenuUserHome, #linkMenuMyMessages, #linkMenuArchiveSent, #linkMenuSendMessage, #linkMenuLogout').show();
            $('#spanMenuLoggedInUser').show();
        }
    }

    function renderView(name) {
        $('main section').hide();
        $('section#' + name).show();

        if (name == 'viewLogout') {
            logout();
        } else if (name == 'viewMyMessages') {
            processMyMessages();
        } else if (name == 'viewArchiveSent') {
            processArchive();
        } else if (name == 'viewSendMessage') {
            processSendMessage();
        }
    }

    function logout() {
        $.ajax({
            method: 'POST',
            url: baseUrl + 'user/' + appId + '/_logout',
            headers: {Authorization: `Kinvey ${sessionStorage.getItem('token')}`}
        })
            .then(function () {
                sessionStorage.clear();
                renderMainMenu();
                renderView('viewAppHome');
                renderNotifications('info', 'Successfully logged out!');
                currentUser = '';
            })
            .catch(errorHandler);
    }

    function renderNotifications(type, text, autoHide = true, clickToClose = true) {
        let box = $('#' + type + 'Box');
        box.text(text).fadeIn(500);

        if (clickToClose) {
            box.on('click', function () {
                $(this).fadeOut()
            });
        }

        if (autoHide) {
            setInterval(function () {
                box.fadeOut()
            }, 3500)
        }
    }

    /**
     * Helper functions
     */

    function isLoggedIn() {
        return sessionStorage.getItem('token') && sessionStorage.getItem('username');
    }

    function formatViewName(str, removeChars = 0) {
        str = str.substr(removeChars);
        return 'view' + str;
    }

    function clearInputs(params) {
        for (let param of params) {
            $(param).val('');
        }
    }

    function welcomeMsg(name) {
        $('#spanMenuLoggedInUser, #viewUserHomeHeading').text(`Welcome, ${name}!`)
    }

    function updateSessionData(userData) {
        sessionStorage.clear();
        sessionStorage.setItem('username', userData.username);
        sessionStorage.setItem('name', userData.name);
        sessionStorage.setItem('userId', userData._id);
        sessionStorage.setItem('token', userData._kmd.authtoken);
    }

    function errorHandler(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0) {
            errorMsg = "Cannot connect due to network error.";
        }
        if (response.responseJSON &&
            response.responseJSON.description) {
            errorMsg = response.responseJSON.description;
        }

        renderNotifications('error', errorMsg, false);
    }
}

