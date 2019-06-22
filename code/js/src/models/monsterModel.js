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

        if ( !this.locations.designer[0] ) {
            return false;
        }

        return this.locations.designer[0];

    }

    saveLocations() {
        localStorage.setItem('monsterLocations', JSON.stringify(this.locations));
    }

    addMonsterToLocation( id ) {
        
        this.locations.designer.push({
            'id': id,
            'x': 'designer',
            'y': 'designer'
        });

        this.saveLocations();

    }
    
    moveMonsterToLocation( climate, id, x, y ) {
        
        let climateLocations = this.locations[climate];
        let designerLocations = this.locations.designer;
        let visableMonsters = climateLocations.concat( designerLocations );

        let monster = visableMonsters.find(function(element){
            return element.id == id;
        });

        let index = this.locations[climate].indexOf(monster);
        if ( index >= 0 ) {

            this.locations[climate].splice(index, 1);

        } else {

            this.locations.designer = [];

        }

        if ( !(x == 'designer' && y == 'designer') ) {
            
            this.locations[climate].push({
                'id': monster.id,
                'x': x,
                'y': y
            });

        } else {

            this.locations.designer.push({
                'id': monster.id,
                'x': x,
                'y': y
            });

        }


        this.saveLocations();

    }

    getMonsterLocations( climate ) {

        let climateLocations = this.locations[climate.name.toLowerCase()];
        let designerLocations = this.locations.designer;

        return climateLocations.concat( designerLocations );

    }

    saveMonsterProperties( id, properties ) {
        
        localStorage.setItem(id, JSON.stringify( properties ));

    }

    getMonsterProperties( id ) {

        return JSON.parse( localStorage.getItem( id ) );

    }

    removeMonsterInDesigner( id ) {

        localStorage.removeItem(id);
        
        this.locations.designer = [];
        this.saveLocations();

    }

}

module.exports = new monsterModel();