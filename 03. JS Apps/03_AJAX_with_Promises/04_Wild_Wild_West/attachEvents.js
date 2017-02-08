function attachEvents() {
    const url = 'https://baas.kinvey.com/appdata/kid_B1nmzVufx/players/';
    const base64Auth = btoa('guest:pass');
    const authorization = {Authorization: `Basic ${base64Auth}`,
        'Content-Type': 'application/json'};
    let savedPlayers = $('#players');
    let saveBtn = $('#save');
    let reloadBtn = $('#reload');

    getPlayers();
    $('#addPlayer').click(addPlayer)

    function getPlayers() {
        $.get({
            url: url,
            headers: authorization
        })
            .then(renderPlayers)
            .catch(displayError);
        $('#addPlayer').removeAttr('disabled')
    }

    function addPlayer() {
        let playerName = $('#addName').val().trim();
        if (playerName != '') {
            $.ajax({
                method: "POST",
                url: url,
                headers: authorization,
                data: JSON.stringify({
                    name: playerName,
                    money: 500,
                    bullets: 6
                }),
            })
                .then(getPlayers)
                .catch(displayError)
            $('#addName').val('');
        }
    }

    function renderPlayers(players) {
        savedPlayers.empty();
        for (let player of players) {
            let playerHtml = `<div class="player" data-id="${player._id}">
            <div class="row">
                <label>Name:</label>
                <label class="name">${player.name}</label>
            </div>
            <div class="row">
                <label>Money:</label>
                <label class="money">${player.money}</label>
            </div>
            <div class="row">
                <label>Bullets:</label>
                <label class="bullets">${player.bullets}</label>
            </div>
            <button class="play">Play</button>
            <button class="delete">Delete</button>
        </div>`;
            savedPlayers.append(playerHtml);
            $(`[data-id="${player._id}"]`).find('.delete').click(() => deletePlayer(player));
            $(`[data-id="${player._id}"]`).find('.play').click(() => startGame(player));
        }
    }

    function deletePlayer(player) {
        $.ajax({
            method: "DELETE",
            url: url + player._id,
            headers: authorization
        })
            .then(getPlayers)
            .catch(displayError)
    }

    function startGame(player) {
        saveBtn.show();
        reloadBtn.show();
        $('#canvas').show();
        loadCanvas(player);
        $('.play').attr('disabled', 'disabled');
        $('.delete').attr('disabled', 'disabled');
        $('#addPlayer').attr('disabled', 'disabled');
        saveBtn.click(() => putPlayer(player));
        reloadBtn.click(() => reloadPlayerBullets(player));
    }

    function putPlayer(player) {
        $.ajax({
            method: "PUT",
            url: url + player._id,
            headers: authorization,
            data: JSON.stringify({
                name: player.name,
                money: player.money,
                bullets: player.bullets
            }),
        })
            .then(clearCanvas)
            .then(getPlayers)
            .catch(displayError)
    }

    function reloadPlayerBullets(player) {
        player.bullets = 6;
        player.money -= 60;
    }

    function clearCanvas() {
        saveBtn.hide();
        reloadBtn.hide();
        $('#canvas').hide();
        let canvas = document.getElementById("canvas");
        clearInterval(canvas.intervalId);
    }

    function displayError(error) {
        console.log(error);
    }
}