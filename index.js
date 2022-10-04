let grid = document.getElementById("grid-container");
let gridBoxLength = 500;
let sliderSelect= document.querySelector("#myRange");
let gridDimension;
let prevGridDimension;
let boxSize;
let divSelect;
let defaultGridDimension;
let sliderIndicator;
// main function to create square divs and color them
let makeSquareDiv = function moveSlider(gridDimension){
    gridDimension = sliderSelect.value;
    //To create an NxN grid
    grid.style.display = "grid";
    grid.style.maxHeight = `${gridBoxLength}px`;
    grid.style.maxWidth = `${gridBoxLength}px`;
    boxSize = `${gridBoxLength/gridDimension}`;
    grid.style.gridTemplateRows = `repeat(${gridDimension}, ${boxSize}px)`;
    grid.style.gridTemplateColumns = `repeat(${gridDimension}, ${boxSize}px)`;
    grid.style.border = "3px solid black" 
    
    //To create the square divs to be inserted on the grid
    for (let i=0;i<(gridDimension**2);i++) {
        div = document.createElement('div');
        div.id = `boxDiv${i}`;
        div.style.borderStyle = "solid"
        div.style.borderWidth = "1px"
        div.style.borderColor = "black";
        div.addEventListener("mouseover", function drawOnDiv () {
            divSelect = document.getElementById(`boxDiv${i}`);
            divSelect.style.backgroundColor = "black";
        });
        grid.appendChild(div);
    }
    sliderIndicator = document.getElementById("slider-indicator");
    sliderIndicator.textContent = `${gridDimension} x ${gridDimension}`;
    prevGridDimension=gridDimension;
}

// to clear previous grid
function eraseSketch () {
    for (let i=0;i<(prevGridDimension**2);i++) {
        div = document.createElement('div');
        div.id = `boxDiv${i}`;
        divSelect = document.getElementById(`boxDiv${i}`);
        grid.removeChild(divSelect);
    }
}


//to set default value of the grid to match the slider value during start-up
defaultGridDimension = makeSquareDiv(gridDimension=16);


//event listener on slider to change dimension of the grid
sliderSelect.addEventListener("input", function (e) {
    eraseSketch();
    makeSquareDiv(gridDimension);});


