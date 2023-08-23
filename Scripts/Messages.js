class Message{
  constructor(config){
    this.x = config.x || 10;
    this.y = config.y || 50;
    this.width = 0;
    this.height = 0;
    this.lineheight = 48;
    this.content = config.content || "display message";
    this.alive = true;
    this.lines = this.content.split('\n');

  }
  init(){
    rel.messagesArray.push(this);
  }
  end(){
    this.alive = false
  }
  update(){
    if(!this.alive){return;}
    for (var i = 0; i<this.lines.length; i++){
      rel.ctx.beginPath();
      rel.ctx.fillStyle = "#ffffff";
      rel.ctx.font = "48px serif";
      this.width = rel.ctx.measureText(this.lines[i]).width
      rel.ctx.fillText(this.lines[i], (rel.canvas.width - this.width)/2 , this.y + (i*this.lineheight));
      rel.ctx.closePath();
    }
  }
}