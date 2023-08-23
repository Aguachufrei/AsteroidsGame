const Utils = {
  *splitter(dx, dy) {
    var fdx = 0;
    var fdy = 0;
    var angle = Math.atan2(dy, dx) * 180 / Math.PI; /*just fitting*/ if (angle < 0) { angle += 360 }; angle = 360 - angle;
    var d = rel.asteroidSpeed;
    fdx = Math.sin((angle + 45) * Math.PI / 180) * d;
    fdy = Math.cos((angle + 45) * Math.PI / 180) * d;
    yield fdx;
    yield fdy;
    fdx = Math.sin((angle + 135) * Math.PI / 180) * d;
    fdy = Math.cos((angle + 135) * Math.PI / 180) * d;
    yield fdx;
    yield fdy;
  },
  emitEvent(name, detail) {
    const event = new CustomEvent(name, { detail });
    document.dispatchEvent(event);
  },
  destroy(object) {
    for (var variableKey in object) {
      if (object.hasOwnProperty(variableKey)) {
        delete object[variableKey];
      }
    }
  },
  defaultIfError(string, value) {
    try {
      eval(string);
    } catch (e) {
      return value;
    }
    return eval(string);
  },
  rectCircleCollider(rect, circle) {
    /*  let dx = Math.abs(circle.x - rect.x);
     let dy = Math.abs(circle.y - rect.y);
     if (dx > (rect.width / 2 + circle.r)) { return false; }
     if (dy > (rect.height / 2 + circle.r)) { return false; }
 
     if (dx <= (rect.w / 2)) { return true; }
     if (dy <= (rect.h / 2)) { return true; }
 
     let d = (dx - rect.w / 2)*(dx - rect.w / 2)+ (dy - rect.h / 2)*(dy - rect.h / 2);
     return (d <= (circle.r*circle.r)); */

    let dx = Math.abs(circle.x - rect.x - rect.width / 2);
    let dy = Math.abs(circle.y - rect.y - rect.height / 2);
    if (dx > (rect.width/2 + circle.r)) { return false; }
    if (dy > (rect.height/2 + circle.r)) { return false; }
    if (dx <= (rect.width/2)) { return true; } 
    if (dy <= (rect.height/2)) { return true; }
    let Dx=dx-rect.w/2;
    let Dy=dy-rect.h/2;
    return (Dx*Dx+Dy*Dy<=(circle.r*circle.r));


  },
  circleRotatedRectangleCollision(circle, rect) {
    // Rotate circle's center point back
    let unrotatedCircleX = Math.cos(-rect.a * Math.PI / 180) * (circle.x - rect.width / 2) - Math.sin(-rect.a * Math.PI / 180) * (circle.y - rect.height / 2) + rect.width / 2;
    let unrotatedCircleY = Math.sin(-rect.a * Math.PI / 180) * (circle.x - rect.width / 2) + Math.cos(-rect.a * Math.PI / 180) * (circle.y - rect.height / 2) + rect.height / 2;

    // Closest point in the rectangle to the center of circle rotated backwards(unrotated)
    let closestX, closestY;

    // Find the unrotated closest x point from center of unrotated circle
    if (unrotatedCircleX < rect.x) {
      closestX = rect.x;
    } else if (unrotatedCircleX > rect.x + rect.width) {
      closestX = rect.x + rect.width;
    } else {
      closestX = unrotatedCircleX;
    }
    // Find the unrotated closest y point from center of unrotated circle
    if (unrotatedCircleY < rect.y) {
      closestY = rect.y;
    } else if (unrotatedCircleY > rect.y + rect.height) {
      closestY = rect.y + rect.height;
    } else {
      closestY = unrotatedCircleY;
    }
    // Determine collision
    /* let collision = false; */
    let distance = Utils.findDistance(unrotatedCircleX, unrotatedCircleY, closestX, closestY);
    if (distance < Tanks[game.player.type].r) {
      return true; // Collision
    } else {
      return false;
    }
  },
  circleCircleCollision(c1, c2, xr) {
    dx = c1.x - c2.x;
    dy = c1.y - c2.y;
    dr = c1.r + c2.r
    if (xr != undefined) dr *= 2
    if (Math.sqrt(dx * dx + dy * dy) < dr) {
      return true;
    } else {
      return false;
    }
  }
}