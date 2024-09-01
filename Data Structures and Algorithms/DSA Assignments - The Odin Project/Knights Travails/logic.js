// Employing a Graph BFS Algorithm

import { utils } from "./utils.js";

const squareRegistry = new Map();
const infoContainer = document.querySelector(".result-info-container");

// Get/Set current coords to the board
const chessSquare = (x, y) => {
  const [rowCoord, colCoord] = [x, y];
  let predecessor;

  function generateKnightMoves() {
    const moves = [];
    const offsets = [
      [1, 2],
      [2, 1],
    ];

    for (const [dx, dy] of offsets) {
      moves.push([dx, dy]);
      moves.push([-dx, dy]);
      moves.push([dx, -dy]);
      moves.push([-dx, -dy]);
    }

    return moves;
  }

  const KNIGHT_MOVES = generateKnightMoves();

  const getPredecessor = () => predecessor;
  const setPredecessor = (newPredecessor) => {
    predecessor = newPredecessor || predecessor;
  };

  const stringifyCurrentCoords = () => `${x},${y}`;

  // Evaluate current possible knight moves against offsets
  const validPossibleKnightMoves = () =>
    KNIGHT_MOVES.map((offset) => newSquareFrom(offset[0], offset[1])).filter(
      (square) => square !== undefined
    );

  const isWithinBoard = (x, y, min = 1, max = 8) =>
    x >= min && x <= max && y >= min && y <= max;

  // Calculate new set of square coords against the offsets
  const newSquareFrom = (rowOffset, colOffset) => {
    const [newRow, newCol] = [rowCoord + rowOffset, colCoord + colOffset];

    if (isWithinBoard(newRow, newCol)) return chessSquare(newRow, newCol);
  };

  // Get/Set Map Constructor Object Name
  const areCoordsRegistered = squareRegistry.has(stringifyCurrentCoords());
  if (areCoordsRegistered) return squareRegistry.get(stringifyCurrentCoords());
  const newSquare = {
    stringifyCurrentCoords,
    getPredecessor,
    setPredecessor,
    validPossibleKnightMoves,
  };
  squareRegistry.set(stringifyCurrentCoords(), newSquare);
  return newSquare;
};

export const knightsTravails = (start, finish) => {
  if (JSON.stringify(start) === JSON.stringify(finish)) {
    console.error("The knight is already at the target location.");
    return; // Exit if start and finish are the same
  }

  squareRegistry.clear(); // Temizleme işlemi
  const origin = chessSquare(...start);
  const target = chessSquare(...finish);

  const queue = [origin];
  const visited = new Set();
  visited.add(origin.stringifyCurrentCoords());

  // Perform BFS to find the shortest path
  while (queue.length > 0) {
    const currentSquare = queue.shift();
    if (currentSquare.stringifyCurrentCoords() === target.stringifyCurrentCoords()) break;

    const enqueueList = currentSquare.validPossibleKnightMoves();
    enqueueList.forEach((square) => {
      const coords = square.stringifyCurrentCoords();
      if (!visited.has(coords)) {
        square.setPredecessor(currentSquare);
        queue.push(square);
        visited.add(coords);
      }
    });
  }

  // Reconstruct the path from target to origin
  const path = [];
  let current = target;
  while (current) {
    path.unshift(current.stringifyCurrentCoords()); // Convert to string
    current = current.getPredecessor();
  }

  if (path[0] !== origin.stringifyCurrentCoords()) {
    console.error("No path found.");
    return;
  }

  infoContainer.innerHTML = `<h2>The shortest path was ${path.length - 1} moves!</h2>
   <p>The moves were: ${path.join(" -> ")}</p>`;

  // Move knight along the path
  for (let i = 0; i < path.length - 1; i++) {
    const toCoords = JSON.parse(`[${path[i + 1]}]`);
    utils.moveKnight(toCoords);
  }
};
