class terrainView {

    emptyField() {
        
        let tiles = document.querySelector('#tiles');
        while (tiles.firstChild) {
            tiles.removeChild(tiles.firstChild);
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

        // temp for Monster Configurator
            let designHolder = document.querySelector('div.holder.design');
            this.holderAddEventListener( designHolder );
        // temp
        
    }


    holderAddEventListener( holder ) {
        holder.addEventListener("drop", this.holderDrop);
        holder.addEventListener("dragover", this.holderDragOver);

        holder.addEventListener("dragenter", this.holderDragEnter);
        holder.addEventListener("dragleave", this.holderDragLeave);
    }

    holderDrop( event ) {
        event.preventDefault();
        let data = event.dataTransfer.getData("draggable");
        
        if ( event.target.id.charAt(0) == 'h' ) {
            event.target.appendChild(document.getElementById(data));
            event.target.classList.remove("holder-hover");
        }
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

        document.querySelector('span.weather').innerHTML = climate['reference city'];

    }

}

module.exports = new terrainView();