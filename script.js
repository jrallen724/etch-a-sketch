const container = document.querySelector('#container');


function createGrid (size) {    
    for (let i = 0; i < size; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
    }
}

createGrid(16);