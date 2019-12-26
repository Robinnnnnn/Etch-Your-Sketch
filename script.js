let container = document.getElementById("gameContainer");
let gridSizeBtn = document.getElementById("changeDim");
let size;

//sets the initial size of the game container.
//Functionality to change the sizes will be added.
container.setAttribute(
    "style",
    `display: grid; grid-template-columns:repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`
);

//creates the grids to be added to the container
function createGrids(size) {
    for (let i = 1; i <= size; i++) {
        let aDiv = document.createElement("div");
        aDiv.classList.add("grids");
        aDiv.setAttribute("id", "div" + i);
        aDiv.setAttribute(
            "style",
            `grid-column-start: ${i}; grid-row-start: ${i}; grid-column-end: ${i}+1 ; grid-row-end: ${i}+1 ;`
        );
        container.append(aDiv);
    }
}

function assignDim() {
    size = window.prompt("Assign Grid Dimensions", "A # 2-100");
    createGrids(size);
}

// gridSizeBtn.onclick(window.prompt("Dimensions of Grid"));