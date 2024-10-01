class Bishop extends Piece {
    constructor(hor_index, ver_index, isWhite) {
      super(hor_index, ver_index, "bishop", isWhite);
      
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

        context.fillText('B', this.hor_index * 30 + 45, 300 - this.ver_index * 30 - 38.5);
      }
      else {
        context.fillStyle = "#000000";
        context.strokeStyle = "#ffffff";
        
        context.fill();
        context.stroke();

        context.font = 'bold 14pt Calibri';
        context.textAlign = 'center';
        context.fillStyle = '#ffffff';

        context.fillText('B', this.hor_index * 30 + 45, 300 - this.ver_index * 30 - 38.5);
      }

    }
};