let climateData = require('../climate.json');

class terrainModel {

    getClimate( name ) {
        return climateData.climates.find(o => o.name.toLowerCase() === name);
    }

}

module.exports = new terrainModel();