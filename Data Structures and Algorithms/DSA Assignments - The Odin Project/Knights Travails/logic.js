// Employing a Graph BFS Algorithm

const squareRegistry = new Map();

// Get/Set current coords to the board
const chessSquare = (x, y) => {
  const [xPosition, yPosition] = [x, y];
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
  const newSquareFrom = (xOffset, yOffset) => {
    const [newX, newY] = [xPosition + xOffset, yPosition + yOffset];

    if (isWithinBoard(newX, newY)) return chessSquare(newX, newY);
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
    console.log("The knight is already at the target location.");
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
    console.log("No path found.");
    return;
  }

  console.log(`The shortest path was ${path.length - 1} moves!`);
  console.log("The moves were: ", path.join(" -> "));

  // Move knight along the path
  for (let i = 0; i < path.length - 1; i++) {
    const [fromCoords, toCoords] = [path[i], path[i + 1]];
    moveKnight(fromCoords, toCoords);
  }
};

// Helper function to move the knight
export const moveKnight = (fromCoords, toCoords) => {
  const fromCell = document.querySelector(
    `[data-cell-row-coord='${fromCoords[0]}'][data-cell-col-coord='${fromCoords[1]}']`
  );
  const toCell = document.querySelector(
    `[data-cell-row-coord='${toCoords[0]}'][data-cell-col-coord='${toCoords[1]}']`
  );
  if (fromCell && toCell) {
    const knightImg = fromCell.querySelector("img");
    if (knightImg) {
      // Check if the knight is already in the target cell
      if (toCell.contains(knightImg)) {
        console.log("Knight is already in the target cell.");
        return; // Exit if the knight is already in the target cell
      }
      fromCell.removeChild(knightImg);
      toCell.appendChild(knightImg);
    }
  }
};
