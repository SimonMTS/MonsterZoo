let terrainView = require('../views/terrainView.js');

class monsterView {

    getBaseMonster() {
        let monster = document.createElement('div');
        monster.setAttribute('class', 'monster');
        monster.setAttribute('draggable', 'true');

        return monster;
    }

    drawMonsters( locations ) {

        for ( let i = 0; i < locations.length; i++ ) {
            let holder = terrainView.getHolderPosition( locations[i].x, locations[i].y );

            if ( holder.childElementCount > 0 ) {
                continue;
            }

            this.drawMonster( holder, {
                'id': locations[i].id
            });
        }

    }

    drawMonster( container, properties ) {
        
        let monster = this.getBaseMonster();
        monster.setAttribute('id', properties.id);

        container.appendChild( monster );

    }

}

module.exports = new monsterView();