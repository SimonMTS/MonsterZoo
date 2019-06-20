let terrainModel = require('../models/terrainModel.js'),
    terrainView = require('../views/terrainView.js');
    monsterModel = require('../models/monsterModel.js');

class terrainController {

    setInitClimate() {

        let currentClimateName = terrainModel.getCurrentClimate();

        this.setClimate( currentClimateName );
        terrainView.setClimateChangeEventListeners( this );
    
    }

    setClimate( name ) {

        terrainView.emptyField();
        terrainView.drawField();

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

    }

    setMonsterController( monsterController ) {
        this.monsterController = monsterController;
    }

    monsterChangedPosition( id, x, y ) {
        monsterModel.moveMonsterToLocation( terrainModel.getCurrentClimate(), id, x, y );
    }

}

module.exports = new terrainController();