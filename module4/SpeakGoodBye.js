(function(window){
var byspeaker={};
var speakWord="Good Bye";
byspeaker.speak=function speak(name) {
  console.log(speakWord + " " + name);
};
window.byspeaker=byspeaker;
})(window);
