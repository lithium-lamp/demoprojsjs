class Buoy {
    constructor(m, k, r, rho, g, phi, A, o, p, b,
        theta, dL, x, y, vx, vy, ax, ay, h
    ) {
      this.m = m; //0
      this.k = k; //1
      this.r = r; //2

      this.rho = rho; //3
      this.g = g; //4
      this.phi = phi; //5

      this.A = A; //6
      this.o = o; //7
      this.p = p; //8

      this.b = b; //9
      this.theta = theta; //10
      this.dL = dL; //11

      this.x = x; //12
      this.y = y; //13
      this.vx = vx; //14

      this.vy = vy; //15
      this.ax = ax; //16
      this.ay = ay; //17

      this.h = h; //18
    }

    draw(context) {
      context.beginPath();
      context.arc(150 + buoy.x, 150 + buoy.y, 15, 0, 2 * Math.PI);
      context.fillStyle = '#ff0000';
      context.fill();
      context.stroke();
    }

    wavepoint(time) {
      return this.A * Math.sin(this.phi * (this.x + time)) + this.o;
    }

    step(time) {
      let x0 = (this.p + this.dL) * Math.sin(this.theta);
      let y0 = (this.p + this.dL) * Math.cos(this.theta);

      let Ffy = 0;
      let Ffx = 0;
      let Fflyt = 0;
      let Fs = 0;
      let Fsx = 0;
      let Fsy = 0;
      let FxTot = 0;
      let FyTot = 0;
      let Fg = this.m * this.g;
      let Fbx = 0;
      let Fby = 0;

      let min = this.wavepoint(time) * this.h;
      let max = min;

      let d1 = min;

      let count = 11;

      for (let i = 0; i < count - 1; i++) {
          //let xpos = (x0 - this.r + i * 2 * this.r) / count;

          let ypos = this.wavepoint(time);

          if (ypos > max)
              max = ypos;
          if (ypos < min)
              min = ypos;

          d1 += ypos;
      }

      d1 /= 11;

      if (y0 - this.r > max) {
          Fflyt = 0;
      }
      else if (y0 + this.r <= min) {
          Fflyt = this.rho * this.g * Math.abs(max - y0);

          Ffx = 10;

          Fbx = -1 * this.b * this.vx; //-1 * b * vx
          Fby = -1 * this.b * this.vy; //-1 * b * vy
      }
      else {
          let A = this.r * this.r;

          if (A >= Math.abs(d1 - y0) * this.r)
              A = (A - Math.abs(d1 - y0) * this.r) / A;
          else
              A = 0.5;

          Fflyt = this.rho * A * this.g;

          Fbx = -1 * this.b * this.vx * A;
          Fby = -1 * this.b * this.vy * A;

          Ffx = 10 * A;
      }

      Ffy = Fflyt;

      Fs = this.k * this.dL;
      if (this.dL <= 0)
          Fs = 0;

      Fsx = Fs * Math.sin(this.theta);
      Fsy = Fs * Math.cos(this.theta);

      FxTot = Ffx - Fsx + Fbx;
      FyTot = Ffy - Fsy - (Fg * Fg) + Fby;

      this.ax = (1 / this.m) * FxTot;
      this.ay = (1 / this.m) * FyTot;

      this.vx = this.vx + this.h * this.ax;
      this.vy = this.vy + this.h * this.ay;

      this.x = x0 + this.h * this.vx;
      this.y = y0 + this.h * this.vy;

      let L = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));

      this.theta = Math.atan(this.x, this.y);

      this.dL = L - this.p;
    }
   };