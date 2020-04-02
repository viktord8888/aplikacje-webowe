class Game {
  constructor(playerX = "X", playerO = "O") {
    this.board = new Board();
    this.playerX = new Player(Square.X_STATE, playerX);
    this.playerO = new Player(Square.O_STATE, playerO);
    this.currentMove = this.playerX;
  }
  makeMove(row, column) {
    if (this.board.empty(row, column) &&
      this.board.setSquare(row, column, this.currentMove.squareState) !== undefined) {
      let tempState = this.currentMove.squareState;
      this.changeTurn();
      return tempState;
    }
    return undefined;
  }
  changeTurn() {
    if (this.currentMove == this.playerX) {
      this.currentMove = this.playerO;
    }
    else {
      this.currentMove = this.playerX;
    }
  }
  winner() {
    return this.board.boardState();
  }
  reset() {
    this.currentMove = this.playerX;
    this.board.reset();
  }
}





