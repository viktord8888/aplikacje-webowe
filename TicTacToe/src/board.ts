class Board {
  board: any[];
  static X_WINS: any;
  static O_WINS: any;
  static PLAYING: any;
  static TIE: any;
  constructor() {
    this.board = [];
    this.reset();
  }
  reset() {
    this.board = [
      [new Square(), new Square(), new Square()],
      [new Square(), new Square(), new Square()],
      [new Square(), new Square(), new Square()]
    ];
  }
  setSquare(row: any, column: any, squareState: any) {
    if (row >= 0 && row <= 2 && column >= 0 && column <= 2) {
      this.board[row][column].state = squareState;
      return squareState;
    }
  }
  squareState(row: any, column: any) {
    if (row >= 0 && row <= 2 && column >= 0 && column <= 2) {
      return this.board[row][column].state;
    }
  }
  empty(row: any, column: any) {
    if (row >= 0 && row <= 2 && column >= 0 && column <= 2) {
      return this.board[row][column].empty();
    }
  }
  boardState() {
    let stateWins = function (board: any[], state: any) {
      for (let i = 0; i < 3; i++) {
        if (board[i][0].state == state &&
          board[i][1].state == state &&
          board[i][2].state == state) {
          return true;
        }
        if (board[0][i].state == state &&
          board[1][i].state == state &&
          board[2][i].state == state) {
          return true;
        }
      }
      if (board[0][0].state == state &&
        board[1][1].state == state &&
        board[2][2].state == state) {
        return true;
      }
      if (board[0][2].state == state &&
        board[1][1].state == state &&
        board[2][0].state == state) {
        return true;
      }
      return false;
    };
    let availableSquare = function (board: any[]) {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j].empty()) {
            return true;
          }
        }
      }
      return false;
    };
    if (stateWins(this.board, Square.X_STATE)) {
      return Board.X_WINS;
    }
    if (stateWins(this.board, Square.O_STATE)) {
      return Board.O_WINS;
    }
    if (availableSquare(this.board)) {
      return Board.PLAYING;
    }
    return Board.TIE;
  }
}

Board.PLAYING = 0;
Board.X_WINS = 1;
Board.O_WINS = 2;
Board.TIE = 3;







