import React, { Component } from 'react';
import BigBoard from './big-board';
import { generateStartingState, advanceState, getNextPlayer, getSmallBoardWinner} from './game';

function visualizeSmallBoard(smallBoard, currentPlayer, clickable) {
  const winner = getSmallBoardWinner(smallBoard);
  if (winner) {
    return winner;
  }

  return smallBoard.map(row => row.map(field => {
    if (field == 'x' || field == 'o') {
      return field;
    } else if (clickable) {
      return {clickable: currentPlayer};
    } else {
      return 'unused';
    }
  }));


}

function convertStateToVisualBoard(state) {
  const player = getNextPlayer(state.lastMove);
  const lastX = state.lastMove.where[2];
  const lastY = state.lastMove.where[3];
  const unlockAll = getSmallBoardWinner(state.bigBoard[lastX][lastY]);

  const visualBoard = state.bigBoard.map((bigRow, a) => bigRow.map((smallBoard, b) => {
    const clickable = a === lastX && b === lastY || unlockAll;
    return visualizeSmallBoard(smallBoard, player, clickable);
  }));

  const winner = getSmallBoardWinner(visualBoard);
  if (winner === 'x' || winner === 'o') {
    return winner;
  }

  return visualBoard;
}

export default class UltimateTicTacToe extends Component {

  constructor(props) {
    super(props);
    const logicState = generateStartingState();
    this.state = {
      logic: logicState,
      visual: convertStateToVisualBoard(logicState)
    };
  }

  reset() {
    const logicState = generateStartingState();
    this.state = {
      logic: logicState,
      visual: convertStateToVisualBoard(logicState)
    };
    this.setState(this.state);
  }

  onPress(a, b, c, d) {
    advanceState(this.state.logic, a, b, c, d);
    this.state.visual = convertStateToVisualBoard(this.state.logic);
    this.setState(this.state);
  }

  render() {
    return (
      <BigBoard rows={this.state.visual} onPress={(a, b, c, d) => this.onPress(a, b, c, d)}/>
    );
  }
}
