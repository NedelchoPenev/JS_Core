function startApp() {
    const baseUrl = 'https://baas.kinvey.com/';
    const appId = 'kid_rJwNxVNme';
    const appSecret = 'e4aa52999cf4428985d96e5e56456981';
    const base64Auth = btoa(appId + ':' + appSecret);
    let lectureId = '';

    bindMainMenuEvents();
    bindActionEvents();
    renderMainMenu();
    renderView('viewHome');

    /**
     * Bind events
     */

    function bindMainMenuEvents() {
        $('header a').on('click', (event) => {
            let name = formatViewName($(event.target).attr('id'), 3);
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

        $('#register-button').on('click',processRegistration);
        $('#login-button').on('click', processLogin);
        $('#addLecture').on('click', processCreateLecture);
        $('#editLecture').on('click', () => editCalendar(lectureId));
    }

    /**
     * Main logic
     */

    function processRegistration() {
        let username = $('#registerUsername').val().trim();
        let password = $('#registerPassword').val().trim();
        let confirmPassword = $('#confirm-password').val().trim();

        if (!isEmpty([username, password, confirmPassword]) && password == confirmPassword) {
            clearInputs(['#registerUsername', '#registerPassword', '#confirm-password']);
            $.ajax({
                method: 'POST',
                url: baseUrl + 'user/' + appId,
                headers: {Authorization: `Basic ${base64Auth}`},
                contentType: 'application/json',
                data: JSON.stringify({username, password})
            })
                .then(completeRegistration)
                .catch(errorHandler)
        } else {
            errorHandler("Password does not match the confirm password.")
        }

        function completeRegistration(userData) {
            updateSessionData(userData);
            renderMainMenu();
            renderView('viewAdmin');
            renderMessage('info', 'Successfully registered!');
        }
    }

    function processLogin() {
        let username = $('#loginUsername').val().trim();
        let password = $('#loginPassword').val().trim();

        if (!isEmpty([username, password])) {
            clearInputs(['#loginUsername', '#loginPassword']);
            $.ajax({
                method: 'POST',
                url: baseUrl + 'user/' + appId + '/login',
                headers: {Authorization: `Basic ${base64Auth}`},
                contentType: 'application/json',
                data: JSON.stringify({username, password})
            })
                .then(completeLogin)
                .catch(errorHandler)
        }

        function completeLogin(userData) {
            updateSessionData(userData);
            renderMainMenu();
            renderView('viewAdmin');
            renderMessage('info', 'Successfully logged in!');
        }
    }

    function processCreateLecture() {
        let title = $('#addTitle').val().trim();
        let start = $('#addStart').val().trim();
        let end = $('#addEnd').val().trim();
        let lecturer = sessionStorage.getItem('user');

        if (!isEmpty([title, start, end]) ) {
            $.ajax({
                method: 'POST',
                url: baseUrl + 'appdata/' + appId + '/calendar',
                headers: {Authorization: `Kinvey ${sessionStorage.getItem('token')}`},
                contentType: 'application/json',
                data: JSON.stringify({
                    title,
                    start,
                    end,
                    lecturer
                })
            })
                .then(completeLectureCreation)
                .catch(errorHandler)
        }

        function completeLectureCreation() {
            clearInputs(['#addTitle', '#addStart', '#addEnd']);
            renderView('viewCalendar');
            renderMessage('info', 'Lecture created!');
        }
    }

    function processCalendar() {
        $('#cal').find('table').find('.data').empty();
        $.ajax({
            method: 'GET',
            url: baseUrl + 'appdata/' + appId + '/calendar',
            headers: {Authorization: `Kinvey ${sessionStorage.getItem('token')}`},
        })
            .then(renderCalendar)
            .catch(errorHandler)
    }

    /**
     * Display content
     */

    function renderMainMenu() {
        $('#menu').find('a').hide();
        if (!isLoggedIn()) {
            $('#btnHome, #btnLogin, #btnRegister').show();
        } else {
            $('#btnHome, #btnLogout, #btnCalendar, #btnLectures').show();
        }
    }

    function renderView(name) {
        $('main section').hide();

        if (name == "viewHome" && sessionStorage.getItem('user')){
            name = 'viewAdmin'
        }

        $('section#' + name).show();

        if (name == 'viewLogout') {
            logout();
        } else if (name == 'viewCalendar') {
            processCalendar();
        } else if (name == 'viewLectures'){
            renderView('viewAdd');
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
                renderView('viewHome');
                renderMessage('info', 'Successfully logged out!');
            })
            .catch(errorHandler);
    }

    function renderCalendar(lectures) {
        let table = $('#cal').find('table');

        for (let lecture of lectures) {
            let row = $('<tr class="data">');
            row.append($('<td>').text(lecture.title), $('<td>').text(lecture.start),
                $('<td>').text(lecture.end), $('<td>').text(lecture.lecturer));
            appendAdminCell(row, lecture);
            table.append(row);
        }

        function appendAdminCell(row, lecture) {
            let deleteLink = $('<a href="#">[Delete]</a>').on('click', () => deleteAd(lecture._id));
            let editLink = $('<a href="#">[Edit]</a>').on('click', () => viewEdit(lecture));
            if (lecture._acl.creator === sessionStorage.getItem('userId')) {
                row.append($('<td>').append(deleteLink, ' ', editLink));
            }

            function deleteAd(id) {
                $.ajax({
                    method: 'DELETE',
                    url: baseUrl + 'appdata/' + appId + '/calendar/' + id,
                    headers: {Authorization: `Kinvey ${sessionStorage.getItem('token')}`},
                })
                    .then(function () {
                        renderView('viewCalendar');
                        renderMessage('info', 'Lecture successfully deleted!');
                    })
                    .catch(errorHandler)
            }

            function viewEdit(lecture) {
                lectureId = lecture._id;
                renderView('viewEdit');
                $('#title').val(lecture.title);
                $('#start').val(lecture.start);
                $('#end').val(lecture.end);
            }
        }
    }

    function editCalendar(lecture) {
        let title = $('#title').val().trim();
        let start = $('#start').val().trim();
        let end = $('#end').val().trim();
        let lecturer = sessionStorage.getItem('user');

        if (!isEmpty([title, start, end])) {
            $.ajax({
                method: 'PUT',
                url: baseUrl + 'appdata/' + appId + '/calendar/' + lecture,
                headers: {Authorization: `Kinvey ${sessionStorage.getItem('token')}`},
                contentType: 'application/json',
                data: JSON.stringify({
                    title,
                    start,
                    end,
                    lecturer
                })
            })
                .then(completeUpdate)
                .catch(errorHandler)
        }

        function completeUpdate() {
            renderView('viewCalendar');
            renderMessage('info', 'lecture updated successfully!')
        }
    }

    function renderMessage(type, text, autoHide = true, clickToClose = true) {
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
            }, 5500)
        }
    }

    /**
     * Helper functions
     */

    function isLoggedIn() {
        return sessionStorage.getItem('token') && sessionStorage.getItem('user');
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

    function isEmpty(params) {
        for (let param of params) {
            if (param === '') {
                return true;
            }
        }

        return false;
    }

    function updateSessionData(userData) {
        sessionStorage.clear();
        sessionStorage.setItem('user', userData.username);
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

        renderMessage('error', errorMsg, false);
    }
}