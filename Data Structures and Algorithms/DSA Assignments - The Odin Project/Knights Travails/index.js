/*
    This solution uses the BFS algorithm to find the shortest path, taking into account the moves that a knight piece can make in a chess game.
*/
function knightMoves(start, end) {
  const queue = [[start]];
  const visited = new Set();

  while (queue.length > 0) {
    const path = queue.shift();
    const lastSquare = path[path.length - 1];

    if (lastSquare[0] === end[0] && lastSquare[1] === end[1]) {
      console.log(`You made it in ${path.length} moves! Here's your path:`);
      return path;
    }

    for (const move of getPossibleMoves(lastSquare)) {
      if (!visited.has(JSON.stringify(move))) {
        queue.push([...path, move]);
        visited.add(JSON.stringify(move));
      }
    }
  }

  return null; // No path found
}

function getPossibleMoves([x, y]) {
  const moves = [
    [x - 2, y + 1],
    [x - 1, y + 2],
    [x + 1, y + 2],
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x + 1, y - 2],
    [x - 1, y - 2],
    [x - 2, y - 1],
  ];

  return moves.filter(([nx, ny]) => nx >= 0 && nx < 8 && ny >= 0 && ny < 8);
}

console.log(knightMoves([1, 2], [3, 4]));
/*
You made it in 5 moves! Here's your path:
[ [ 1, 2 ], [ 0, 4 ], [ 2, 5 ], [ 4, 6 ], [ 3, 4 ] ]
*/
