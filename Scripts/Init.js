var titleVar;
var levelVar;
var levelNum;
var game;
var winVar;
var loseVar;
var settingVar; 
var emitEvent;
var currentLevel = 1;

(function(){
  titles();
})();
function titles(){
  emitEvent = new CustomEvent("event");
  document.dispatchEvent(emitEvent);
  titleVar = new TitleScreen();
  titleVar.create();
}
function levels(){
  emitEvent = new CustomEvent("event");
  document.dispatchEvent(emitEvent);
  levelVar = new LevelScreen();
  levelVar.create();
}
function win(detail){
  emitEvent = new CustomEvent("event");
  document.dispatchEvent(emitEvent);
  winVar = new WinScreen(detail);
  winVar.create();
}
function lose(detail){
  var emitEvent = new CustomEvent("event");
  document.dispatchEvent(emitEvent);
  loseVar = new LoseScreen(detail);
  loseVar.create();
}
function settings(){
  emitEvent = new CustomEvent("event");
  document.dispatchEvent(emitEvent);
  settingVar = new SettingsScreen();
  settingVar.create();
}
function survival(){
  emitEvent = new CustomEvent("event");
  document.dispatchEvent(emitEvent);
    game = new Game({
      type: "survival",
    },
  )
  game.create();
  game.draw();
}
function challenge(lvl){
  emitEvent = new CustomEvent("event");
  document.dispatchEvent(emitEvent);
  levelNum = lvl;
  //if(lvl>currentLevel){alert("Debes haber completado los niveles anteriores para poder jugar a este nivel.");return;}
    game = new Game({
      type:"challenge",
      level: lvl,
    },
  )
  game.create();
  game.draw();
}
function sandbox(){
  emitEvent = new CustomEvent("event");
  document.dispatchEvent(emitEvent);
  var game = new Game({
    type:"sandbox",
  })
  game.create();
  game.draw();
}
