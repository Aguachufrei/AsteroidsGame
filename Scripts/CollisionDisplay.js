function drawCollisionDisplay(){
  if(!rel.showColliders)return;
  // Player
  rel.ctx.beginPath();
  rel.ctx.strokeStyle = "#0000ff";
  rel.ctx.lineWidth = 3;
  rel.ctx.rect(rel.player.x-1/2, rel.player.y-1/2, 1, 1);
  rel.ctx.stroke();
  rel.ctx.closePath();
  rel.ctx.beginPath();
  rel.ctx.strokeStyle = "#00ff00";
  rel.ctx.lineWidth = 1;
  rel.ctx.rect(rel.player.x-rel.player.width/2, rel.player.y-rel.player.height/3, rel.player.width, rel.player.width);
  rel.ctx.stroke();
  rel.ctx.closePath();
  rel.ctx.beginPath();
  rel.ctx.strokeStyle = "#ff0000";
  rel.ctx.lineWidth = 1;
  rel.ctx.arc(rel.player.x, rel.player.y, rel.player.r, 0, 2 * Math.PI);
  rel.ctx.stroke()
  rel.ctx.closePath();
  // Asteroids
  for(i=0;i<rel.asteroidsArray.length;i++){
    rel.ctx.beginPath();
    rel.ctx.strokeStyle = "#0000ff";
    rel.ctx.lineWidth = 3;
    rel.ctx.rect(rel.asteroidsArray[i].x-1/2, rel.asteroidsArray[i].y-1/2, 1, 1);
    rel.ctx.stroke();
    rel.ctx.closePath();
    rel.ctx.beginPath();
    rel.ctx.strokeStyle = "#00ff00";
    rel.ctx.lineWidth = 1;
    rel.ctx.rect(rel.asteroidsArray[i].x-rel.asteroidsArray[i].width/2, rel.asteroidsArray[i].y-rel.asteroidsArray[i].height/2, rel.asteroidsArray[i].width, rel.asteroidsArray[i].width);
    rel.ctx.stroke();
    rel.ctx.closePath();
    rel.ctx.beginPath();
    rel.ctx.strokeStyle = "#ff0000";
    rel.ctx.lineWidth = 1;
    rel.ctx.arc(rel.asteroidsArray[i].x, rel.asteroidsArray[i].y, rel.asteroidsArray[i].r, 0, 2 * Math.PI);
    rel.ctx.stroke();
    rel.ctx.closePath();
  }
  // Bullets
  for(i=0;i<rel.bulletsArray.length;i++){
    rel.ctx.beginPath();
    rel.ctx.strokeStyle = "#0000ff";
    rel.ctx.lineWidth = 3;
    rel.ctx.rect(rel.bulletsArray[i].x-1/2, rel.bulletsArray[i].y-1/2, 1, 1);
    rel.ctx.stroke();
    rel.ctx.closePath();
    rel.ctx.beginPath();
    rel.ctx.strokeStyle = "#00ff00";
    rel.ctx.lineWidth = 1;
    rel.ctx.rect(rel.bulletsArray[i].x-rel.bulletsArray[i].width/2, rel.bulletsArray[i].y-rel.bulletsArray[i].height/2, rel.bulletsArray[i].width, rel.bulletsArray[i].width);
    rel.ctx.stroke();
    rel.ctx.closePath();
    rel.ctx.beginPath();
    rel.ctx.strokeStyle = "#ff0000";
    rel.ctx.lineWidth = 1;
    rel.ctx.arc(rel.bulletsArray[i].x, rel.bulletsArray[i].y, rel.bulletsArray[i].r, 0, 2 * Math.PI);
    rel.ctx.stroke();
  rel.ctx.closePath();
  }
  // LaserBeems
}