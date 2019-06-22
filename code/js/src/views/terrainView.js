class terrainView {

    emptyField() {
        
        let tiles = document.querySelector('#tiles');
        while (tiles.firstChild) {
            tiles.removeChild(tiles.firstChild);
        }

        let designer = document.querySelector('#hdesign');
        while (designer.firstChild) {
            designer.removeChild(designer.firstChild);
        }

    }
    
    drawField( monsterInDesigner ) {

        document.querySelector('body').addEventListener("dragstart", function(e){ 

            if ( !e.target.id || e.target.id.charAt(0) != 'm' ) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                return false;
            }

        });

        for ( let i = 0; i < 10; i++ ) {
            for ( let j = 0; j < 10; j++ ) {

                let holder = document.createElement('div');
                holder.setAttribute('class', 'holder bg-mat-100');
                holder.setAttribute('id', 'h'+i+'-'+j);

                document.querySelector('#tiles').appendChild(holder);

                this.holderAddEventListener( holder );

            }
        }

        let designHolder = document.querySelector('div#hdesign');
        this.holderAddEventListener( designHolder );

        if ( monsterInDesigner ) {
            document.querySelector('div.creation').style.display = "none";
        } else {
            document.querySelector('button#createMonster').style.display = "none";
        }
        
    }


    holderAddEventListener( holder ) {
        holder.addEventListener("dragover", this.holderDragOver);

        holder.addEventListener("dragenter", this.holderDragEnter);
        holder.addEventListener("dragleave", this.holderDragLeave);
    }

    holderDragOver( event ) {
        event.preventDefault();
    }

    holderDragEnter( event ) {
        event.target.classList.add("holder-hover");
    }
    holderDragLeave( event ) {
        event.target.classList.remove("holder-hover");
    }


    drawTerrain( climate ) {

        for ( let i = 0; i < 10; i++ ) {
            for ( let j = 0; j < 10; j++ ) {

                if ( climate.grid[i].Columns[j] == 1 ) {
                    let holder = document.querySelector('#h'+i+'-'+j);
                    
                    holder.classList.add("terrain");
                    
                    holder.removeEventListener("drop", this.holderDrop);
                    holder.removeEventListener("dragover", this.holderDragOver);
                }

            }   
        }

        this.setClimateClass( climate.name );

    }


    setClimateClass( name ) {
        let outer = document.querySelector('div.container-fluid.outer');
        outer.classList.remove('jungle');
        outer.classList.remove('sjahari');
        outer.classList.remove('icepole');

        outer.classList.add( name.toLowerCase() );
    }

    setClimateChangeEventListeners( controller ) {
        
        document.querySelector('button.jungle-btn').addEventListener("click", function(){
            controller.setClimate( 'jungle' );
        });
        document.querySelector('button.sjahari-btn').addEventListener("click", function(){
            controller.setClimate( 'sjahari' );
        });
        document.querySelector('button.icepole-btn').addEventListener("click", function(){
            controller.setClimate( 'icepole' );
        });

    }


    setWeatherBadge( weather ) {

        document.querySelector('span.badge.weather').innerHTML = weather;

    }

    setWeatherEventListeners( controller ) {

        document.querySelector('span.badge.weather').addEventListener("click", function() {
            
            if ( document.querySelector('div.weather-dropdown').style.display == "block" ) {
                document.querySelector('div.weather-dropdown').style.display = "none";
            } else {
                document.querySelector('div.weather-dropdown').style.display = "block";
            }

        });

        this.setWeatherChangeEventListeners( controller );

    }

    setWeatherChangeEventListeners( controller ) {

        let weatherSpans = document.querySelectorAll('div.weather-dropdown span');
        for ( let i = 0; i < weatherSpans.length; i++ ) {
            
            weatherSpans[i].addEventListener("click", function() {
                controller.setWeather( weatherSpans[i].innerHTML );

                document.querySelector('div.weather-dropdown').style.display = "none";
            });

        }

    }


    getHolderPosition( x, y ) {

        if ( x == 'designer' && y == 'designer' ) {
            return document.querySelector('#hdesign');
        } else {
            return document.querySelector('#h'+x+'-'+y);
        }

    }

    setMonsterPositionEventListeners( controller, climate ) {

        let thisView = this;

        for( let i = 0; i < 10; i++ ) {
            for( let j = 0; j < 10; j++ ) {
                if ( climate.grid[i].Columns[j] == 0 ) {
                    let holder = document.querySelector('#h'+i+'-'+j);
                    
                    holder.addEventListener("drop",  function(event) {
                        thisView.monsterDropEventListener( event, 'xy', controller );
                    });
                }
            }
        }

        let designHolder = document.querySelector('div.holder.design')
        designHolder.addEventListener("drop",  function(event) {
            thisView.monsterDropEventListener( event, 'designer', controller );
        });

    }

    monsterDropEventListener( event, position, controller ) {
        let data = event.dataTransfer.getData("draggable");

        if ( event.target.id.charAt(0) == 'h' && event.target.childElementCount == 0 ) {
            event.target.appendChild(document.getElementById(data));

            let x, y;
            if ( position == 'designer' ) {
                x = 'designer',
                y = 'designer';
            } else {
                x = event.target.id.charAt(1),
                y = event.target.id.charAt(3);
            }

            controller.monsterChangedPosition(
                data, 
                x, y
            );
        }

        event.target.classList.remove("holder-hover");
    }
    

    setupMonsterConfigurator( controller ) {

        document.querySelector('button.delete-monster-btn').addEventListener('click', function() {
            
            controller.removeMonsterInDesigner();

        });

        document.querySelector('button#createMonster').addEventListener('click', function() {
            document.querySelector('button#createMonster').style.display = "none";
            document.querySelector('div.creation').style.display = "block";
            
            controller.createNewMonster();
        });

    }

}

module.exports = new terrainView();