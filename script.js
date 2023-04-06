const container = document.getElementById('container');

function createGrid (size) {    
    for (let i = 0; i < size; i++) {
        let grid = documnet.createElement('div');
        container.appendChild(grid);
    }
}

createGrid(16);