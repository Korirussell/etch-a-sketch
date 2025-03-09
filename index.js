const resetButton = document.querySelector("#reset-btn");
const container = document.querySelector("#container");
const colorButton = document.querySelector("#color-btn");
const GRID_SIZE = 960;

let tileColor = "black";
//Function to create grid
function createGrid(size) {
    container.innerHTML = ""; 
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.width = `${GRID_SIZE}px`;
    container.style.height = `${GRID_SIZE}px`;

    const squareSize = GRID_SIZE / size;

    for (let i = 0; i < size * size; i++){
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = tileColor;
        });
    }
}

function chooseColor() {
    let newColor = prompt("choose a color");
    tileColor = newColor;

}

function resetGrid() {
    let newSize = prompt("Enter grid size (max 100):");
    
    // Validate input
    newSize = parseInt(newSize); //converts string to int parseInt
    if (isNaN(newSize) || newSize < 1 || newSize > 100) { //checks if NAN or < 1 or > 100
        alert("Please enter a number between 1 and 100.");
        return;
    }
    
    createGrid(newSize);
}

// Attach event listener to button
resetButton.addEventListener("click", resetGrid);
colorButton.addEventListener("click", chooseColor);
// Initialize default grid
createGrid(16);
