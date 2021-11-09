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

//rainbow ranodm selection
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
            break;
        case 'size':
            break;
    }
    console.log(rainbow);
}

const container = document.querySelector('#screen');
const buttons = document.querySelectorAll('button');
let rainbow = false;

createGrid();

//create node list of <div> with class square
const cells = document.querySelectorAll('.cell');

//create eventlistener for mouse over on each cell to change color
cells.forEach(cells => cells.addEventListener('mouseenter', () => {
    changeColor(cells)}));

//creat eventlistener for button presses    
buttons.forEach(buttons => buttons.addEventListener('click', buttonPress));