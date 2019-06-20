let climateData = require('../climate.json');

class terrainModel {

    constructor() {

        if ( localStorage.getItem('currentClimate') == null ) {
            localStorage.setItem('currentClimate', 'jungle');
        }

    }

    getCurrentClimate() {
        return localStorage.getItem('currentClimate');
    }

    setCurrentClimate( name ) {
        localStorage.setItem('currentClimate', name);
    }

    getClimateByName( name ) {
        return climateData.climates.find(o => o.name.toLowerCase() === name);
    }

    getWeatherFromClimate( controller, climate, __callback ) {
        /*

            Thunderstorm
            Drizzle
            Rain
            Snow
            Mist
            Smoke
            Haze
            Dust
            Fog
            Sand
            Dust
            Ash
            Squall
            Tornado
            Clear
            Clouds

        */

        let city = climate['reference city'];

        let apiKey = '2adeeb754ec26a7e97c574b2c5d0d959';
        let apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?appid='+apiKey+'&q='+city;

        fetch(apiUrl)
            .then(
                function(response) {
                    if (response.status !== 200) {
                        __callback( controller, null );
                    }

                    // Examine the text in the response
                    response.json().then(function(data) {

                        try {
                            __callback( controller, data.list[0].weather[0].main );
                        } catch ( e ) {
                            __callback( controller, null );
                        }

                    });
                }
            )
            .catch(function(err) {
                __callback( controller, null );
            });

    }

}

module.exports = new terrainModel();