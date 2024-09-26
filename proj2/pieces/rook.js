class Rook extends Piece {
    constructor(hor_index, ver_index, isWhite, hasMoved) {
      super(hor_index, ver_index, "rook", isWhite);
      
      this.hasMoved = hasMoved;
    }
};