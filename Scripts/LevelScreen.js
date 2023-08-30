class LevelScreen{
  constructor(){
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.lower = Math.min(this.width, this.height);
    this.higher = Math.max(this.width, this.height);

    this.div = document.createElement("div"); 
    this.div.setAttribute("id","levelDiv");
    this.div.style.width = this.lower + "px";
    this.div.style.height = this.lower + "px";
    this.div.style.top = (this.higher - this.width)/2 + "px";
    this.div.style.left = (this.higher - this.height)/2 + "px";

    this.image = new Image;
    this.image.src = "Images/TitleScreen.png";
    this.image.width = this.lower;
    this.image.height = this.lower;
    this.image.setAttribute("id","levelImage");
    this.div.appendChild(this.image);

    for(var i = 0; i < 4; i++){
      for(var j = 0; j < 4; j++){
        this.button = document.createElement("button");
        this.button.setAttribute("id","levelButton" + i*4 + j);
        this.button.setAttribute("onClick",`challenge(${i*4 + j+1})`);
        this.button.innerHTML = `Level ${i*4 +j+1}`;
        this.button.classList.add("no-pressed-button");
        this.button.style.fontSize     = Math.round(this.lower / 35)         + "px";
        this.button.style.width        = Math.round(this.lower/4)            + "px";
        this.button.style.height       = Math.round(this.lower / 7)          + "px";
        this.button.style.top          = Math.round(this.lower *(1+0.6*i)/4) + "px";
        this.button.style.left         = Math.round((this.lower*j/4))        + "px";
        this.button.style.borderRadius = Math.round(this.lower / 30)         + "px";
        this.div.appendChild(this.button);
      }
    }

    this.button = document.createElement("button");
    this.button.setAttribute("id","backButton" + i);
    this.button.setAttribute("onClick","titles()");
    this.button.innerHTML = "Back";
    this.button.classList.add("no-pressed-button");
    this.button.style.fontSize     = Math.round(this.lower / 35)      + "px";
    this.button.style.width        = Math.round(this.lower / 5)       + "px";
    this.button.style.height       = Math.round(this.lower / 7)       + "px";
    this.button.style.top          = Math.round(this.lower *3.4 / 4)  + "px";
    this.button.style.left         = Math.round(this.lower *4.75 / 6) + "px";
    this.button.style.borderRadius = Math.round(this.lower / 30)      + "px";
    this.div.appendChild(this.button);
    this.body = document.getElementById("body");
  }

  create(){
    this.body.appendChild(this.div);
    document.addEventListener("event",this.wipe);
  }
  
  wipe(){
    this.div = document.getElementById("levelDiv");
    if(this.div === undefined || this.div === null){return;}
    this.div.remove();
    document.removeEventListener("event",this.wipe);
    Utils.destroy(this);
  }
}