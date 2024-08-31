import { knightsTravails, moveKnight } from "./logic.js"; // Import the functions

export const gameboard = () => {
  const chessTable = document.createElement("table");
  chessTable.className = "table"; // Add class for styling
  let start = null;

  for (let i = 1; i <= 8; i++) {
    const tableRow = document.createElement("tr");
    tableRow.className = "cell-row";
    let cellRowCoord = Math.abs(i - 9);
    tableRow.innerHTML = `<span data-cell-row-coord="${cellRowCoord}"></span>`;
    for (let z = 1; z <= 8; z++) {
      const tableCell = document.createElement("td");
      let cellColumnCoord = z;
      tableCell.dataset.cellRowCoord = cellRowCoord;
      tableCell.dataset.cellColCoord = cellColumnCoord;

      if ((i + z) % 2 == 0) {
        tableCell.classList.add("cell-col", "white");
      } else {
        tableCell.classList.add("cell-col", "black");
      }

      tableCell.dataset.coordArray = JSON.stringify([cellRowCoord, cellColumnCoord]);

      tableCell.addEventListener("dragover", (event) => {
        event.preventDefault(); // Allow drop
      });

      tableCell.addEventListener("drop", (event) => {
        event.preventDefault();
        try {
          const sourceCoords = JSON.parse(event.dataTransfer.getData("text/plain"));
          const targetCoords = JSON.parse(tableCell.dataset.coordArray);
          if (JSON.stringify(sourceCoords) !== JSON.stringify(targetCoords)) {
            moveKnight(sourceCoords, targetCoords); // Move knight to the target cell
            knightsTravails(sourceCoords, targetCoords); // Calculate the shortest path
          } else {
            console.log("Knight is already in the target cell.");
          }
        } catch (e) {
          console.error("Error parsing JSON data:", e);
        }
      });

      tableCell.addEventListener("click", () => {
        if (!start) {
          start = JSON.parse(tableCell.dataset.coordArray);
          tableCell.classList.add("selected-start");
        } else {
          const prevStartCell = document.querySelector(".selected-start");
          if (prevStartCell) {
            prevStartCell.classList.remove("selected-start");
          }
          start = JSON.parse(tableCell.dataset.coordArray);
          tableCell.classList.add("selected-start");
        }
      });

      tableRow.appendChild(tableCell);
    }
    chessTable.appendChild(tableRow);
  }

  // Place the knight at the default start location
  const defaultStartLocation = [1, 1];
  const cellNodes = chessTable.querySelectorAll("td");
  cellNodes.forEach((cellNode) => {
    if (JSON.stringify(defaultStartLocation) === cellNode.dataset.coordArray) {
      let knightImg = document.createElement("img");
      knightImg.src = "./assets/knight.svg";
      knightImg.draggable = true;
      knightImg.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", JSON.stringify(defaultStartLocation));
        // Make the cell draggable
        cellNode.classList.add("dragging");
      });
      knightImg.addEventListener("dragend", (event) => {
        // Remove dragging class
        cellNode.classList.remove("dragging");
      });
      cellNode.appendChild(knightImg);
    }
  });

  document.querySelector("main").appendChild(chessTable);
};

(() => {
  const resetButton = document.querySelector(".clear-board-btn");
  resetButton.addEventListener("click", () => location.reload());
})();
