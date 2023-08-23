var keys = []
document.addEventListener("keydown",e=>{
  if(keys.indexOf(e.code) === -1){
    keys.unshift(e.code);
  }
});
document.addEventListener("keyup",e=>{
  if(keys.indexOf(e.code) > -1){
   keys.splice(keys.indexOf(e.code), 1);
  }
});
