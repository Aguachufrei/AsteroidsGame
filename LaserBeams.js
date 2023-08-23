class LaserBeam{
  constructor(config){
    this.x = config.x || 200;
    this.y = config.y || 0;
    this.width = config.width || 60;
    this.height = config.height || 20;
    this.orientation = config.orientation || "vertical";
    this.alive = true
    this.active = false
    this.lifespan = config.lifespan || 600
    this.life = this.lifespan;

    this.warningImage = new Image();
    this.warningImage.src = "warning.png";
  }
  init(){
    if(this.orientation === "vertical"){
      this.height = rel.canvas.height;
      /* this.x = Math.random()*rel.canvas.width; */
      this.x = rel.player.x
    }
    rel.laserBeamsArray.push(this)
  }
  update(){
    if(this.life>(5.7/8)*this.lifespan){
      // warning part
    rel.ctx.beginPath();
    rel.ctx.drawImage(this.warningImage, this.x+this.width/2-32, 0, 64, 64)
    rel.ctx.drawImage(this.warningImage, this.x+this.width/2-32, canvas.height-100, 64, 64)
    rel.ctx.closePath();
      
    } else if(this.life>(1/8)*this.lifespan){
      this.active = true
      // working part
    rel.ctx.beginPath();
    rel.ctx.fillStyle = "#0000ff";
    rel.ctx.rect(this.x, this.y, this.width, this.height);
    rel.ctx.fill();
    rel.ctx.closePath();

    rel.ctx.beginPath();
    rel.ctx.fillStyle = "#00ffff";
    rel.ctx.rect(this.x+this.width/6, this.y, this.width/1.5, this.height);
    rel.ctx.fill();
    rel.ctx.closePath();

    } else if(this.life>0){
      //finishing part
      rel.ctx.beginPath();
    rel.ctx.fillStyle = "#0000ff";
    rel.ctx.rect(this.x, this.y, this.width, this.height);
    rel.ctx.fill();
    rel.ctx.closePath();
    } else if(this.life === 0){
      // finish
      this.active = false;
      this.alive = false;
      Utils.destroy(this);

    } else {
      // error
    }
    rel.ctx.beginPath();
    rel.ctx.fillStyle = "#ffffff";
    rel.ctx.rect(this.x+this.width/2, this.y, 1, this.height);
    rel.ctx.fill();
    rel.ctx.closePath();
    this.life--;
  }
  draw(){
    rel.ctx.beginPath();
    rel.ctx.fillStyle = "#00ff00";
    rel.ctx.rect(this.x, this.y, this.width, this.height);
    rel.ctx.fill();
    rel.ctx.closePath();
  }
}