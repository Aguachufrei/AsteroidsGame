class WinScreen {
  constructor(detail) {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.lower = Math.min(this.width, this.height);
    this.higher = Math.max(this.width, this.height);

    this.div = document.createElement("div");
    this.div.setAttribute("id", "winDiv");
    this.div.style.width = this.lower + "px";
    this.div.style.height = this.lower + "px";
    this.div.style.top = (this.higher - this.width) / 2 + "px";
    this.div.style.left = (this.higher - this.height) / 2 + "px";

    this.image = new Image;
    this.image.src = "Images/TitleScreen.png";
    this.image.width = this.lower;
    this.image.height = this.lower;
    this.image.setAttribute("id", "winImage");
    this.div.appendChild(this.image);

    this.h1 = document.createElement("h1");
    this.h1.setAttribute("id", "winH1");
    this.h1.innerHTML = `You Won`;
    this.h1.style.fontSize = "60px";
    this.h1.style.color = "#fff";
    this.h1.style.position = "absolute";
    this.h1.style.top = `${this.lower / 5}px`;
    this.h1.style.left = `${this.lower / 4}px`;
    this.div.appendChild(this.h1);

    if (levelNum === currentLevel) {
      currentLevel++;
      this.p = document.createElement("p");
      this.p.setAttribute("id", "winP");
      this.p.innerHTML = `You unlocked level ${currentLevel}`;
      this.p.style.color = "#fff";
      this.p.style.fontSize = "40px";
      this.p.style.position = "absolute";
      this.p.style.top = `${this.lower / 3}px`;
      this.p.style.left = `${this.lower / 12}px`;
      this.div.appendChild(this.p);
    }
    this.button = document.createElement("button");
    this.button.setAttribute("id", "retryWinButton");
    this.button.setAttribute("onClick", `${detail}(${levelNum + 1})`);
    this.button.innerHTML = "Next Level";
    this.button.classList.add("no-pressed-button");
    this.button.style.fontSize = Math.round(this.lower / 35) + "px";
    this.button.style.width = Math.round(this.lower / 1.75) + "px";
    this.button.style.height = Math.round(this.lower / 7) + "px";
    this.button.style.top = Math.round(this.lower * 3.4 / 4) + "px";
    this.button.style.left = Math.round(this.lower * 0 / 6) + "px";
    this.button.style.borderRadius = Math.round(this.lower / 30) + "px";
    this.div.appendChild(this.button);

    this.button = document.createElement("button");
    this.button.setAttribute("id", "retryWinButton");
    this.button.setAttribute("onClick", `${detail}(${levelNum})`);
    this.button.innerHTML = "Retry";
    this.button.classList.add("no-pressed-button");
    this.button.style.fontSize = Math.round(this.lower / 35) + "px";
    this.button.style.width = Math.round(this.lower / 5) + "px";
    this.button.style.height = Math.round(this.lower / 7) + "px";
    this.button.style.top = Math.round(this.lower * 3.4 / 4) + "px";
    this.button.style.left = Math.round(this.lower * 3.5 / 6) + "px";
    this.button.style.borderRadius = Math.round(this.lower / 30) + "px";
    this.div.appendChild(this.button);

    this.audio = new Audio("Audios/youWon.mp3");

    this.button = document.createElement("button");
    this.button.setAttribute("id", "backButton");
    this.button.setAttribute("onClick", "levels()");
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
  }

  create() {
    document.addEventListener("event", this.wipe);
    this.body.appendChild(this.div);
    this.audio.play();
  }

  wipe() {
    this.div = document.getElementById("winDiv");
    if (this.div === undefined || this.div === null) { return; }
    this.div.remove();
    document.removeEventListener("event", this.wipe);
    Utils.destroy(this);
  }
}