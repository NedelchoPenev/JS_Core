function solve() {
    let url = 'https://judgetests.firebaseio.com/schedule/';
    let currentStop = 'depot';

    function depart() {
        buttonHandler('#depart', '#arrive');
        $.ajax({
            method: 'GET',
            url: url + currentStop + ".json",
            success: function (data) {
                $('#info').find('span').text(`Next stop ${data.name}`);
            }
        });
    }

    function arrive() {
        buttonHandler('#arrive', '#depart');
        $.ajax({
            method: 'GET',
            url: url + currentStop + ".json",
            success: function (data) {
                $('#info').find('span').text(`Arriving at ${data.name}`);
                currentStop = data.next;
            }
        });
    }

    function buttonHandler(btn1, btn2) {
        $(btn1).prop('disabled', true);
        $(btn2).prop('disabled', false);
    }

    return {
        depart,
        arrive
    };
}
let result = solve();