class Object {
    constructor(pos_x, pos_y, mass, color, scalefactor, gravity, classname) {
      this.pos_x = pos_x;
      this.pos_y = pos_y;
      this.color = color;
      this.scalefactor = scalefactor;
      this.gravity = gravity;
      this.classname = classname;


      this.vel_x = 0;
      this.vel_y = 0;
      this.mass = mass;
    }
};