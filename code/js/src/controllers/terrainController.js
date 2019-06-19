let terrainModel = require('../models/terrainModel.js'),
    terrainView = require('../views/terrainView.js');

class terrainController {

    constructor() {

        this.setClimate( 'jungle' );

        //todo: clean this up
        var cntrllr = this;
        document.querySelector('button.jungle-btn').addEventListener("click", function(){
            cntrllr.setClimate( 'jungle' );
        });
        document.querySelector('button.sjahari-btn').addEventListener("click", function(){
            cntrllr.setClimate( 'sjahari' );
        });
        document.querySelector('button.icepole-btn').addEventListener("click", function(){
            cntrllr.setClimate( 'icepole' );
        });
    
    }

    setClimate( name ) {
        terrainView.emptyField();
        terrainView.drawField();

        let climate = terrainModel.getClimate( name );
        terrainView.drawTerrain( climate );

        // todo: nonono
        let outer = document.querySelector('div.container-fluid.outer');
        outer.classList.remove('jungle');
        outer.classList.remove('sjahari');
        outer.classList.remove('icepole');

        outer.classList.add( name );
    }

}

module.exports = new terrainController();