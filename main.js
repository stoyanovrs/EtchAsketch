/*  
1. Create a webpage with a 16x16 grid of square divs. 
2.  Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
3. Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid.
*/
let container = document.querySelector('.container');
let resetButton = document.querySelector('.reset');
let gridButton = document.querySelector('.grid');
let randomButton = document.querySelector('.random');



function boardCreate(input) {
  console.log('New Game');

  let divs = document.querySelectorAll('.block');
  divs.forEach(div => div.remove());

  let grid = Number(input);
  let htmlGrid = document.documentElement.style.setProperty(`--grid`,grid);
  for(let i = 0 ; i < grid * grid ; i++) {
    // Create Block Element
    let block = document.createElement('div');
    // Add Class To Block Element
    block.classList.add('block');
    // Put The  Element To the Page
    container.appendChild(block);
  }
  let blocks = document.querySelectorAll('.block');
  blocks.forEach(block => block.addEventListener('mouseover', changeColor))
  resetButton.addEventListener('click', reSet);
  
}
boardCreate(58);



function reSet() {
  let blocks = document.querySelectorAll('.block');
  blocks.forEach(block => block.style.cssText = 'background: none; ');
}

function changeColor(i){
  //console.log(i);
  //this.classList.add('black');
 
    this.style.cssText = 'background: black; ';
 
}


function changeSize() {
  let size = prompt('Enter number between 2 and 100:');
  if (size > 2 && size < 100) {
    boardCreate(size);
  } else {
    console.log('Error :');
  }
  
}

//let blocks = document.querySelectorAll('.block');
gridButton.addEventListener('click', changeSize);

//blocks.forEach(block => block.addEventListener('mouseover', changeColor))