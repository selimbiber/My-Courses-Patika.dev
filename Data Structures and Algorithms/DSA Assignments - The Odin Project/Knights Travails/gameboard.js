import { knightsTravails } from "./logic.js";
import { utils } from "./utils.js";

export const gameboard = () => {
  const chessTable = document.createElement("table");
  chessTable.className = "table"; // Add class for styling

  // Varsayılan başlangıç konumu
  const defaultStartLocation = [1, 1];
  const activeStartLocation = JSON.parse(
    document.querySelector(".active")?.dataset.coordArray ||
      JSON.stringify(defaultStartLocation)
  );

  // Oluşturulan tabloyu doldur
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

      tableCell.addEventListener("dragover", (event) => event.preventDefault());

      tableCell.addEventListener("drop", (event) => {
        event.preventDefault();
        try {
          const sourceCoords = JSON.parse(
            document.querySelector(".active").dataset.coordArray
          );
          const targetCoords = JSON.parse(tableCell.dataset.coordArray);
          if (JSON.stringify(sourceCoords) !== JSON.stringify(targetCoords)) {
            utils.moveKnight(sourceCoords, targetCoords); // Move knight to the target cell
            knightsTravails(sourceCoords, targetCoords); // Calculate the shortest path
          } else {
            utils.showWarningInfo("The knight is already at the target location.");
          }
        } catch (e) {
          console.error("Error parsing JSON data:", e);
        }
      });

      tableRow.appendChild(tableCell);
    }
    chessTable.appendChild(tableRow);
  }

  // Ensure only one knight exists in the table at a time
  const cellNodes = chessTable.querySelectorAll("td");
  cellNodes.forEach((cellNode) => {
    if (cellNode.querySelector("img")) {
      cellNode.removeChild(cellNode.querySelector("img"));
    }
  });

  // Place the knight at the active start location
  cellNodes.forEach((cellNode) => {
    if (JSON.stringify(activeStartLocation) === cellNode.dataset.coordArray) {
      let knightImg = document.createElement("img");
      knightImg.src = "./knight.svg";
      knightImg.draggable = true;
      knightImg.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", JSON.stringify(activeStartLocation));
        cellNode.classList.add("dragging");
      });
      knightImg.addEventListener("dragend", () => cellNode.classList.remove("dragging"));
      cellNode.appendChild(knightImg);
      cellNode.classList.add("active");
    }
  });

  document.querySelector("main").appendChild(chessTable);
};
