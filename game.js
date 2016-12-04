function getValueIfAllEqual(smallBoard, a, b, c) {
  const pivot = smallBoard[a[0]][a[1]];

  if (pivot !== '-' && pivot === smallBoard[b[0]][b[1]] && pivot === smallBoard[c[0]][c[1]])
    return pivot;
  else
    return null;
}

export function getSmallBoardWinner(smallBoard) {

  const winConditions = [
    // rows
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],

    // columns
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],

    // diagonals
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
  ];

  return winConditions
    .map(w => getValueIfAllEqual(smallBoard, w[0], w[1], w[2]))
    .filter(winner => winner)[0];
}

function getWinnersMatrix(bigBoard) {
  return bigBoard.map(smallBoardRow => smallBoardRow.map(smallBoard => getSmallBoardWinner(smallBoard)));
}

export function getActiveMatrix(bigBoard, lastMove) {
  const winners = getWinnersMatrix(bigBoard);

  const x = lastMove.where[2];
  const y = lastMove.where[3];
  if (winners[x][y]) {
    return winners.map(win => win.map(w => !w));
  }

  const active = [
    [false, false, false],
    [false, false, false],
    [false, false, false]
  ];
  active[x][y] = true;
  return active;
}

export function getNextPlayer(lastMove) {
  if (lastMove.who === 'x') {
    return 'o';
  } else {
    return 'x';
  }
}

export function advanceState(state, a, b, c, d) {
  const currentPlayer = getNextPlayer(state.lastMove);
  state.bigBoard[a][b][c][d] = currentPlayer;
  state.lastMove = {
    who: currentPlayer,
    where: [a, b, c, d]
  };
}

const emptyRow = [null, null, null];
const emptySmallBoard = Array(3).fill(emptyRow);
const emptyBigRow = Array(3).fill(emptySmallBoard);
const emptyBigBoard = Array(3).fill(emptyBigRow);

export function generateStartingState() {
  const startingState = {
    bigBoard: emptyBigBoard,
    lastMove: {
      who: 'o',
      where: [0, 0, 1, 1]
    }
  };

  return JSON.parse(JSON.stringify(startingState));
}
