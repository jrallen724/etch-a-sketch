const container = document.querySelector('#container');


function createGrid (size) {    
    for (let i = 0; i < size; i++) {
        let div = document.createElement('div');
        container.getElementsByClassName.gridTemplateColumns = 
        container.appendChild(div);
    }
}

createGrid(16);