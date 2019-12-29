let container = document.getElementById("gameContainer");
let gridSizeBtn = document.getElementById("changeDim");
let colorOne = "0";
let colorTwo = "0";
let colorThree = "0";
let color = `rgb(${colorOne}, ${colorTwo}, ${colorThree})`;
let squares = document.getElementsByClassName("grids");
let clear = document.getElementById("clearGrid");
let size = 0;
let aDiv;

//sets the initial size of the game container.
container.setAttribute(
    "style",
    `display: grid; grid-template-columns:repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`
);

//gets user response for grid dimensions & removes previous grids.
function assignDim() {
    size = window.prompt("Assign Grid Dimensions", "A number between 2-100");
    gridReset();
    createGrids(size);
}

//creates the grids to be added to the container and assigns individual Id's
function createGrids(size) {
    for (let j = 1; j <= size; j++) {
        for (let i = 1; i <= size; i++) {
            aDiv = document.createElement("div");
            aDiv.classList.add("grids");
            aDiv.setAttribute(
                "style",
                `grid-column-start: ${j}; grid-row-start: ${i}; grid-column-end: ${j}+1 ; grid-row-end: ${i}+1 ; background-color:white;`
            );
            container.append(aDiv);
        }
    }

    assignId();
}

//assigns individual Id's for each div & hover effect
function assignId() {
    let individuals = Array.from(squares);
    for (let n = 1; n <= individuals.length; n++) {
        individuals[n - 1].setAttribute("id", "div" + n);
        individuals[n - 1].addEventListener("mouseover", function(event) {
            event.target.style.backgroundColor = color;
        });
    }
}

function clearGrid() {
    let individuals = Array.from(squares);
    for (let i = 0; i < individuals.length; i++) {
        individuals[i].style.backgroundColor = "white";
    }
}

function gridReset() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
//assigns random color to pen. Works.
function randomColor() {
    colorOne = Math.floor(Math.random() * 255).toString();
    colorTwo = Math.floor(Math.random() * 255).toString();
    colorThree = Math.floor(Math.random() * 255).toString();

    return (color = `rgb(${colorOne}, ${colorTwo}, ${colorThree})`);
}