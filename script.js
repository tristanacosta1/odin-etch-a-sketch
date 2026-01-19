const INITIAL_GRID_SIZE = 16;
const container = document.querySelector("#flex-container")

// Create 16 by 16 grid
function makeGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.flexBasis = `calc(100% / ${size})`;
        container.appendChild(cell);
        cell.addEventListener('mouseenter', () => cell.classList.add("hover"));
    }   
}

makeGrid(INITIAL_GRID_SIZE);

const button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "Create new grid";
button.classList.add("button");

const newSize = button.addEventListener('click', () =>  {
    let userSize = prompt("Enter grid size.\n(Maximum: 100)");
    if (userSize === null) {
        return;
    }

    userSize = Number(userSize);

    while (!Number.isInteger(userSize) || userSize > 100 || userSize < 1) {
        userSize = prompt("Please enter a valid value!");
        userSize = Number(userSize);

        if (userSize === null) {
            return;
        }
    }
    container.replaceChildren();

    makeGrid(userSize);
});