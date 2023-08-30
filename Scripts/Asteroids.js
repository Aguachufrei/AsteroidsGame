class Asteroid {
  constructor(type, config) {
    rel.canvas = document.getElementById("canvas");
    this.asteroidImage = new Image();
    this.asteroidImage.src = "Images/asteroideAlbino.png";
    this.asteroidSize = [[40, 40], [80, 80], [150, 150], [450, 450]];
    this.asteroidSpeed = rel.asteroidSpeed;
    this.x; this.y; this.dx; this.dy;
    this.random = Math.floor(Math.random() * 4);
    if (config !== undefined) {
      this.x = config.x;
      this.y = config.y;
      this.r = config.r;
      this.dx = config.dx;
      this.dy = config.dy;
    } else {
      if (this.random === 0) {
        this.x = rel.canvas.width;
        this.y = Math.floor(Math.random() * rel.canvas.height);
        this.dx = -this.asteroidSpeed;
        this.dy = Math.random() * this.asteroidSpeed * 2 - this.asteroidSpeed;
      } else if (this.random === 1) {
        this.x = 0;
        this.y = Math.floor(Math.random() * rel.canvas.height);
        this.dx = this.asteroidSpeed;
        this.dy = Math.random() * this.asteroidSpeed * 2 - this.asteroidSpeed;
      } else if (this.random === 2) {
        this.x = Math.floor(Math.random() * rel.canvas.width);
        this.y = rel.canvas.height;
        this.dx = Math.random() * this.asteroidSpeed * 2 - this.asteroidSpeed;
        this.dy = -this.asteroidSpeed;
      } else if (this.random === 3) {
        this.x = Math.floor(Math.random() * rel.canvas.width);
        this.y = 0;
        this.dx = Math.random() * this.asteroidSpeed * 2 - this.asteroidSpeed;
        this.dy = this.asteroidSpeed;
      }
    }
    this.type = type;
    this.da = Math.random() * this.asteroidSpeed * 2 - this.asteroidSpeed;
    this.angle = 0;
    this.alive = true;
    this.height = this.asteroidSize[this.type - 1][0];
    this.width = this.asteroidSize[this.type - 1][1];
    this.r = Math.sqrt(this.width*this.height/4);
  }

  init() {
    rel.asteroidsArray.push(this);
  }

  update() {
    if (this.alive) {
      this.x = this.x + this.dx;
      this.y = this.y + this.dy;
      this.angle = this.angle + this.da;
      if (this.x < -this.width) {
        this.x = rel.canvas.width + this.width / 2;
      }
      if (this.x > rel.canvas.width + this.width / 2) {
        this.x = -this.width;
      }
      if (this.y < -this.width) {
        this.y = rel.canvas.height + this.width / 2;
      }
      if (this.y > rel.canvas.height + this.width / 2) {
        this.y = -this.width;
      }
      //draw
      rel.ctx.save();
      rel.ctx.translate(this.x, this.y);
      rel.ctx.rotate(this.angle * Math.PI / 180);
      rel.ctx.drawImage(
        this.asteroidImage,
        -this.width / 2,
        -this.height / 2,
        this.width,
        this.height,
      );
      rel.ctx.restore();
    } else {
      
    }
  }
}