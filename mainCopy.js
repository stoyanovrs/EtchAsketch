/*  

1. Create a webpage with a 16x16 grid of square divs. 

2.  Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.

3. Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid.

*/
let resetButton = document.querySelector('.reset');
let gridButton = document.querySelector('.grid');
let cells = document.querySelectorAll('.block');


let createBlocks = (cells) => {
  let blocks = Number(cells);
  let container = document.querySelector('.container');
  let htmlGrid = document.documentElement.style.setProperty(`--grid`,blocks);
  for (let i = 0; i < blocks * blocks; i++) {
    let block = document.createElement('div');
    block.classList.add('block');
    container.appendChild(block);
  }
}



function hoverBlack() {
 
    cells.forEach(cell => cell.addEventListener('mouseover', () => {
      cell.classList.add('black');
    }));
}

let removeBlocks = () => {
  
  cells.forEach(cell => cell.remove());
}



function reSet() {
  
  cells.forEach(cell => cell.classList.remove('black'))
}

let userCreate = (cells) => {

 let userGrid = Number(prompt("Youre grid size:"));

 if (userGrid == null || userGrid == undefined || userGrid < 1 || userGrid > 100) {
  console.log(userGrid);
  removeBlocks();
   createBlocks(16);
   
  } else {
    
    removeBlocks();
    createBlocks(userGrid);
    hoverBlack();
    
    reSet();
    
  }
}
userCreate()


resetButton.addEventListener('click', reSet);
gridButton.addEventListener('click', userCreate)