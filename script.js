//add event listeners to cells

function addCellEvents(){
    cells = document.querySelectorAll('.cell');
    cells.forEach(cells => cells.addEventListener('mouseenter', () => {
        changeColor(cells)}));
}

//creates grid of <div> with class cell and delete olf cells
function createGrid(gridSize){
    
    container.innerHTML = ''; 
    for(let i = gridSize; i>0; i--){             
        const row = document.createElement('div');
        
        for(let n = gridSize; n > 0; n--){
            let square = document.createElement('div');
            square.classList.add('cell');
            row.appendChild(square);
        }
        container.appendChild(row);
        row.classList.add('row');
    }
    addCellEvents();
}

//rainbow random selection
function rainbowColor(){
    let random = Math.floor(Math.random() * 6);

    console.log(random);

    let color = (random === 0) ? 'blue':
                (random === 1) ? 'red':
                (random === 2) ? 'green':
                (random === 3) ? 'indigo':
                (random === 4) ? 'yellow':
                (random === 5) ? 'orange':
                'black';
    console.log(color);                
    return color;    
}

//change color function of cells
function changeColor(e){
    if(rainbow){
        e.style.backgroundColor = rainbowColor();
    }   
    else{
        e.style.backgroundColor = 'black';
    }
}

function clearCells(){
    cells.forEach(cells => { 
        cells.style.backgroundColor = "white"});
}

function getSize(){
    let gridSize = prompt("Enter a grid size between 1 and 100");
        while(gridSize < 1 && gridSize > 100){
            gridSize = prompt("Please enter a number between 1 and 100")
        }
    createGrid(gridSize);
}


function buttonPress(){
    console.log(this.id);
    switch(this.id){
        case 'black':
            rainbow = false;
            break;
        case 'rainbow':
            rainbow = true;
            break;
        case 'clear':
            clearCells();
            break;
        case 'size':
            getSize();
            break;
    }
    console.log(rainbow);
}

const container = document.querySelector('#screen');
const buttons = document.querySelectorAll('button');
let cells;
let rainbow = false;

createGrid(16);

//creat eventlistener for button presses    
buttons.forEach(buttons => buttons.addEventListener('click', buttonPress));