bufUTF8 = new Buffer("Some UTF8 Text \u00b6 \u30c6 \u20ac", 'utf8');
console.log(bufUTF8.toString());
console.log(bufUTF8.toString('utf8', 5, 9));
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');
console.log(decoder.write(bufUTF8));
console.log(bufUTF8[18].toString(16));
console.log(bufUTF8.readUInt32BE(18).toString(16));