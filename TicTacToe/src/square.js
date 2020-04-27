class Square {
    constructor() {
      this.state = Square.EMPTY_STATE;
    }
    x() {
      return this.state == Square.X_STATE;
    }
    o() {
      return this.state == Square.O_STATE;
    }
    empty() {
      return this.state == Square.EMPTY_STATE;
    }
    static stateToString(state) {
      if (state == Square.X_STATE) {
        return "X";
      }
      else if (state == Square.O_STATE) {
        return "O";
      }
      else {
        return "";
      }
    }
  }
  
  Square.EMPTY_STATE = 0;
  Square.X_STATE = 1;
  Square.O_STATE = 2;
  
  
  
  
  