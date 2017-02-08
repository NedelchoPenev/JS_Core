function attachEvents() {
    const getUrl = 'https://judgetests.firebaseio.com/locations.json';
    const forecastSymbols = {
        Sunny: "&#x2600", // ☀
        "Partly sunny": "&#x26C5",// ⛅
        Overcast: "&#x2601", // ☁
        Rain: "&#x2614", // ☂
    };
    let weatherContainer = $('#forecast');
    let current = $('#current');
    let upcomingWeather = $('#upcoming');

    $('#submit').click(getLocation);

    function getLocation() {
        $.get(getUrl)
            .then(FindCities)
            .catch(displayError)
    }

    function FindCities(data) {
        let searchedCity = $('#location').val().trim();
        for (let city of data) {
            let code = city.code;
            if (searchedCity == city.name) {
                currentForecaster(code);
            }
        }
    }

    function currentForecaster(code) {
        let currentForecaster = $.get(`https://judgetests.firebaseio.com/forecast/today/${code}.json`);

        let threeDayForecast = $.get(`https://judgetests.firebaseio.com/forecast/upcoming/${code}.json`);

        Promise.all([currentForecaster, threeDayForecast])
            .then(Forecast)
            .catch(displayError)
    }

    function Forecast([today, upcoming]) {
        displayTodayForecast(today);
        displayUpcomingForecast(upcoming);
        weatherContainer.show();
    }

    function displayTodayForecast(today) {
        current.find('.label').nextAll().remove();
        current
            .append($('<span>')
                .addClass('condition symbol')
                .html(forecastSymbols[today.forecast.condition]))
            .append($('<span>')
                .addClass('condition')
                .append($('<span>')
                    .addClass('forecast-data')
                    .text(today.name))
                .append($('<span>')
                    .addClass('forecast-data')
                    .html(`${today.forecast.low}&#176/${today.forecast.high}&#176`))
                .append($('<span>')
                    .addClass('forecast-data')
                    .text(today.forecast.condition)))
    }

    function displayUpcomingForecast(upcoming) {
        upcomingWeather.find('.label').nextAll().remove();
        for (let day of upcoming.forecast) {
            renderUpcomingForecast(day)
        }
    }

    function renderUpcomingForecast(day) {
        upcomingWeather
            .append($('<span>')
                .addClass('upcoming')
                .append($('<span>')
                    .addClass('symbol')
                    .html(forecastSymbols[day.condition]))
                .append($('<span>')
                    .addClass('forecast-data')
                    .html(`${day.low}&#176/${day.high}&#176`))
                .append($('<span>')
                     .addClass('forecast-data')
                     .text(day.condition)));
    }

    function displayError() {
        weatherContainer.show();
        weatherContainer.text('Error');
    }
}