class Bullet{
  constructor(){
    this.x = rel.player.x;
    this.y = rel.player.y;
    this.height = 15;
    this.width = 15;
    this.r = 7;
    this.angle = rel.player.angle;
    this.alive = true;
    this.live = 30;
    this.bulletSpeed = 20;
  }
  init(){
    rel.bulletsArray.push(this);
  }
  update(){
    if(!this.alive){return;}
    this.live--;
    this.x = this.x + Math.sin(this.angle * Math.PI / 180) * this.bulletSpeed;
    this.y = this.y - Math.cos(this.angle * Math.PI / 180) * this.bulletSpeed;
    rel.ctx.beginPath();
    rel.ctx.fillStyle = "#00000000";
    rel.ctx.strokeStyle = "#ffffff";
    rel.ctx.lineWidth = 3;
    rel.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    rel.ctx.fill();
    rel.ctx.stroke();
    rel.ctx.closePath();
    if(this.live <= 0&&rel.player.bulletsDie){
      this.alive = false;
      rel.bulletsArray.splice(rel.bulletsArray.indexOf(this),1)
    }
    if(this.x < -25){
      this.x = rel.canvas.width + 25;
    }
    if(this.x > rel.canvas.width + 25){
      this.x = -25;
    }
    if(this.y < -25){
      this.y = rel.canvas.height + 25;
    }
    if(this.y > rel.canvas.height + 25){
      this.y = -25;
    }
  }
}