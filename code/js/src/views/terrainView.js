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
    
    drawField() {

        for ( let i = 0; i < 10; i++ ) {
            for ( let j = 0; j < 10; j++ ) {

                let holder = document.createElement('div');
                holder.setAttribute('class', 'holder bg-mat-100');
                holder.setAttribute('id', 'h'+i+'-'+j);
                document.querySelector('#tiles').appendChild(holder);

                this.holderAddEventListener( holder );

            }
        }

        let designHolder = document.querySelector('div.holder.design');
        this.holderAddEventListener( designHolder );
        
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

        for( let i = 0; i < 10; i++ ) {
            for( let j = 0; j < 10; j++ ) {

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

    getHolderPosition( x, y ) {

        if ( x == 'designer' && y == 'designer' ) {
            return document.querySelector('#hdesign');
        } else {
            return document.querySelector('#h'+x+'-'+y);
        }

    }

    setMonsterPositionEventListeners( controller, climate ) {

        for( let i = 0; i < 10; i++ ) {
            for( let j = 0; j < 10; j++ ) {
                if ( climate.grid[i].Columns[j] == 0 ) {
                    let holder = document.querySelector('#h'+i+'-'+j);
                    
                    holder.addEventListener("drop", function(){
                        let data = event.dataTransfer.getData("draggable");
        
                        if ( event.target.id.charAt(0) == 'h' && event.target.childElementCount == 0 ) {
                            event.target.appendChild(document.getElementById(data));

                            controller.monsterChangedPosition(
                                data, 
                                event.target.id.charAt(1), event.target.id.charAt(3)
                            );
                        }

                        event.target.classList.remove("holder-hover");
                    });
                }
            }
        }

        let designHolder = document.querySelector('div.holder.design')
        designHolder.addEventListener("drop", function(){
            let data = event.dataTransfer.getData("draggable");

            if ( event.target.id.charAt(0) == 'h' && event.target.childElementCount == 0 ) {
                event.target.appendChild(document.getElementById(data));

                controller.monsterChangedPosition(
                    data, 
                    'designer', 'designer'
                );
            }

            event.target.classList.remove("holder-hover");
        });

    }

}

module.exports = new terrainView();