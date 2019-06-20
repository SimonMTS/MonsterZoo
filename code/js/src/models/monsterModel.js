let terrainModel = require('./terrainModel.js');
    
class monsterModel {

    constructor() {

        if ( localStorage.getItem('monsterLocations') == null ) {
            this.locations = {};
            this.locations.jungle = [];
            this.locations.sjahari = [];
            this.locations.icepole = [];
            this.locations.designer = [];
            
            localStorage.setItem('monsterLocations', JSON.stringify(this.locations));
        }

        this.locations = JSON.parse( localStorage.getItem('monsterLocations') );

    }

    generateMonsterID() {
        return 'm' + ( this.locations.jungle.length + this.locations.sjahari.length + this.locations.icepole.length );
    }

    getMonsterInDesigner() {

        let currentClimate = terrainModel.getCurrentClimate();

        let monster = this.locations[ currentClimate ].find(function(element){
            return element.x == 'designer' && element.y == 'designer';
        });

        return monster;

    }

    saveLocations() {
        localStorage.setItem('monsterLocations', JSON.stringify(this.locations));
    }

    addMonsterToLocation( climate, id, x, y, properties ) {
        
        this.locations[climate].push({
            'id': id,
            'x': x,
            'y': y,
            'properties': properties
        });

        this.saveLocations();

    }
    
    moveMonsterToLocation( climate, id, x, y ) {
        
        let monster = this.locations[climate].find(function(element){
            return element.id == id;
        });

        let index = this.locations[climate].indexOf(monster);
        this.locations[climate].splice(index, 1);

        this.locations[climate].push({
            'id': monster.id,
            'x': x,
            'y': y,
            'properties': monster.properties
        });

        this.saveLocations();

    }

    getMonsterLocations( climate ) {

        return this.locations[climate.name.toLowerCase()];

    }

}

module.exports = new monsterModel();