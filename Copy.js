/*  

1.::DONE:: Create a webpage with a 16x16 grid of square divs. 

2. ::DONE:: Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.

3. Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid.

*/
//Main Grid Variable

 



let grid;

let button = document.querySelector('.new-grid');

function newGrid(createBlocks) {
   let aNumber = Number(window.prompt("Type a number", ""));
   grid = aNumber;
  console.log(grid);
   createBlocks()
  
}
 newGrid();

button.addEventListener('click', newGrid);
console.log(grid);
let htmlGrid = document.documentElement.style.setProperty(`--grid`,grid);



// const inputs = document.querySelectorAll('.controls input');

// function handleUpdate() {
//   document.documentElement.style.setProperty(`--${this.name}`, this.value);
// }

// inputs.forEach(input => input.addEventListener('change', handleUpdate));
// inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));



// Get main Container
let container = document.querySelector('.container');
// Create element block with for cycle
let createBlocks = () => {
  
  for(let i = 0 ; i < grid * grid ; i++) {
    // Create Block Element
    let block = document.createElement('div');
    // Add Class To Block Element
    block.classList.add('block');
    // Put The  Element To the Page
    container.appendChild(block);
  }
}
createBlocks()
//Get All Blocks
let blocks = document.querySelectorAll('.block');
// Function to change every block background on hover
function hoverBlock() {
  console.log(this);
  //this.classList.add('black');
  //this.style.cssText = 'background: black; ';
}
// Event Listener for hover
blocks.forEach(block => block.addEventListener('mouseover', hoverBlock));
