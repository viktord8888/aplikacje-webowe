document.addEventListener("DOMContentLoaded", function() {
  let g = new Game();

  function clearBoard() {
    let clearBoard = document.querySelectorAll(".square");
    clearBoard.forEach(function(square: { innerHTML: string; }) {
      square.innerHTML = "";
    });
    setMessage("");
  }

  function setMessage(message: string) {
    let setMessage = <HTMLElement>document.getElementById("message");
    setMessage.innerHTML = message;
  }

  let newGame = <HTMLElement>document.getElementById("new-game");
  newGame.addEventListener("click", function() {
    g.reset();
    clearBoard();
  });




  let boardClick = <HTMLElement>document.getElementById("board");
  boardClick.addEventListener("click", function(event) {
    if (document.getElementsByClassName("square")) {
      let squareInfo = boardClick.toString().split("_");
      let row = Number(squareInfo[1]);
      let col = Number(squareInfo[2]);
      let val = g.makeMove(row, col)

      if (val != undefined) {
        let stateValue = Square.stateToString(val);
        boardClick.innerHTML = `<span class=${stateValue}>${stateValue}</span>`;
      }
    }
      let state = g.winner();
  
      if (state == Board.X_WINS) {
        setMessage("X Wins!")
      } else if (state == Board.O_WINS) {
        setMessage("O Wins!");
      } else if (state == Board.TIE) {
        setMessage("Tie!");
      }
    });
  });
