class King extends Piece {
    constructor(hor_index, ver_index, isWhite, hasMoved) {
      super(hor_index, ver_index, "king", isWhite);
      
      this.hasMoved = hasMoved;
    }
};