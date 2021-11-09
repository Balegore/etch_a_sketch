//creates grid of <div> with class cell

function createGrid(){
    let ammountRows = 10;
    let ammountSquare = 10;

    for(let i = ammountRows; i>0; i--){             
        const row = document.createElement('div');
        
        for(let n = ammountSquare; n > 0; n--){
            let square = document.createElement('div');
            square.classList.add('cell');
            row.appendChild(square);
        }
        container.appendChild(row);
        row.classList.add('row');
    }
}

//change color function of cells
function changeColor(e){
    
    e.classList.add('colored');    

}

const container = document.querySelector('#screen');

createGrid();

//create node list of <div> with class square
const cells = document.querySelectorAll('.cell');
console.log(cells);

//create eventlistener for mouse over on each cell to change color
cells.forEach(cells => cells.addEventListener('mouseenter', () => {
    changeColor(cells)}));

