let container = document.getElementById("gameContainer");
let gridSizeBtn = document.getElementById("changeDim");
let color = "rgb(0, 0, 0)";
let squares = document.getElementsByClassName("grids");
let size;
let aDiv;

//sets the initial size of the game container.
//Functionality to change the sizes will be added.
container.setAttribute(
    "style",
    `display: grid; grid-template-columns:repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`
);

//assigns individual Id's for each div
function assignId() {
    for (let n = 1; n <= squares.length; n++) {
        aDiv.setAttribute("id", "div" + n);
    }
}

//creates the grids to be added to the container
function createGrids(size) {
    for (let j = 1; j <= size; j++) {
        for (let i = 1; i <= size; i++) {
            aDiv = document.createElement("div");
            aDiv.classList.add("grids");
            aDiv.setAttribute(
                "style",
                `grid-column-start: ${j}; grid-row-start: ${i}; grid-column-end: ${j}+1 ; grid-row-end: ${i}+1 ;`
            );
            container.append(aDiv);
        }
    }

    //assigns individual Id's for each div
    function assignId() {
        let individuals = Array.from(squares);
        for (let n = 1; n <= individuals.length; n++) {
            individuals[n - 1].setAttribute("id", "div" + n);
        }
    }
    assignId();
}

function assignDim() {
    size = window.prompt("Assign Grid Dimensions", "A # 2-100");
    createGrids(size);
}

//on hover find the id of the div and changes the bacground color to black
function colorGrid(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("mouseover", function(event) {
            let chosenSquare = event.target.getAttribute("id");
            let chosenSquare1 = document.getElementById(`#${chosenSquare}`);
            chosenSquare1.setAttribute(`background-color: ${color} `);
        });
    }
}