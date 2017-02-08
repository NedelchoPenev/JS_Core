function timer() {
    let time = 0, intervalID;
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');
    let isTicking = false;

    startBtn.on('click', function () {
        if (!isTicking) {
            intervalID = setInterval(incrementTime, 1000);
            isTicking = true;
        }
    });

    stopBtn.on('click', function () {
        clearInterval(intervalID);
        isTicking = false;
    });

    function incrementTime() {
        time++;
        let seconds = ('0' + (time % 60)).slice(-2);
        let minutes = ('0' + Math.trunc(time/60) % 60).slice(-2);
        let hours = ('0' + Math.trunc(time/3600) % 60).slice(-2);

        $('#hours').text(hours);
        $('#minutes').text(minutes);
        $('#seconds').text(seconds);
    }
}