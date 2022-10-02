let grid = document.getElementById("grid-container");



    //To create an NxN grid
    grid.style.display = "grid";
    grid.style.gridTemplateRows = "repeat(16, 20px)";
    grid.style.gridTemplateColumns = "repeat(16, 20px)";
    grid.style.border = "3px solid black"
    grid.style.maxHeight = "500px";
    grid.style.maxWidth = "500px";

    //To create the square divs to be inserted on the grid
    for (let i=0;i<256;i++) {
        div = document.createElement('div');
        div.className = "grid-div"
        div.style.borderStyle = "solid"
        div.style.borderWidth = "1px"
        div.style.borderColor = "black";
        grid.appendChild(div);
    }

