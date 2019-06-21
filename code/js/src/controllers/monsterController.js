let monsterModel = require('../models/monsterModel.js'),
    monsterView = require('../views/monsterView.js'),
    terrainModel = require('../models/terrainModel.js'),
    terrainView = require('../views/terrainView.js'),
    configuratorView = require('../views/configuratorView.js');

class monsterController {

    constructor() {
        
        terrainView.setupMonsterConfigurator( this );

    }

    addMonstersToTerrain( climate ) {

        let monsterLocations = monsterModel.getMonsterLocations( climate );

        monsterView.drawMonsters( monsterLocations, this );

    }

    createNewMonster() {

        if ( monsterModel.getMonsterInDesigner() === false ) {

            monsterModel.addMonsterToLocation( monsterModel.generateMonsterID() );

            configuratorView.generateNewMonster();
    
            let climate = terrainModel.getClimateByName( terrainModel.getCurrentClimate() );
            this.addMonstersToTerrain( climate );

        }

    }

    updateMonsterProperties( id, properties ) {

        monsterModel.saveMonsterProperties( id, properties );

    }

    retrieveMonsterProperties( id ) {

        return monsterModel.getMonsterProperties( id );

    }

}

module.exports = new monsterController();