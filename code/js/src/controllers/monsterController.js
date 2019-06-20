let monsterModel = require('../models/monsterModel.js'),
    monsterView = require('../views/monsterView.js'),
    terrainModel = require('../models/terrainModel.js');

class monsterController {

    constructor() {

        // nononono temp todo
        let controller = this;
        document.querySelector('button#createMonster').addEventListener('click', function(){
            return controller.createNewMonster();
        });

    }

    addMonstersToTerrain( climate ) {

        let monsterLocations = monsterModel.getMonsterLocations( climate );

        monsterView.drawMonsters( monsterLocations );

        this.addMonsterEventListeners();

    }

    addMonsterEventListeners() {

        // nononono temp todo
        let monsters = document.querySelectorAll('div.monster');
        for ( let i = 0; i < monsters.length; i++ ) {

            this.addMonsterEventListener( monsters[i] );

        }

    }

    addMonsterEventListener( monster ) {

        monster.addEventListener('click', this.monsterClick);

        monster.addEventListener('dragstart', this.monsterDragstart);

    }

    monsterDragstart( event ) {
        event.dataTransfer.setData("draggable", event.target.id);

        event.target.style.transform = 'translate(0, 0)';
        event.dataTransfer.setDragImage(event.target, event.target.offsetWidth/2, event.target.offsetHeight/2);
    }

    monsterClick( event ) {
        console.log('clicked: '+this.id);
    }

    createNewMonster() {

        if ( monsterModel.getMonsterInDesigner() == undefined ) {

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