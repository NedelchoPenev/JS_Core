function getInfo() {
    let stopId = $('#stopId').val();
    let stopName = $("#stopName");
    let busses = $('#buses');
    let url = 'https://judgetests.firebaseio.com/businfo/' + stopId +'.json';
    let request = {
        url,
        success: showBusesStops,
        error: showError
    };

    $.ajax(request);

    function showBusesStops(response) {
        stopName.text(response.name);
        for (let bus of Object.keys(response.buses)) {
                busses.append($('<li>')
                    .text(`Bus ${bus} arrives in ${response.buses[bus]} minutes`))
        }
    }

    function showError() {
        stopName.text('Error');
        busses.empty();
    }
}