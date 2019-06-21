let monsterModel = require('../models/monsterModel.js'),
    monsterView = require('../views/monsterView.js'),
    terrainModel = require('../models/terrainModel.js');

class monsterController {

    constructor() {

        monsterView.setupMonsterConfigurator( this );

    }

    addMonstersToTerrain( climate ) {

        let monsterLocations = monsterModel.getMonsterLocations( climate );

        monsterView.drawMonsters( monsterLocations );

    }

    createNewMonster() {

        if ( monsterModel.getMonsterInDesigner() === false ) {

            monsterModel.addMonsterToLocation( 
                terrainModel.getCurrentClimate(),
                monsterModel.generateMonsterID(),
                'designer', 'designer', 
                {} 
            );
    
            let climate = terrainModel.getClimateByName( terrainModel.getCurrentClimate() );
            this.addMonstersToTerrain( climate );

        }

    }

}

module.exports = new monsterController();