const infoContainer = document.querySelector(".result-info-container");

const showWarningInfo = (warningInfo) => {
  infoContainer.innerHTML = `<p class="warning-info">${warningInfo}</p>`;
  return setTimeout(() => (infoContainer.innerHTML = ""), 3000);
};

const clearGameboard = () => {
  infoContainer.innerHTML = "";
  moveKnight([1, 1]);
};

const moveKnight = (toCoords) => {
  const fromCell = document.querySelector(".active");
  if (!fromCell) return;

  const [toCoordsRow, toCoordsCol] = toCoords;

  const toCell = document.querySelector(
    `[data-cell-row-coord='${toCoordsRow}'][data-cell-col-coord='${toCoordsCol}']`
  );

  if (toCell) {
    const knightImg = fromCell.querySelector("img");
    if (knightImg) {
      if (toCell.contains(knightImg)) return;
      fromCell.removeChild(knightImg);
      toCell.appendChild(knightImg);

      fromCell.classList.remove("active");
      toCell.classList.add("active");
    }
  } else {
    console.error("Target cell not found.");
  }
};

export const utils = {
  showWarningInfo,
  clearGameboard,
  moveKnight,
};
