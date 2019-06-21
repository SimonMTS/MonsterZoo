let terrainView = require('./terrainView.js'),
    configuratorView = require('./configuratorView.js');

class monsterView {

    getBaseMonster() {

        let monster = document.createElement('div');
        monster.setAttribute('class', 'monster');
        monster.setAttribute('draggable', 'true');

        let image = document.createElement('img');
        image.src = 'https://placekitten.com/300/300';
        image.setAttribute('draggable', 'false');

        monster.appendChild( image );

        return monster;

    }

    drawMonsters( locations, controller ) {

        for ( let i = 0; i < locations.length; i++ ) {
            let holder = terrainView.getHolderPosition( locations[i].x, locations[i].y );

            if ( holder.childElementCount > 0 ) {
                holder.removeChild(holder.firstChild);
            }
            
            this.drawMonster( holder, controller, {
                'id': locations[i].id
            });
        }

    }

    drawMonster( container, controller, properties ) {
        
        let monster = this.getBaseMonster();
        let savedProperties = controller.retrieveMonsterProperties( properties.id );

        monster.setAttribute('id', properties.id);
        monster.style.backgroundColor = savedProperties.monsterColor;

        container.appendChild( monster );

        this.addMonsterEventListener( monster, controller );

    }

    addMonsterEventListener( monster, controller ) {

        monster.addEventListener('click', function(e) {
            thisView.monsterClick(e, controller);
        });

        let thisView = this;
        monster.addEventListener('dragstart', function(e) {
            thisView.monsterDragstart(e);
        });

    }

    monsterDragstart( event ) {
        
        event.dataTransfer.setData("draggable", event.target.id);

        event.target.style.transform = 'translate(0, 0)';
        event.dataTransfer.setDragImage(event.target, event.target.offsetWidth/2, event.target.offsetHeight/2);
        
    }

    monsterClick( event, controller ) {

        console.log( controller.retrieveMonsterProperties( event.target.id ) );

    }

}

module.exports = new monsterView();