let rows = document.getElementsByClassName("gridRow")
let cells = document.getElementsByClassName("cell")


function makeRows(rowNum){
    const container = document.getElementById("container")
    console.log(container)
    for (r= 0; r < rowNum; r++){
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

function makeColumns(cellNum){
    for (i = 0; i < rows.length; i++){
        for (j= 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        }
    }
}

function defaultGrid (){
    makeRows(16);
    makeColumns(16);
}

