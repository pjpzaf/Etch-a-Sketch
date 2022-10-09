let grid = document.getElementById("grid-container");
let gridBoxLength = 350;
let sliderSelect= document.querySelector("#myRange");
let gridDimension;
let prevGridDimension;
let boxSize;
let divDraw;
let divErase;
let divClear;
let defaultGridDimension;
let sliderIndicator;
let buttonDraw;
let buttonRainbow;
let buttonClear;
let buttonErase;
let redPart;
let greenPart;
let bluePart;

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
        divClear = document.getElementById(`boxDiv${i}`);
        grid.removeChild(divClear);
    }
}


//to set default value of the grid to match the slider value during start-up
defaultGridDimension = makeSquareDiv(gridDimension=16);


//event listener on slider to change dimension of the grid
sliderSelect.addEventListener("input", function (e) { 
    eraseSketch();
    makeSquareDiv(gridDimension);});

//event listener on slider to change recolor option buttons to default
sliderSelect.addEventListener("input", function (e) {
    buttonDraw.style.backgroundColor = "rgb(245, 245, 220)";  
    buttonErase.style.backgroundColor = "rgb(245, 245, 220)";
    buttonRainbow.style.backgroundColor = "rgb(245, 245, 220)";  
});

//for clear button
buttonClear = document.getElementById("button-clear");
    buttonClear.addEventListener("click",function (e) {
        buttonDraw.style.backgroundColor = "rgb(245, 245, 220)";  
        buttonErase.style.backgroundColor = "rgb(245, 245, 220)";
        buttonRainbow.style.backgroundColor = "rgb(245, 245, 220)";  
        eraseSketch();
        makeSquareDiv(gridDimension);
    });

//for draw button
buttonDraw = document.getElementById("button-draw");
    buttonDraw.addEventListener("click",function (e) {
        buttonDraw.style.backgroundColor = "rgb(230, 229, 225)";  
        buttonErase.style.backgroundColor = "rgb(245, 245, 220)";
        buttonRainbow.style.backgroundColor = "rgb(245, 245, 220)";   
        gridDimension = sliderSelect.value;
        for (let i=0;i<(gridDimension**2);i++) {
            divDraw = document.getElementById(`boxDiv${i}`);
            divDraw.addEventListener("mouseover", function drawOnDiv () {
                divDraw = document.getElementById(`boxDiv${i}`);
                divDraw.style.backgroundColor = "black";
            });
        }
    });

//for erase button
buttonErase = document.getElementById("button-erase");
buttonErase.addEventListener("click",function (e) {  
    buttonDraw.style.backgroundColor = "rgb(245, 245, 220)";  
    buttonErase.style.backgroundColor = "rgb(230, 229, 225)";
    buttonRainbow.style.backgroundColor = "rgb(245, 245, 220)";      
    gridDimension = sliderSelect.value;
    for (let i=0;i<(gridDimension**2);i++) {
        divErase = document.getElementById(`boxDiv${i}`);
        divErase.addEventListener("mouseover", function drawOnDiv () {
            divErase = document.getElementById(`boxDiv${i}`);
            divErase.style.backgroundColor = "transparent";
        });
    }
});

//for rainbow color
buttonRainbow = document.getElementById("rainbow-draw");
buttonRainbow.addEventListener("click", function (e) {
    buttonDraw.style.backgroundColor = "rgb(245, 245, 220)";  
    buttonErase.style.backgroundColor = "rgb(245, 245, 220)";
    buttonRainbow.style.backgroundColor = "rgb(230, 229, 225)";  
    gridDimension = sliderSelect.value;
    for (let i=0;i<(gridDimension**2);i++) {
        divDraw = document.getElementById(`boxDiv${i}`);
        divDraw.addEventListener("mouseover", function drawOnDiv () {
            redPart = Math.floor(Math.random()*256);
            greenPart = Math.floor(Math.random()*256);
            bluePart = Math.floor(Math.random()*256);
            divDraw = document.getElementById(`boxDiv${i}`);
            divDraw.style.backgroundColor = `rgb(${redPart}, ${greenPart}, ${bluePart})`;
        });
    }
})