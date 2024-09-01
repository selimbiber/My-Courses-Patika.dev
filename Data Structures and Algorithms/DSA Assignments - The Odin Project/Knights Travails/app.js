/*
  This solution uses the BFS algorithm to find the shortest path, taking into account the moves that a knight piece can make in a chess game.
*/

import { gameboard } from "./gameboard.js";

(() => gameboard())();

import { utils } from "./utils.js";

document
  .querySelector(".clear-board-btn")
  .addEventListener("click", utils.clearGameboard);
