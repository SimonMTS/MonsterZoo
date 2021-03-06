let terrainModel = require('../models/terrainModel.js'),
    terrainView = require('../views/terrainView.js'),
    monsterModel = require('../models/monsterModel.js'),
    monsterView = require('../views/monsterView.js'),
    configuratorView = require('../views/configuratorView.js');

class terrainController {

    setInitClimate() {

        let currentClimateName = terrainModel.getCurrentClimate();

        this.setClimate( currentClimateName );
        terrainView.setClimateChangeEventListeners( this );

        terrainView.setWeatherEventListeners( this );

        configuratorView.setConfiguratorEventListeners( this.monsterController );
        
        let monsterInDesigner = monsterModel.getMonsterInDesigner();
        if ( monsterInDesigner != false ) {
            configuratorView.loadMonsterData( monsterInDesigner, this.monsterController, false );
        }
    
    }

    setClimate( name ) {

        terrainView.emptyField();
        terrainView.drawField( monsterModel.getMonsterInDesigner() === false );

        let climate = terrainModel.getClimateByName( name );

        terrainModel.getWeatherFromClimate( this, climate, function( controller, weather ) {
            if ( weather ) {
                controller.setWeather( weather );
            } else {
                controller.setWeather( '...' );
            }
        });

        terrainView.drawTerrain( climate );
        
        this.monsterController.addMonstersToTerrain( climate );
        terrainView.setMonsterPositionEventListeners( this, climate );

        terrainModel.setCurrentClimate( climate.name.toLowerCase() );

    }

    setWeather( weather ) {
        
        terrainView.setWeatherBadge( weather );
        terrainModel.setWeather( weather.toLowerCase() );

    }

    setMonsterController( monsterController ) {
        this.monsterController = monsterController;
    }

    monsterChangedPosition( id, x, y ) {
        monsterModel.moveMonsterToLocation( terrainModel.getCurrentClimate(), id, x, y );
        configuratorView.updateConfigurator( monsterModel.getMonsterInDesigner(), this.monsterController );

        monsterView.reactToMove( x, y );
    }

}

module.exports = new terrainController();