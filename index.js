let grid = document.getElementById("grid-container");
let gridBoxLength = 500;
let sliderSelect= document.querySelector("#myRange");
let gridDimension = sliderSelect.value;


        sliderSelect.addEventListener("input", function moveSlider (){
            gridDimension = sliderSelect.value;
            //To create an NxN grid
            grid.style.display = "grid";
            grid.style.maxHeight = `${gridBoxLength}px`;
            grid.style.maxWidth = `${gridBoxLength}px`;
            grid.style.gridTemplateRows = `repeat(${gridDimension}, ${gridBoxLength/gridDimension}px)`;
            grid.style.gridTemplateColumns = `repeat(${gridDimension}, ${gridBoxLength/gridDimension}px)`;
            grid.style.border = "3px solid black" 
            
                //To create the square divs to be inserted on the grid
            for (let i=0;i<(gridDimension**2);i++) {
                div = document.createElement('div');
                div.id = `boxDiv${i}`;
                div.style.borderStyle = "solid"
                div.style.borderWidth = "1px"
                div.style.borderColor = "black";
                div.addEventListener("mouseover", function drawOnDiv () {
                    let divSelect = document.getElementById(`boxDiv${i}`);
                    divSelect.style.backgroundColor = "black";
                });
                grid.appendChild(div);
            }
        });




