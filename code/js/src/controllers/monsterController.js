let monsterModel = require('../models/monsterModel.js'),
    monsterView = require('../views/monsterView.js'),
    terrainModel = require('../models/terrainModel.js'),
    terrainView = require('../views/terrainView.js'),
    configuratorView = require('../views/configuratorView.js');

class monsterController {

    constructor() {
        
        terrainView.setupMonsterConfigurator( this );
        monsterView.setupDrawingBoard( this );

    }

    addMonstersToTerrain( climate ) {

        let monsterLocations = monsterModel.getMonsterLocations( climate );
        monsterView.drawMonsters( monsterLocations, this );

    }

    createNewMonster() {

        if ( monsterModel.getMonsterInDesigner() === false ) {

            let id = monsterModel.generateMonsterID();
            monsterModel.addMonsterToLocation( id );

            configuratorView.generateNewMonster( id, this );
            this.updateMonsterProperties( id, configuratorView.getValuesAsObject() );
    
            let climate = terrainModel.getClimateByName( terrainModel.getCurrentClimate() );
            this.addMonstersToTerrain( climate );

        }

    }

    removeMonsterInDesigner() {

        let monster = monsterModel.getMonsterInDesigner();
        if ( monsterModel.getMonsterInDesigner() === false ) { return; }

        monsterModel.removeMonsterInDesigner( monster.id );
        monsterView.removeMonsterInDesigner();

        configuratorView.updateConfigurator( false, this );

    }

    updateMonsterProperties( id, properties ) {

        monsterModel.saveMonsterProperties( id, properties );

        let climate = terrainModel.getClimateByName( terrainModel.getCurrentClimate() );
        let monsterLocations = monsterModel.getMonsterLocations( climate );
        monsterView.drawMonsters( monsterLocations, this );

    }

    retrieveMonsterProperties( id ) {

        return monsterModel.getMonsterProperties( id );

    }

    getAugementedPowerLvl( monsterInfo ) {
        let powerLevel = monsterInfo.monsterPowerLvl,
            type = monsterInfo.typeOfMonster,
            weather = terrainModel.getWeather();

            
        if ( type.toLowerCase() == 'water' && ( weather == 'rain' || weather == 'thunderstorm' || weather == 'drizzle' || weather == 'clouds' ) ) {
            powerLevel = +powerLevel + +20;
        }

        if ( type.toLowerCase() == 'fire' && ( weather == 'smoke' || weather == 'ash' ) ) {
            powerLevel = +powerLevel + +20;
        }

        if ( type.toLowerCase() == 'earth' && ( weather == 'dust' || weather == 'sand' ) ) {
            powerLevel = +powerLevel + +20;
        }

        if ( type.toLowerCase() == 'wind' && ( weather == 'tornado' || weather == 'squall' ) ) {
            powerLevel = +powerLevel + +20;
        }
        
        return (powerLevel > 100 ? 100 : powerLevel);
    }

    monsterNotDrawable() {

        monsterView.disableDrawable( this );

    }

}

module.exports = new monsterController();