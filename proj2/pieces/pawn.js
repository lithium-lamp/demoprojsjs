class Pawn extends Piece {
    constructor(hor_index, ver_index, isWhite, doubleStepped) {
      super(hor_index, ver_index, "pawn", isWhite);
      
      this.doubleStepped = doubleStepped;
    }
};