const INITIAL_GRID_SIZE = 16;
const container = document.querySelector("#flex-container")

// Create 16 by 16 grid
for (let i = 0; i < INITIAL_GRID_SIZE * INITIAL_GRID_SIZE; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
    cell.addEventListener('mouseenter', () => cell.classList.add("hover"));
}