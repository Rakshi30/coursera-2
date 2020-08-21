(function(window){
var byspeaker={};
byspeaker.speakWord="Good Bye";
byspeaker.speak=function(name) {
  console.log(speakWord + " " + name);
window.byspeaker=byspeaker;
}
})(window);
