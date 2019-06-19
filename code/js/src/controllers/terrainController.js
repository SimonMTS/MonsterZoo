let terrainModel = require('../models/terrainModel.js'),
    terrainView = require('../views/terrainView.js');

class terrainController {

    constructor() {

        terrainView.drawField();

        let climate = terrainModel.getClimate( 'Jungle' );
        terrainView.drawTerrain( climate );
    
    }

}

module.exports = new terrainController();