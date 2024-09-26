class Ball extends Object {
    constructor(pos_x, pos_y, radius, bounce, color) {
      super(pos_x, pos_y, 0.1, color, 5, 9.82, "ball");

      this.radius = radius;
      this.bounce = bounce;
      this.selected = false;
    }

    step(fps, dx, dy, vx, vy) {
      if (this.pos_y - this.radius > 0) {
        this.vel_y -= this.gravity * 1/(fps);
        
      }
      else if (this.pos_y - this.radius <= 0) {
        this.vel_y = Math.abs(this.bounce * this.vel_y); 
      }

      this.pos_x += this.vel_x;
      this.pos_y += this.vel_y;

      return {
        dx: this.pos_x,
        dy: this.pos_y,
        vx: this.pos_vx,
        vy: this.pos_vy,
      };
    }

    draw(context) {
      context.beginPath();
      context.arc(this.pos_x, 300 - this.pos_y, this.radius, 0, 2 * Math.PI);
      context.fillStyle = this.color;
      context.fill();
      if (this.selected) {
        context.strokeStyle = "red";
      }
      else {
        context.strokeStyle = "black";
      }
      context.stroke();
    }
};