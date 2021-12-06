class Board {
  /**
   * @param {string} input
   */
  constructor(input) {
    this.boardArr = [];

    const rows = input.split("\n");
    rows.forEach((row) => {
      const rowArr = [];

      row
        .trim()
        .split(" ")
        .forEach((cell) => {
          if (cell.length) {
            rowArr.push(Number(cell));
          }
        });

      this.boardArr.push(rowArr);
    });
  }

  /**
   * number -> drawIndex map
   * @param {Record<number, number>} drawIndexMap
   */
  computeWinningTurn(drawIndexMap) {
    this.winningTurn = Infinity;

    const len = this.boardArr.length;

    // rows
    for (let i = 0; i < len; i++) {
      let maxWinTurnForRow = -Infinity;
      let maxWinTurnForCol = -Infinity;

      for (let j = 0; j < len; j++) {
        this.boardArr[i][j];

        maxWinTurnForCol = Math.max(
          maxWinTurnForCol,
          drawIndexMap[this.boardArr[i][j]]
        );

        maxWinTurnForRow = Math.max(
          maxWinTurnForRow,
          drawIndexMap[this.boardArr[j][i]]
        );
      }

      this.winningTurn = Math.min(
        this.winningTurn,
        maxWinTurnForRow,
        maxWinTurnForCol
      );
    }
  }

  getScore(drawIndexMap) {
    let unMarkedSum = 0;

    const len = this.boardArr.length;

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        const cell = this.boardArr[i][j];
        if (drawIndexMap[cell] > this.winningTurn) {
          unMarkedSum += Number(cell);
        }
      }
    }

    const winningValue = Object.keys(drawIndexMap).find(
      (key) => drawIndexMap[key] === this.winningTurn
    );

    return unMarkedSum * winningValue;
  }
}

/**
 * @param {string} input
 */
const main = (input) => {
  const [drawsStr, ...boardsStr] = input.split("\n\n");

  const drawIndexMap = {};
  drawsStr
    .trim()
    .split(",")
    .forEach((item, index) => {
      drawIndexMap[item] = index;
    });

  let losingBoard = undefined;
  let losingTurn = -Infinity;

  boardsStr.forEach((board) => {
    const brd = new Board(board);
    brd.computeWinningTurn(drawIndexMap);

    if (losingTurn <= brd.winningTurn) {
      losingTurn = brd.winningTurn;
      losingBoard = brd;
    }
  });

  return losingBoard.getScore(drawIndexMap);
};

module.exports = main;
