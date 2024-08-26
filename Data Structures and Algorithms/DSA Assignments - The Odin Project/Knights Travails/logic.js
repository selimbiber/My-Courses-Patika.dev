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

  const stringifyCurrentCoords = () => `${x}, ${y}`;

  // Evaluate current possible knight moves against offsets
  const validPossibleKnightMoves = () =>
    KNIGHT_MOVES.map((offset) =>
      newSquareFrom(offset[0], offset[1]).filter((square) => square !== undefined)
    );

  const isWithinBoard = (x, y, min = 0, max = 8) =>
    x >= min && x < max && y >= min && y < max;

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
  squareRegistry.clear();

  const origin = chessSquare(...start);
  const target = chessSquare(...finish);

  const queue = [origin];
  while (!queue.includes(target)) {
    const currentSquare = queue.shift();
    const enqueueList = currentSquare.validPossibleKnightMoves();
    enqueueList.forEach((square) => square.setPredecessor(currentSquare));
    queue.push(...enqueueList);
  }
  const path = [target];
  while (!path.includes(origin)) {
    const prevSquare = path[0].getPredecessor();
    path.unshift(prevSquare);
  }
  console.log(`The shortest path was ${path.length - 1} moves!`);
  console.log(
    "The moves were: ",
    path.forEach((square) => square.name)
  );
};
