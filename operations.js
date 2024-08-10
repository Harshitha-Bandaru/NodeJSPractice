const addNumbers = require("./add_num");
const { fancy_me, fancy_num } = require("./fancy_number");
const { multiply, sub } = require("./cal");
var a = 2;
var b = 3;
const s = addNumbers(2, 3);
console.log("sum", s);
console.log("fancy_me", fancy_me);
console.log("fancy_num", fancy_num(2));
console.log("module.exports", module.exports);
// so, you can export like this also
module.exports.x = 3;

// imported from folder
console.log("mul", multiply(2, 3));
console.log("sub", sub(3, 2));
