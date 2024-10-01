class King extends Piece {
    constructor(hor_index, ver_index, isWhite, hasMoved) {
      super(hor_index, ver_index, "king", isWhite);
      
      this.hasMoved = hasMoved;
    }

    draw(context) {
      context.beginPath();

      context.arc(this.hor_index * 30 + 45, 300 - this.ver_index * 30 - 45, 15, 0, 2 * Math.PI);

      if (this.isWhite) {
        context.fillStyle = "#ffffff";
        context.strokeStyle = "#000000";
        
        context.fill();
        context.stroke();

        context.font = 'bold 14pt Calibri';
        context.textAlign = 'center';
        context.fillStyle = '#000000';

        context.fillText('K', this.hor_index * 30 + 45, 300 - this.ver_index * 30 - 38.5);
      }
      else {
        context.fillStyle = "#000000";
        context.strokeStyle = "#ffffff";
        
        context.fill();
        context.stroke();

        context.font = 'bold 14pt Calibri';
        context.textAlign = 'center';
        context.fillStyle = '#ffffff';

        context.fillText('K', this.hor_index * 30 + 45, 300 - this.ver_index * 30 - 38.5);
      }
    }
};