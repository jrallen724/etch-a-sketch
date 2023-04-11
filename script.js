const container = document.querySelector('#container');
const resetBtn = document.querySelector('#reset');
let divDimension = 0;


function createGrid (size) {
    divDimension = 600 / size - 2;    
    for (let i = 0; i < (size * size); i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.setAttribute('style', 'height: ' + divDimension + 'px; width: ' + divDimension + 'px');
        div.addEventListener('mouseover', function () {
            div.style.backgroundColor = 'black';
        })
        container.appendChild(div);
    }
}

function removeGrid (parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

resetBtn.addEventListener('click', function () {
    divDimension = parseInt(prompt('Select a size: '));
    if (divDimension > 100) {
        divDimension = 100;
    }
    removeGrid(container);
    createGrid(divDimension);
})

createGrid(16);
