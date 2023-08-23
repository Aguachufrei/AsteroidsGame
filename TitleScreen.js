class TitleScreen{
  constructor(){
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.lower = Math.min(this.width, this.height);
    this.higher = Math.max(this.width, this.height);
    this.body = document.getElementById("body");

    this.div = document.createElement("div"); 
    this.div.setAttribute("id","titleDiv");
    this.div.style.width = this.lower + "px";
    this.div.style.height = this.lower + "px";
    this.div.style.top = (this.higher - this.width)/2 + "px";
    this.div.style.left = (this.higher - this.height)/2 + "px";

    this.image = new Image;
    this.image.src = "Images/TitleScreen.png";
    this.image.width = this.lower;
    this.image.height = this.lower;
    this.image.setAttribute("id","titleImage");
    this.div.appendChild(this.image);

    this.buttonAmount = 5
    this.buttonText = ["Play!","Survival","Multiplayer","Sandbox","Settings"];
    this.buttonAtributes = ["levels();","survival()","alert('no disponible')","sandbox()","settings()"];
    for(var i = 0; i < this.buttonAmount; i++){
      this.button = document.createElement("button");
      this.button.setAttribute("id","titleButton" + i);
      this.button.setAttribute("onClick",this.buttonAtributes[i]);
      this.button.innerHTML = this.buttonText[i];
      this.button.classList.add("no-pressed-button");
      this.button.style.fontSize     = Math.round(this.lower / 35)                  + "px";
      this.button.style.width        = Math.round(this.lower/this.buttonAmount)     + "px";
      this.button.style.height       = Math.round(this.lower / 7)                   + "px";
      this.button.style.top          = Math.round(this.lower *2.8/4)                + "px";
      this.button.style.left         = Math.round(i*(this.lower/this.buttonAmount)) + "px";
      this.button.style.borderRadius = Math.round(this.lower / 30)                  + "px";
      this.div.appendChild(this.button);
    }
  }

  create(){
    document.addEventListener("event",this.wipe);
    this.body.appendChild(this.div);
  }
  wipe(){
    this.div = document.getElementById("titleDiv");
    if(this.div === undefined || this.div === null){return;}
    this.div.remove();
    document.removeEventListener("event",this.wipe);
    Utils.destroy(this);
  }
}