class Spring extends Object {
  constructor(pos_x, pos_y, width, height, k, color) {
    super(pos_x, pos_y, 0.1, color, 5, 9.82, "spring");

    this.width = width;
    this.height = height;
    this.k = k;
  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.pos_x - (this.width)/2, 300 - this.pos_y - (this.height)/2, this.width, this.height);
    context.strokeStyle = "black";
    context.strokeRect(this.pos_x - (this.width)/2, 300 - this.pos_y - (this.height)/2, this.width, this.height);
  }
};