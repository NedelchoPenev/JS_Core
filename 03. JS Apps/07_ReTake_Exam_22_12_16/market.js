function startApp() {
    const baseUrl = 'https://baas.kinvey.com/';
    const appId = 'kid_SJjjcWY4e';
    const appSecret = '7610c9b0431a43c1bce35b3444a5b91e';
    const base64Auth = btoa(appId + ':' + appSecret);

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
    }

    /**
     * Main logic
     */

    function processRegistration(event) {
        event.preventDefault();
        let username = $('#registerUsername').val().trim();
        let password = $('#registerPasswd').val().trim();
        let name = $('#registerName').val().trim();

        $.ajax({
            method: 'POST',
            url: baseUrl + 'user/' + appId,
            headers: {Authorization: `Basic ${base64Auth}`},
            contentType: 'application/json',
            data: JSON.stringify({
                username,
                password,
                name,
                cart: {}
            }),
            success: completeRegistration,
            error: errorHandler
        });

        function completeRegistration(userData) {
            updateSessionData(userData);
            renderMainMenu();
            setUsername();
            renderView('viewUserHome');
            renderNotifications('info', 'User registration successful.');
            clearInputs(['#registerUsername', '#registerPasswd', '#registerName']);
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
        });

        function completeLogin(userData) {
            updateSessionData(userData);
            renderMainMenu();
            setUsername();
            renderView('viewUserHome');
            renderNotifications('info', 'Login successful.');
            clearInputs(['#loginUsername', '#loginPasswd']);
        }
    }

    function updateProducts(product) {
        let name = product.name;
        let description = product.description;
        let price = product.price;
        let id = product._id;

        $.ajax({
            method: 'GET',
            url: baseUrl + 'user/' + appId + '/' + sessionStorage.getItem('userId'),
            headers: {Authorization: `Kinvey ${sessionStorage.getItem('token')}`},
        })
            .then(function (data) {
                let carts = data.cart;
                let quantity = 1;
                for (let prd in carts) {
                    if (prd == id){
                        quantity = ++carts[id].quantity;
                    }
                }
                carts[id] = {
                    quantity,
                    product: {
                        name,
                        description,
                        price: price * quantity
                    }
                };

                updateProduct(carts);
            })
            .catch(errorHandler);

        function updateProduct(cart) {
            let username = sessionStorage.getItem("username");
            let name = sessionStorage.getItem("name");
            $.ajax({
                method: 'PUT',
                url: baseUrl + 'user/' + appId + '/' + sessionStorage.getItem('userId'),
                headers: {Authorization: `Kinvey ${sessionStorage.getItem('token')}`},
                contentType: 'application/json',
                data: JSON.stringify({
                    username,
                    name,
                    cart
                }),
            })
                .then(completeUpdateProducts)
                .catch(errorHandler);

            function completeUpdateProducts() {
                renderView('viewCart');
                renderNotifications('info', 'Product purchased.');
            }
        }
    }

    /**
     * Display content
     */

    function renderMainMenu() {
        $('div#app > header').find('> a, > span').hide();
        $('#loadingBox, #infoBox, #errorBox').hide();
        if (!isLoggedIn()) {
            $('#linkMenuAppHome, #linkMenuLogin, #linkMenuRegister').show();
        } else {
            $('#linkMenuUserHome, #linkMenuShop, #linkMenuCart, #linkMenuLogout, #spanMenuLoggedInUser').show();
            setUsername();
        }
    }

    function renderView(name) {
        $('main section').hide();
        $('section#' + name).show();

        if (name == 'viewLogout') {
            logout();
        } else if (name == 'viewShop') {
            processShop();
        } else if (name == 'viewCart') {
            processCart();
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
                renderNotifications('info', 'Logout successful.');
            })
            .catch(errorHandler);
    }

    function processShop() {
        $('div#shopProducts table tbody').find('tr').remove();
        $.ajax({
            method: 'GET',
            url: baseUrl + 'appdata/' + appId + '/products',
            headers: {Authorization: `Kinvey ${sessionStorage.getItem('token')}`},
        })
            .then(renderMyMessages)
            .catch(errorHandler);

        function renderMyMessages(products) {
            let table = $('#shopProducts').find('tbody');

            for (let product of products) {
                let row = $('<tr>');
                row.append($('<td>')
                        .text(product.name),
                    $('<td>').text(product.description),
                    $('<td>').text(product.price.toFixed(2)));
                row.append($('<td>')
                    .append($('<button>')
                        .text('Purchase')
                        .on('click', () => updateProducts(product))));
                table.append(row);
            }
        }
    }

    function processCart() {
        $('#cartProducts').find('tbody').empty();
        $.ajax({
            method: 'GET',
            url: baseUrl + 'user/' + appId + '/' + sessionStorage.getItem('userId'),
            headers: {Authorization: `Kinvey ${sessionStorage.getItem('token')}`},
        })
            .then(renderCart)
            .catch(errorHandler)

        function renderCart(products) {
            let table = $('#cartProducts').find('tbody');

            for (let productId in products.cart) {
                let quantity = products.cart[productId].quantity;
                let name = products.cart[productId].product.name;
                let description = products.cart[productId].product.description;
                let price = Number(products.cart[productId].product.price);
                let row = $('<tr>');
                row.append($('<td>')
                        .text(name),
                    $('<td>').text(description),
                    $('<td>').text(quantity),
                    $('<td>').text(price.toFixed(2)));
                row.append($('<td>')
                    .append($('<button>')
                        .text('Discard')
                        .on('click', () => deleteProduct(productId))));
                table.append(row);
            }

            function deleteProduct(id) {
                $.ajax({
                    method: 'GET',
                    url: baseUrl + 'user/' + appId + '/' + sessionStorage.getItem('userId'),
                    headers: {Authorization: `Kinvey ${sessionStorage.getItem('token')}`},
                })
                    .then(function (data) {
                        let cart = data.cart;
                        for (let productId in data.cart) {
                            if (productId == id) {
                                delete cart[productId];
                                let username = sessionStorage.getItem("username");
                                let name = sessionStorage.getItem("name");
                                $.ajax({
                                    method: 'PUT',
                                    url: baseUrl + 'user/' + appId + '/' + sessionStorage.getItem('userId'),
                                    headers: {Authorization: `Kinvey ${sessionStorage.getItem('token')}`},
                                    contentType: 'application/json',
                                    data: JSON.stringify({
                                        username,
                                        name,
                                        cart
                                    }),
                                })
                                    .then(completeUpdateProducts)
                                    .catch(errorHandler);

                                function completeUpdateProducts() {
                                    renderView('viewCart');
                                    renderNotifications('info', 'Product discarded.');
                                }
                            }
                        }
                    })
                    .catch(errorHandler)
            }
        }
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
            }, 2500)
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

    function setUsername() {
        $('#spanMenuLoggedInUser').text("Welcome, " + sessionStorage.getItem('username') + "!");
        $('#viewUserHomeHeading').text("Welcome, " + sessionStorage.getItem('username') + "!");
    }

    function updateSessionData(userData) {
        sessionStorage.clear();
        sessionStorage.setItem('username', userData.username);
        sessionStorage.setItem('name', userData.name);
        sessionStorage.setItem('userId', userData._id);
        sessionStorage.setItem('token', userData._kmd.authtoken);

        setUsername();
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