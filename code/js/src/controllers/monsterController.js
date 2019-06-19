let monsterModel = require('../models/monsterModel.js'),
    monsterView = require('../views/monsterView.js');

class monsterController {

    constructor() {
        
        this.addMonsterEventListeners();
        
    }

    addMonsterEventListeners() {

        let monsters = document.querySelectorAll('div.monster');
        for ( let i = 0; i < monsters.length; i++ ) {

            monsters[i].addEventListener('click', this.monsterClick);

            monsters[i].addEventListener('dragstart', this.monsterDragstart);

        }

    }

    monsterDragstart( event ) {
        event.dataTransfer.setData("draggable", event.target.id);

        event.target.style.transform = 'translate(0, 0)';
        event.dataTransfer.setDragImage(event.target, event.target.offsetWidth/2, event.target.offsetHeight/2);
    }

    monsterClick( event ) {
        console.log('clicked: '+this.id);
    }

}

module.exports = new monsterController();