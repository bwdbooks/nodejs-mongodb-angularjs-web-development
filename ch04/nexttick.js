var fs = require("fs");
fs.stat("nexttick.js", function(err, stats){
  if(stats) { console.log("nexttick.js Exists"); }
});
setImmediate(function(){
  console.log("Immediate Timer 1 Executed");
});
setImmediate(function(){
  console.log("Immediate Timer 2 Executed");
});
process.nextTick(function(){
  console.log("Next Tick 1 Executed");
});
process.nextTick(function(){
  console.log("Next Tick 2 Executed");
});