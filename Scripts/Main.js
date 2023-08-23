var rel;
class Game {
  constructor(config) {
    //config
    this.level = config.level;
    this.wave = 1
    this.inDelay = false
    this.type = config.type || "challenge";
    this.asteroidsToSpawn = [0, 0, 0, 0, 0]

    //Canvas and context
    rel = this;
    this.canvas = document.createElement("canvas")
    this.canvas.setAttribute("id", "canvas")
    this.canvas.width = window.innerWidth * 100 / 95;
    this.canvas.height = window.innerHeight * 100 / 95;
    this.canvas.backgroundColor = Utils.defaultIfError("Object.assign({},levelsInfo)[rel.level-1].characteristics.backgroundColor", "#000000");
    this.body = document.getElementById("body");
    this.end = false;

    //speed
    this.time0 = Date.now();
    this.time1 = Date.now();
    this.time2;
    this.FPS = 1000;
    this.maxFPS = 60;
    this.FPSaverage = 1;
    this.loopCount = 0;

    //sounds
    this.shotAudio = new Audio("Audios/shot.mp3")
    this.shotAudio.volume = 0.2;

    this.asteroidDestroying = new Audio("Audios/asteroidDestroying.mp3");
    this.asteroidDestroying.volume = 0.2;

    this.mainTheme = new Audio("Audios/temporalTheme.mp3")
    this.mainTheme.volume = 0.2;

    //player
    this.playerImage = new Image();
    this.playerImage.src = "Images/player.png";

    this.player = {
      x: this.canvas.width / 2,
      y: this.canvas.height / 1.5,
      r: 14,
      dragx: 0,
      dragy: -2,
      width: 40,
      height: 50,
      turnSpeed: Utils.defaultIfError("Object.assign({},levelsInfo)[this.level-1].characteristics.turnSpeed", 4),
      angle: 0,
      aceleration: Utils.defaultIfError("Object.assign({},levelsInfo)[this.level-1].characteristics.aceleration", 0.25),
      deceleration: Utils.defaultIfError("Object.assign({},levelsInfo)[this.level-1].characteristics.deceleration", 1.025),
      alive: true,
      godMode: false,
      autofire: false,
      reloadTime: true,
      bulletsPierce: false,
      bulletsDie: true,
    }
    this.player.autofire = gameSettings.autofire;
    this.player.recoil = this.player.recoil;
    /* this.player.godMode = gameSettings.godMode;
    this.player.reloadTime = gameSettings.reloadTime;
    this.player.bulletsPierce = gameSettings.bulletsPierce;
    this.player.bulletsDie = gameSettings.bulletsDie; */

    //Bullets
    this.bulletsVariable;
    this.bulletsArray = [];
    this.canShoot = true;
    this.shootInterval = Utils.defaultIfError("Object.assign({},levelsInfo)[this.level-1].characteristics.shootInterval", 500);

    //Asteroids
    this.canPress = true;
    this.pressInterval = 250;
    this.asteroidsVariable;
    this.asteroidsArray = [];
    this.asteroidSpeed = Utils.defaultIfError("Object.assign({},levelsInfo)[this.level-1].characteristics.asteroidSpeed", 2);

    //Laser beams
    this.laserBeamsVariable;
    this.laserBeamsArray = [];


    //Messages
    this.messageDuration = 1000;
    this.keyMessagesVariable;
    this.messagesVariable;
    this.messageCount = 0;
    this.messagesArray = [];
  }
  create() {
    document.addEventListener("event", this.wipe);
    this.body.appendChild(this.canvas);
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    if (this.mainTheme.canPlay = true) {
      this.mainTheme.currentTime = 0;
      this.mainTheme.play();
    }
    this.displayMessage()
    if (this.type === "sandbox") return;
    this.asteroidsToSpawn = [...levelsInfo[this.level - 1].waves[this.wave - 1].asteroids];
  }

  wipe() {
    document.removeEventListener("event", this.wipe);
    this.canvas = document.getElementById("canvas");
    if (this.canvas === undefined || this.canvas === null) { return; }
    this.canvas.remove();
    Utils.destroy(this);
  }

  displayMessage() {
    if (this.type === "sandbox") return;
    const levelsInfoCopy = Object.assign({}, levelsInfo);
    if (this.messageCount === levelsInfoCopy[this.level - 1].waves[this.wave - 1].messages.length) {
      this.inDelay = false;
      return;
    }
    this.inDelay = true;
    this.messagesVariable = new Message({
      content: levelsInfoCopy[this.level - 1].waves[this.wave - 1].messages[this.messageCount][0],
      y: this.canvas.height / 2,
    });
    this.messagesVariable.init;
    setTimeout(() => {
      this.messagesVariable.end();
      this.messageCount++
      this.displayMessage();
    }, levelsInfoCopy[this.level - 1].waves[this.wave - 1].messages[this.messageCount][1]);

  }

  waves() {
    if (this.type === "sandbox") { return; }
    for (let i = 0; i < this.asteroidsToSpawn.length; i++) {
      if (this.asteroidsToSpawn[i] === 0) { continue } else { return }
    }
    for (var i = this.asteroidsArray.length; i--;) {
      if (!this.asteroidsArray[i].alive) { continue } else { return }
    }
    if (levelsInfo[this.level - 1].waves.length === this.wave) {
      this.won();
    } else {
      this.wave++;
      this.messageCount = 0
      this.asteroidsToSpawn = [...levelsInfo[this.level - 1].waves[this.wave - 1].asteroids];
      this.displayMessage()
    }
  }

  playerMovement() {
    // movement
    if (keys.includes("ArrowUp") || keys.includes("KeyW") || keys.includes("BracketLeft")) {
      this.player.dragx = this.player.dragx + Math.sin(this.player.angle * Math.PI / 180) * this.player.aceleration;
      this.player.dragy = this.player.dragy - Math.cos(this.player.angle * Math.PI / 180) * this.player.aceleration;
    }
    if (keys.includes("ArrowDown") || keys.includes("KeyS") || keys.includes("Quote")) {
      this.player.dragx = this.player.dragx / this.player.deceleration;
      this.player.dragy = this.player.dragy / this.player.deceleration;
    }
    if (keys.includes("ArrowLeft") || keys.includes("KeyA") || keys.includes("Semicolon")) {
      this.player.angle = this.player.angle - this.player.turnSpeed;
    }
    if (keys.includes("ArrowRight") || keys.includes("KeyD") || keys.includes("Backslash")) {
      this.player.angle = this.player.angle + this.player.turnSpeed;
    }

    // drag Update
    this.player.x = this.player.x + this.player.dragx;
    this.player.y = this.player.y + this.player.dragy;
    this.player.dragx = this.player.dragx / this.player.deceleration;
    this.player.dragy = this.player.dragy / this.player.deceleration;

    // wall warp
    if (this.player.x < -25) {
      this.player.x = this.canvas.width + 25;
    }
    if (this.player.x > this.canvas.width + 25) {
      this.player.x = -25;
    }
    if (this.player.y < -25) {
      this.player.y = this.canvas.height + 25;
    }
    if (this.player.y > this.canvas.height + 25) {
      this.player.y = -25;
    }
    // rotation
    this.ctx.save();
    this.ctx.translate(this.player.x, this.player.y);
    this.ctx.rotate(this.player.angle * Math.PI / 180);
    this.ctx.drawImage(
      this.playerImage,
      -this.player.width / 2,
      -this.player.height / 1.5,
      this.player.width,
      this.player.height,
    );
    this.ctx.restore();
  }
  createAsteroids() {
    if (this.inDelay) { return; }
    for (var i = 0; i < this.asteroidsToSpawn[0]; i++) {
      this.asteroidsVariable = new Asteroid(1);
      this.asteroidsVariable.init();
    }
    this.asteroidsToSpawn[0] = 0;
    for (var i = 0; i < this.asteroidsToSpawn[1]; i++) {
      this.asteroidsVariable = new Asteroid(2);
      this.asteroidsVariable.init();
    }
    this.asteroidsToSpawn[1] = 0;
    for (var i = 0; i < this.asteroidsToSpawn[2]; i++) {
      this.asteroidsVariable = new Asteroid(3);
      this.asteroidsVariable.init();
    }
    this.asteroidsToSpawn[2] = 0;
    for (var i = 0; i < this.asteroidsToSpawn[3]; i++) {
      this.asteroidsVariable = new Asteroid(4);
      this.asteroidsVariable.init();
    }
    this.asteroidsToSpawn[3] = 0;
    for (var i = 0; i < this.asteroidsToSpawn[4]; i++) {
      this.laserBeamsVariable = new LaserBeam({});
      this.laserBeamsVariable.init();
    }
    this.asteroidsToSpawn[4] = 0;
  }

  createBullets() {

    if ((keys.includes("Space") || this.player.autofire === true) && this.canShoot) {
      if (this.shotAudio.canPlay = true) {
        this.shotAudio.currentTime = 0;
        this.shotAudio.play();
      }
      if (this.player.recoil) {
        this.player.dragx = this.player.dragx - Math.sin(this.player.angle * Math.PI / 180) * this.player.aceleration * 8;
        this.player.dragy = this.player.dragy + Math.cos(this.player.angle * Math.PI / 180) * this.player.aceleration * 8;
      }
      this.bulletsVariable = new Bullet();
      this.bulletsVariable.init();
      if (!this.player.reloadTime) { return; }
      this.canShoot = false;
      setTimeout(() => { this.canShoot = true }, this.shootInterval);
    }
  }
  entitiesUpdate() {
    for (var i = this.bulletsArray.length; i--;) {
      this.bulletsArray[i].update();
    }
    for (var i = this.asteroidsArray.length; i--;) {
      this.asteroidsArray[i].update();
    }
    for (var i = this.laserBeamsArray.length; i--;) {
      this.laserBeamsArray[i].update();
    }
    if (this.keyMessagesVariable != undefined) { this.keyMessagesVariable.update() }
    if (this.messagesVariable != undefined) { this.messagesVariable.update() }
  }
  bulletAsteroidCollison() {
    for (var i = this.asteroidsArray.length; i--;) {
      if (!this.asteroidsArray[i].alive) { continue; }
      for (var j = this.bulletsArray.length; j--;) {
        if (!this.bulletsArray[j].alive) { continue; }
        if (!((this.asteroidsArray[i].width + 7) * (this.asteroidsArray[i].width + 7) > (this.asteroidsArray[i].x - this.bulletsArray[j].x) * (this.asteroidsArray[i].x - this.bulletsArray[j].x) + (this.asteroidsArray[i].y - this.bulletsArray[j].y) * (this.asteroidsArray[i].y - this.bulletsArray[j].y))) { continue; }
        if (this.asteroidDestroying.canPlay = true) {
          this.asteroidDestroying.currentTime = 0;
          this.asteroidDestroying.play();
        }
        if (this.asteroidsArray[i].type == 2) {
          const gen = Utils.splitter(this.asteroidsArray[i].dx, this.asteroidsArray[i].dy);
          this.asteroidsVariable = new Asteroid(1, {
            x: this.asteroidsArray[i].x,
            y: this.asteroidsArray[i].y,
            dx: gen.next().value,
            dy: gen.next().value,
          });
          this.asteroidsVariable.init();
          this.asteroidsVariable = new Asteroid(1, {
            x: this.asteroidsArray[i].x,
            y: this.asteroidsArray[i].y,
            dx: gen.next().value,
            dy: gen.next().value,
          });
          this.asteroidsVariable.init();
        } else if (this.asteroidsArray[i].type == 3) {
          const gen = Utils.splitter(this.asteroidsArray[i].dx, this.asteroidsArray[i].dy);
          this.asteroidsVariable = new Asteroid(2, {
            x: this.asteroidsArray[i].x,
            y: this.asteroidsArray[i].y,
            dx: gen.next().value,
            dy: gen.next().value,
          });
          this.asteroidsVariable.init();
          this.asteroidsVariable = new Asteroid(2, {
            x: this.asteroidsArray[i].x,
            y: this.asteroidsArray[i].y,
            dx: gen.next().value,
            dy: gen.next().value,
          });
          this.asteroidsVariable.init();
        } else if (this.asteroidsArray[i].type == 4) {
          const gen = Utils.splitter(this.asteroidsArray[i].dx, this.asteroidsArray[i].dy);
          this.asteroidsVariable = new Asteroid(3, {
            x: this.asteroidsArray[i].x,
            y: this.asteroidsArray[i].y,
            dx: gen.next().value,
            dy: gen.next().value,
          });
          this.asteroidsVariable.init();
          this.asteroidsVariable = new Asteroid(3, {
            x: this.asteroidsArray[i].x,
            y: this.asteroidsArray[i].y,
            dx: gen.next().value,
            dy: gen.next().value,
          });
          this.asteroidsVariable.init();
        }
        this.asteroidsArray[i].alive = false;
        this.asteroidsArray.splice(i, 1);
        console.log(j)
        if (!this.player.bulletsPierce) { this.bulletsArray.splice(j, 1); }
      }
    }
  }
  playerAsteroidCollison() {
    if (this.player.godMode) { return; }
    for (var i = this.asteroidsArray.length; i--;) {
      if (this.asteroidsArray[i].alive) {
        var a;
        var x;
        var y;

        a = this.asteroidsArray[i].width / 2 + this.player.width / 2;
        x = this.asteroidsArray[i].x - this.player.x;
        y = this.asteroidsArray[i].y - this.player.y;

        if (a > Math.sqrt((x * x) + (y * y))) {
          this.player.alive = false;
        } else { }
      }
    }
  }
  playerLaserBeamCollison() {
    if (this.player.godMode) { return; }
    for (var i = this.laserBeamsArray.length; i--;) {
      if (this.laserBeamsArray[i].active) {
        if (Utils.rectCircleCollider(this.laserBeamsArray[i], this.player)) {
          this.player.alive = false;
        }
      }
    }
  }

  won() {
    /* for (var i = this.asteroidsArray.length; i--;) {
      if (this.asteroidsArray[i].alive) { return; }
    } */
    /* if (this.type === "survival") {
      this.asteroidsToSpawn = this.levelAsteroidsToSpawn[this.level];
      this.level++
      if (this.level < 16) { return; }
    } */
    this.mainTheme.currentTime = 0;
    this.mainTheme.pause();
    if (this.end) { return; }
    this.end = true;
    win(this.type);
  }

  lost() {
    if (this.player.alive) { return; }
    if (this.end) { return; }
    this.mainTheme.currentTime = 0;
    this.mainTheme.pause();
    this.end = true;
    lose(this.type);
  }

  createKeyMessages(content) {
    this.keyMessagesVariable = new Message({ content: content, });
    this.keyMessagesVariable.init();
  }

  sandboxOptions() {
    if (!this.canPress) { return; }
    this.player.autofire = gameSettings.autofire;
    this.player.recoil = gameSettings.recoil;

    if (keys.includes("KeyQ")) {
      this.canPress = false;
      this.player.alive = false;
      setTimeout(() => { ; this.canPress = true }, this.pressInterval);
    }
    if (keys.includes("KeyE")) {
      this.canPress = false;
      gameSettings.autofire = !gameSettings.autofire;
      this.player.autofire = gameSettings.autofire;
      setTimeout(() => { ; this.canPress = true }, this.pressInterval);
      this.createKeyMessages(`Autofire: ${gameSettings.autofire ? `on` : `off`} `)
    }
    if (keys.includes("KeyT")) {
      this.canPress = false;
      gameSettings.recoil = !gameSettings.recoil;
      this.player.recoil = gameSettings.recoil;
      setTimeout(() => { ; this.canPress = true }, this.pressInterval);
      this.createKeyMessages(`Recoil: ${gameSettings.recoil ? `on` : `off`} `)
    }

    //sandbox options
    if (this.type != "sandbox") { return; }
    this.player.godMode = gameSettings.godMode;
    this.player.reloadTime = gameSettings.reloadTime;
    this.player.bulletsPierce = gameSettings.bulletsPierce;
    this.player.bulletsDie = gameSettings.bulletsDie;

    if (keys.includes("KeyG")) {
      this.canPress = false;
      gameSettings.godMode = !gameSettings.godMode;
      this.player.godMode = gameSettings.godMode;
      setTimeout(() => { this.canPress = true }, this.pressInterval);
      this.createKeyMessages(`God Mode: ${gameSettings.godMode ? `on` : `off`} `)
    }
    if (keys.includes("KeyR")) {
      this.canPress = false;
      gameSettings.reloadTime = !gameSettings.reloadTime;
      this.player.reloadTime = gameSettings.reloadTime;
      setTimeout(() => { this.canPress = true }, this.pressInterval);
      this.createKeyMessages(`Reload Time: ${gameSettings.reloadTime ? `on` : `off`} `)
    }
    if (keys.includes("KeyP")) {
      this.canPress = false;
      gameSettings.bulletsPierce = !gameSettings.bulletsPierce;
      this.player.bulletsPierce = gameSettings.bulletsPierce;
      setTimeout(() => { this.canPress = true }, this.pressInterval);
      this.createKeyMessages(`Pierce: ${gameSettings.bulletsPierce ? `on` : `off`} `);
    }
    if (keys.includes("KeyO")) {
      this.canPress = false;
      gameSettings.bulletsDie = !gameSettings.bulletsDie;
      this.player.bulletsDie = gameSettings.bulletsDie;
      setTimeout(() => { this.canPress = true }, this.pressInterval);
      this.createKeyMessages(`Bullets die: ${gameSettings.bulletsDie ? `on` : `off`} `);
    }

    //Asteroid spawning
    if (keys.includes("KeyZ")) {
      if (this.player.reloadTime) { this.canPress = false; }
      this.asteroidsToSpawn[0]++;
      setTimeout(() => { this.canPress = true }, this.pressInterval);
    }
    if (keys.includes("KeyX")) {
      if (this.player.reloadTime) { this.canPress = false; }
      this.asteroidsToSpawn[1]++;
      setTimeout(() => { this.canPress = true }, this.pressInterval);
    }
    if (keys.includes("KeyC")) {
      if (this.player.reloadTime) { this.canPress = false; }
      this.asteroidsToSpawn[2]++;
      setTimeout(() => { this.canPress = true }, this.pressInterval);
    }
    if (keys.includes("KeyV")) {
      if (this.player.reloadTime) { this.canPress = false; }
      this.asteroidsToSpawn[3]++;
      setTimeout(() => { this.canPress = true }, this.pressInterval);
    }
    if (keys.includes("KeyB")) {
      if (this.player.reloadTime) { this.canPress = false; }
      this.asteroidsToSpawn[4]++;
      setTimeout(() => { this.canPress = true }, this.pressInterval);
    }
  }
  performance(){
    this.time2 = Date.now();
    this.FPS = Math.round(1000 / (this.time2 - this.time1));
    this.time1 = this.time2;
    this.loopCount++
    this.FPSaverage = this.FPSaverage*this.FPS/this.FPSaverage
    this.ctx.beginPath();
    this.ctx.fillStyle = "#00ffff";
    this.ctx.font = "12px serif";
    this.ctx.fillText(this.FPS, 0, 12);
    this.ctx.closePath();
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = this.canvas.backgroundColor;
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.ctx.closePath();
    this.waves();
    this.playerMovement();
    this.createBullets();
    this.createAsteroids();
    this.entitiesUpdate();
    this.bulletAsteroidCollison();
    this.playerAsteroidCollison();
    this.playerLaserBeamCollison();
    this.sandboxOptions();
    drawCollisionDisplay();
    this.lost();
    this.performance();
    if (!this.end) {
      setTimeout(() => {
        requestAnimationFrame(() => {
          this.draw();
        });
      }, 1000 / this.maxFPS)
    }
  }
}