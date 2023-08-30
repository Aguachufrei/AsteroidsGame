const gameSettings = {
  "autofire": false,
  "recoil": true,
  "godMode": false,
  "reloadTime": true,
  "bulletsPierce": false,
  "bulletsDie": true,
}

class SettingsScreen {
  constructor(detail) {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.lower = Math.min(this.width, this.height);
    this.higher = Math.max(this.width, this.height);

    this.div = document.createElement("div");
    this.div.setAttribute("id", "settingsDiv");
    this.div.style.width = this.lower + "px";
    this.div.style.height = this.lower + "px";
    this.div.style.top = (this.higher - this.width) / 2 + "px";
    this.div.style.left = (this.higher - this.height) / 2 + "px";

    this.image = new Image;
    this.image.src = "Images/TitleScreen.png";
    this.image.width = this.lower;
    this.image.height = this.lower;
    this.image.setAttribute("id", "settingsImage");
    this.div.appendChild(this.image);

    this.h1 = document.createElement("h1");
    this.h1.setAttribute("id", "settingsH1");
    this.h1.innerHTML = `Settings`;
    this.h1.style.fontSize = "60px";
    this.h1.style.color = "#fff";
    this.h1.style.position = "absolute";
    this.h1.style.top = `${this.lower / 5}px`;
    this.h1.style.left = `${this.lower / 4}px`;
    this.div.appendChild(this.h1);
    this.div.appendChild(this.h1);
    this.buttonAmountx = 4;
    this.buttonAmounty = 2;
    this.buttonText = ["Autofire", "Recoil", "God Mode", "No reload", "Bullets Pierce", "Bullets Die", "", ""];
    this.buttonCode = ["autofire", "recoil", "godMode", "reloadTime", "bulletsPierce", "bulletsDie", "", ""];
    this.buttonAtributes = ["settingVar.autofire()", "settingVar.recoil()", "settingVar.godMode()", "settingVar.reloadTime()", "settingVar.bulletsPierce()", "settingVar.bulletsDie()", "", "",];

    for (var i = 0; i < this.buttonAmounty; i++) {
      for (var j = 0; j < this.buttonAmountx; j++) {
        this.button = document.createElement("button");
        this.button.setAttribute("id", "settingButton" + (j + 4 * i));
        this.button.setAttribute("onClick", this.buttonAtributes[j + 4 * i]);
        this.button.innerHTML = this.buttonText[j + 4 * i];
        if (gameSettings[this.buttonCode[j + 4 * i]]) {
          this.button.classList.add("pressed-button");
        } else {
          this.button.classList.add("no-pressed-button");
        }
        this.button.style.fontSize = Math.round(this.lower / 35) + "px";
        this.button.style.width = Math.round(this.lower / 4) + "px";
        this.button.style.height = Math.round(this.lower / 7) + "px";
        this.button.style.top = Math.round(this.lower * (1 + 0.6 * i) / 4) + "px";
        this.button.style.left = Math.round((this.lower * j / 4)) + "px";
        this.button.style.borderRadius = Math.round(this.lower / 30) + "px";
        this.div.appendChild(this.button);
      }
    }

    this.button = document.createElement("button");
    this.button.setAttribute("id", "backButton" + i);
    this.button.setAttribute("onClick", "titles()");
    this.button.innerHTML = "Back";
    this.button.classList.add("no-pressed-button");
    this.button.style.fontSize = Math.round(this.lower / 35) + "px";
    this.button.style.width = Math.round(this.lower / 5) + "px";
    this.button.style.height = Math.round(this.lower / 7) + "px";
    this.button.style.top = Math.round(this.lower * 3.4 / 4) + "px";
    this.button.style.left = Math.round(this.lower * 4.75 / 6) + "px";
    this.button.style.borderRadius = Math.round(this.lower / 30) + "px";
    this.div.appendChild(this.button);
    this.body = document.getElementById("body");
    this.button = document.getElementById("settingButton0");
  }

  autofire() {
    gameSettings.autofire = !gameSettings.autofire;
    this.button = document.getElementById("settingButton0");
    if (gameSettings.autofire) {
      this.button.classList.remove("no-pressed-button");
      this.button.classList.add("pressed-button");
    } else {
      this.button.classList.remove("pressed-button");
      this.button.classList.add("no-pressed-button");
    }
  }

  recoil() {
    gameSettings.recoil = !gameSettings.recoil;
    this.button = document.getElementById("settingButton1");
    if (gameSettings.recoil) {
      this.button.classList.remove("no-pressed-button");
      this.button.classList.add("pressed-button");
    } else {
      this.button.classList.remove("pressed-button");
      this.button.classList.add("no-pressed-button");
    }
  }

  godMode() {
    gameSettings.godMode = !gameSettings.godMode;
    this.button = document.getElementById("settingButton2");
    if (gameSettings.godMode) {
      this.button.classList.remove("no-pressed-button");
      this.button.classList.add("pressed-button");
    } else {
      this.button.classList.remove("pressed-button");
      this.button.classList.add("no-pressed-button");
    }
  }

  reloadTime() {
    gameSettings.reloadTime = !gameSettings.reloadTime;
    this.button = document.getElementById("settingButton3");
    if (gameSettings.reloadTime) {
      this.button.classList.remove("no-pressed-button");
      this.button.classList.add("pressed-button");
    } else {
      this.button.classList.remove("pressed-button");
      this.button.classList.add("no-pressed-button");
    }
  }

  bulletsPierce() {
    gameSettings.bulletsPierce = !gameSettings.bulletsPierce;
    this.button = document.getElementById("settingButton4");
    if (gameSettings.bulletsPierce) {
      this.button.classList.remove("no-pressed-button");
      this.button.classList.add("pressed-button");
    } else {
      this.button.classList.remove("pressed-button");
      this.button.classList.add("no-pressed-button");
    }
  }

  bulletsDie() {
    gameSettings.bulletsDie = !gameSettings.bulletsDie;
    this.button = document.getElementById("settingButton5");
    if (gameSettings.bulletsDie) {
      this.button.classList.remove("no-pressed-button");
      this.button.classList.add("pressed-button");
    } else {
      this.button.classList.remove("pressed-button");
      this.button.classList.add("no-pressed-button");
    }
  }

  create() {
    document.addEventListener("event", this.wipe);
    this.body.appendChild(this.div);
  }

  wipe() {
    this.div = document.getElementById("settingsDiv");
    if (this.div === undefined || this.div === null) { return; }
    this.div.remove();
    document.removeEventListener("event", this.wipe);
    Utils.destroy(this);
  }
}