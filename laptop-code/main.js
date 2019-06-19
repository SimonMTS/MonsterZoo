
    console.log('webs3');

    for ( let i = 0; i < 100; i++ ) {
        let div = document.createElement('div');
        div.setAttribute('ondrop', 'drop(event, this)');
        div.setAttribute('ondragover', 'allowDrop(event)');
        div.setAttribute('class', 'holder');
        document.querySelector('#tiles').appendChild(div);
    }

    let draggables = document.querySelectorAll('div.draggable');
    for ( let i = 0; i < draggables.length; i++ ) {
        draggables[i].addEventListener('click', function (event) {
            console.log('clicked: '+this.id);
        });
    }

    function dragStart(event, element) {
        console.log('ondragstart');
        event.dataTransfer.setData("draggable", event.target.id);
        element.style.transform = 'translate(0, 0)';
        event.dataTransfer.setDragImage(element, element.offsetWidth, element.offsetHeight);
    }
      
    function allowDrop(event) {
        event.preventDefault();
    }
      
    function drop(event, element) {
        event.preventDefault();
        let data = event.dataTransfer.getData("draggable");
        if ( element.childElementCount == 0 ) {
            element.appendChild(document.getElementById(data));
        }
    }