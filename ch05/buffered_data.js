//create
buf256 = new Buffer(256);
bufOctets = new Buffer([0x6f, 0x63, 0x74, 0x65, 0x74, 0x73]);
bufUTF8 = new Buffer("Some UTF8 Text \u00b6 \u30c6 \u20ac", 'utf8');

//length
console.log(Buffer.byteLength("UTF8 text \u00b6", 'utf8'));
console.log("UTF8 text \u00b6".length);
console.log(Buffer("UTF8 text \u00b6").length);

//copy
var blank = new Buffer(26);
var dashes = new Buffer('-------------------------');
var alphabet = new Buffer('abcdefghijklmnopqrstuvwxyz');
console.log(alphabet.toString());
console.log(dashes.toString());
alphabet.copy(blank);
alphabet.copy(dashes, 10, 10, 15);
console.log(alphabet.toString());
console.log(blank.toString());
console.log(dashes.toString());

//slice
var numbers = new Buffer("123456789");
console.log(numbers.toString());
var slice = numbers.slice(3, 6);
console.log(slice.toString());
slice[0] = '#'.charCodeAt(0);
slice[slice.length-1] = '#'.charCodeAt(0);
console.log(numbers.toString());

//concat
var af = new Buffer("African Swallow?");
var eu = new Buffer("European Swallow?");
var question = new Buffer("Air Speed Velocity of an ");
console.log(Buffer.concat([question, af]).toString());
console.log(Buffer.concat([question, eu]).toString());
