var af = new Buffer("African Swallow?");
var eu = new Buffer("European Swallow?");
var question = new Buffer("Air Speed Velocity of an ");
console.log(Buffer.concat([question, af]).toString());
console.log(Buffer.concat([question, eu]).toString());