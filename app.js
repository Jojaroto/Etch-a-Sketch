const container = document.querySelector('#container');
let cell;
let target;

//criar celulas
function makeCell (numCell) {
    for (let c = 0; c < numCell; c++ ) {
        cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}

//celulas em cada coluna

function makeGrid (numRow, numCol) {
    container.style.setProperty('--numRows', numRow);
    container.style.setProperty('--numCols', numCol);
    for (let r = 0; r < numRow; r++) {
        makeCell(numCol)
    }
}

function promptGrid() {
    let number = prompt("pick a size between 5-64.", 16);
    if (number >= 5 && number <= 64) {
        makeGrid (number,number);
    }else{
        do{
            number = prompt("Invalid size.");
        }
        while(number < 5 || number> 64);
        makeGrid(number,number)
    }
}

//mouseover activation

function changeColor(target) {
    target.style.backgroundColor = 'black';
}

container.addEventListener("mouseover", function(e) {
    target = e.target;

    if (target.matches("div.cell")) {
        changeColor(target);
    }
})

//reset button
const reset = document.querySelector('.resetBtn');
reset.addEventListener('click', function(){
    window.location.reload();
})

promptGrid()