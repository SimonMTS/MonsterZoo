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

        let monsters = document.querySelectorAll('div.monster');
        for ( let i = 0; i < monsters.length; i++ ) {

            this.addMonsterEventListener( monsters[i] );

        }

    }

    drawMonster( container, properties ) {
        
        let monster = this.getBaseMonster();
        monster.setAttribute('id', properties.id);

        container.appendChild( monster );

        this.addMonsterEventListener( monster );

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

    setupMonsterConfigurator( controller ) {

        document.querySelector('button#createMonster').addEventListener('click', function(){
            return controller.createNewMonster();
        });

    }

}

module.exports = new monsterView();