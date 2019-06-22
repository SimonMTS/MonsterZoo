let terrainView = require('./terrainView.js'),
    configuratorView = require('./configuratorView.js'),
    barGraph = require('../libraries/barGraph.js');

class monsterView {

    constructor() {

        this.drawable = false;
        this.drawing = false;
        this.clickX = new Array();
        this.clickY = new Array();
        this.clickDrag = new Array();

    }

    getBaseMonster() {

        let monster = document.createElement('div');
        monster.setAttribute('class', 'monster');
        monster.setAttribute('draggable', 'true');

        let canvas = document.createElement('canvas');
            if(typeof G_vmlCanvasManager != 'undefined') {
                canvas = G_vmlCanvasManager.initElement(canvas);
            }
            canvas.setAttribute('draggable', 'false');
            monster.appendChild( canvas );

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
        if ( savedProperties.monsterColor ) {
            monster.style.backgroundColor = savedProperties.monsterColor;
        }

        container.appendChild( monster );

        if ( savedProperties.monsterDrawing ) {
            let context = monster.firstChild.getContext('2d'),
                img = new Image();
            img.onload = function() {
                context.drawImage(this, 0, 0, monster.firstChild.width, monster.firstChild.height);
            }
            img.src = savedProperties.monsterDrawing;
        }

        monster.firstChild.height = 170;
        monster.firstChild.width = 170;


        this.addMonsterEventListener( monster, controller );

    }

    removeMonsterInDesigner() {

        let designer = document.querySelector('#hdesign');
        while (designer.firstChild) {
            designer.removeChild(designer.firstChild);
        }

    }

    setupDrawingBoard( controller ) {
        let thisView = this;
        configuratorView.addDrawableEventListener(function( event, value ) {

            document.querySelector('#hdesign div.monster').setAttribute('draggable', ''+(!value));
            if ( value ) {

                document.querySelector('#hdesign div.monster').style.cursor = 'crosshair';

                thisView.clickX = new Array();
                thisView.clickY = new Array();
                thisView.clickDrag = new Array();

                let monster = document.querySelector('#hdesign div.monster');
                let savedProperties = controller.retrieveMonsterProperties( monster.id );
                if ( savedProperties.monsterDrawing ) {
                    let context = monster.firstChild.getContext('2d'),
                        img = new Image();
                    img.onload = function() {
                        context.drawImage(this, 0, 0, monster.firstChild.width, monster.firstChild.height);
                    }
                    img.src = savedProperties.monsterDrawing;
                }

            } else {

                document.querySelector('#hdesign div.monster').style.cursor = 'grab';

                let monsterID = document.querySelector('#hdesign div.monster').id;
                let properties = controller.retrieveMonsterProperties( monsterID );
                properties.monsterDrawing = document.querySelector('#hdesign div.monster canvas').toDataURL();
                
                controller.updateMonsterProperties( monsterID, properties );

            }

            thisView.drawable = value;

        });
    }

    addMonsterEventListener( monster, controller ) {

        let thisView = this;
        monster.addEventListener('click', function(e) {
            if ( !thisView.drawable ) {
                thisView.monsterClick(e, controller);
            }
        });


        monster.addEventListener('dragstart', function(e) {
            thisView.monsterDragstart(e);
        });

        monster.addEventListener('dragend', function(e) {
            thisView.monsterDragend(e, controller);
        });


        monster.addEventListener('mouseover', function(e) {
            thisView.monsterMouseOver(e, controller);
        });

        monster.addEventListener('mouseout', function(e) {
            thisView.monsterMouseOut();
        });


        monster.addEventListener('mousedown', function(e) {
            thisView.monsterMouseDown(e);
        });

        monster.addEventListener('mousemove', function(e) {
            thisView.monsterMouseMove(e);
        });

        monster.addEventListener('mouseup', function(e) {
            thisView.drawing = false;
        });

        monster.addEventListener('mouseleave', function(e) {
            thisView.drawing = false;
        });

    }


    monsterMouseDown( e ) {

        if ( !this.drawable ) { return; }
        
        let rect = e.target.getBoundingClientRect();

        this.drawing = true;
        this.drawMonsterAddClick(e.clientX - rect.left, e.clientY - rect.top);
        this.drawMonsterRedraw();

    }

    monsterMouseMove( e ) {

        let rect = e.target.getBoundingClientRect();;
        
        if ( this.drawing ) {
            this.drawMonsterAddClick(e.clientX - rect.left, e.clientY - rect.top, true);
            this.drawMonsterRedraw();
        }

    }

    drawMonsterAddClick( x, y, dragging ) {
        this.clickX.push(x);
        this.clickY.push(y);
        this.clickDrag.push(dragging);
    }

    drawMonsterRedraw() {

        let context = document.querySelector('#hdesign div.monster canvas').getContext("2d");

        // context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        
        context.strokeStyle = "#E0E0E0";
        context.lineJoin = "round";
        context.lineWidth = 5;

        for ( let i=0; i < this.clickX.length; i++ ) {
            context.beginPath();

            if ( this.clickDrag[i] && i ) {
                context.moveTo(this.clickX[i-1], this.clickY[i-1]);
            } else {
                context.moveTo(this.clickX[i]-1, this.clickY[i]);
            }
            
            context.lineTo(this.clickX[i], this.clickY[i]);
            context.closePath();
            context.stroke();
        }

    }


    monsterDragstart( event ) {

        this.hideMonsterStats();

        
        event.dataTransfer.setData("draggable", event.target.id);

        event.target.style.transform = 'translate(0, 0)';
        event.dataTransfer.setDragImage(event.target, event.target.offsetWidth/2, event.target.offsetHeight/2);
        
    }

    monsterDragend( event, controller ) {

        this.showMonsterStats( event, controller );

    }


    monsterClick( event, controller ) {

        let monster = controller.retrieveMonsterProperties( event.target.id );

        if ( controller.getAugementedPowerLvl(monster) >= 70 ) {

            event.target.style.boxShadow = '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)';
            event.target.style.transform = 'scale(1.5, 1.5)';
            event.target.parentElement.style.zIndex = 99;

            this.executeSpecialMove( monster.typeOfMonster.toLowerCase() );

            setTimeout(function() { 
                event.target.style.boxShadow = '0 0px 0px rgba(0,0,0,0), 0 0px 0px rgba(0,0,0,0)';
                event.target.style.transform = 'scale(1, 1)';
                event.target.parentElement.style.zIndex = 1;
            }, 500);

        } else {
            
            event.target.classList.add('monster-shake');

            setTimeout(function() { 
                event.target.classList.remove('monster-shake');
            }, 400);

        }
        
    }


    monsterMouseOver( event, controller ) {

        this.showMonsterStats( event, controller );

    }

    monsterMouseOut() {

        this.hideMonsterStats();

    }

    showMonsterStats( event, controller ) {

        this.hideMonsterStats();
        configuratorView.unfocusFields();

        if ( !event.path[1] || event.path[1].id == 'hdesign' ) { return; }

        let monsterInfo = controller.retrieveMonsterProperties( event.target.id );

        let monsterStats = document.createElement('div');
            monsterStats.setAttribute('class', 'monster-stats bg-mat-100');
            monsterStats.setAttribute('id', event.target.id);
            document.querySelector('div.monster-configurator-row div.col-12').appendChild( monsterStats );
            
        let monsterName = document.createElement('h1');
            monsterName.innerHTML = monsterInfo.monsterName;
            monsterName.style.color = monsterInfo.monsterColor;
            monsterStats.appendChild( monsterName );

        let monsterType = document.createElement('small');
            monsterType.setAttribute('class', 'text-muted');
            monsterType.style.fontSize = '60%';
            monsterType.innerHTML = ' '+monsterInfo.typeOfMonster;
            monsterName.appendChild( monsterType );


        let monsterGraph = document.createElement('canvas');
            monsterStats.appendChild( monsterGraph );

            var graph = new barGraph( monsterGraph.getContext("2d") );
            graph.margin = 10;
            graph.width = (monsterStats.offsetWidth - 30) / 2;
            graph.height = 150;
            graph.backgroundColor = window.getComputedStyle(monsterStats, null).getPropertyValue('background-color'); ;
            graph.xAxisLabelArr = ["Arms", "Legs", "Eyes"];
            graph.update([8, 8, 8]);
            graph.update([
                (Number.isInteger(monsterInfo.numberOfArms) ? monsterInfo.numberOfArms+0.001 : 0),
                (Number.isInteger(monsterInfo.numberOfLegs) ? monsterInfo.numberOfLegs+0.001 : 0),
                (Number.isInteger(monsterInfo.numberOfEyes) ? monsterInfo.numberOfEyes+0.001 : 0)
            ]);

        let monstertypeOf = document.createElement('h5');
            monstertypeOf.setAttribute('class', 'mt-4');
            monstertypeOf.innerHTML = 'Has '+monsterInfo.typeOfArm.toLowerCase()+' and '+monsterInfo.typeOfFur.toLowerCase()+'.';
            monsterStats.appendChild( monstertypeOf );


        let monsterCanFly = document.createElement('h5');
            monsterCanFly.setAttribute('class', 'mt-4');
            monsterCanFly.innerHTML = (monsterInfo.monsterCanFly ? '✔' : '❌')+' Can'+(monsterInfo.monsterCanFly ? '' : '\'t')+' fly.';
            monsterStats.appendChild( monsterCanFly );

        let monsterCanSwim = document.createElement('h5');
            monsterCanSwim.setAttribute('class', 'mt-1');
            monsterCanSwim.innerHTML = (monsterInfo.monsterCanSwim ? '✔' : '❌')+' Can'+(monsterInfo.monsterCanSwim ? '' : '\'t')+' swim.';
            monsterStats.appendChild( monsterCanSwim );

        let monsterPower = document.createElement('h5');
            monsterPower.setAttribute('class', 'mt-4 mb-0');
            monsterPower.innerHTML = 'Power level';
            monsterStats.appendChild( monsterPower );

        let monsterPowerBar = document.createElement('div');
            monsterPowerBar.setAttribute('class', 'monster-power-bar mt-1 p'+controller.getAugementedPowerLvl(monsterInfo)/10);
            monsterPowerBar.innerHTML = controller.getAugementedPowerLvl(monsterInfo)+' / 100';
            monsterStats.appendChild( monsterPowerBar );

    }

    hideMonsterStats() {

        let existingMonsterStats = document.querySelector('div.monster-stats');
        if ( existingMonsterStats ) { existingMonsterStats.remove(); }

    }

    executeSpecialMove( type ) {

        let audio = new Audio('../../../assets/ahh.mp3');
        audio.play();
        setTimeout(function() {
            audio.remove()
        }, 2000);

        if ( type == 'water' ) {

            let nbDrop = 400; 

            for ( let i = 1; i < nbDrop ;i++ ) {
                let dropLeft = Math.floor(Math.random() * 2000);
                let dropTop = Math.floor(Math.random() * 1400) - 1000;

                let drop = document.createElement('div');
                drop.setAttribute('class', 'drop');
                drop.setAttribute('id', 'drop'+i);
                document.querySelector('body').appendChild(drop);
                document.querySelector('body').style.overflow = 'hidden';

                document.querySelector('#drop'+i).style.left = dropLeft+'px';
                document.querySelector('#drop'+i).style.top = dropTop+'px';
            }

            setTimeout(function() { 
                for ( let i = 1; i < nbDrop ;i++ ) {
                    document.querySelector('#drop'+i).remove();
                }
            }, 500);


        } else if ( type == 'fire' ) {

            
            let fire = document.createElement('div');
            fire.setAttribute('class', 'fireMove');
            document.querySelector('body').appendChild(fire);
            
            fire.classList.add('active');
            document.querySelector('div.container-fluid.outer div.row').classList.add('monster-shake');

            setTimeout(function() { 
                document.querySelector('div.fireMove').remove();

                document.querySelector('div.container-fluid.outer div.row').classList.remove('monster-shake');
            }, 500);

        } else if ( type == 'earth' ) {
            
            let oddHolders = document.querySelectorAll('div#tiles div.holder:nth-child(odd)');
            let evenHolders = document.querySelectorAll('div#tiles div.holder:nth-child(even)');

            for ( let i = 0; i < oddHolders.length; i++ ) {
                oddHolders[i].classList.add('monster-shake');
            }

            setTimeout(function() {
                for ( let i = 0; i < oddHolders.length; i++ ) {
                    evenHolders[i].classList.add('monster-shake');
                }
            }, 100);

            setTimeout(function() {
                
                for ( let i = 0; i < oddHolders.length; i++ ) {
                    oddHolders[i].classList.remove('monster-shake');
                }

                for ( let i = 0; i < oddHolders.length; i++ ) {
                    evenHolders[i].classList.remove('monster-shake');
                }

            }, 600);
            
        } else if ( type == 'wind' ) {
            
            document.querySelector('div.col-8 div.full-height-box').classList.add('windMove');

            setTimeout(function() { 
                document.querySelector('div.col-8 div.full-height-box').classList.remove('windMove');
            }, 500);

        }

    }

    reactToMove( x, y ) {

        if ( x == 'designer' && y == 'designer' ) { return; }

        let monsters = document.querySelectorAll('div#tiles div.holder:not(#h'+x+'-'+y+') div.monster'),
            me = document.querySelector('div#tiles div.holder#h'+x+'-'+y+' div.monster');

        for ( let i = 0; i < monsters.length; i++ ) {

            let thisX = me.offsetLeft + 50,
                thisY = me.offsetTop + 30;

            let thatX = monsters[i].offsetLeft + 50,
                thatY = monsters[i].offsetTop + 30;

            let dy = thatY - thisY,
                dx = thatX - thisX,
                theta = Math.atan2(dy, dx);
            theta *= 180/Math.PI;
            theta += 90;
            
            
            if ( theta >= 180 ) {
                theta = -Math.abs( 360 - theta );
            }

            

            setTimeout(function() {
                monsters[i].style.transform = 'rotate('+theta+'deg)';

                let audio = new Audio('../../../assets/huh.mp3');
                audio.play();
                setTimeout(function() {
                    audio.remove()
                }, 2000);

                if ( i >= monsters.length-1 ) {
                    setTimeout(function() { 
                        for ( let i = 0; i < monsters.length; i++ ) {
                            monsters[i].style.transform = 'rotate('+0+'deg)';
                        }
                    }, 500);
                }

            }, 300 + i * 200);
        }

    }

}

module.exports = new monsterView();