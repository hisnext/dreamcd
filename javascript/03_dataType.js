// 1. Use Strict
// added in ES 5
// use this for Valina Javascript.
"use strict";

// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = "global name";
{
  let name = "lee";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName);
}
//console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope 블럭 밖에서도 호출 된다.
{
  age = 4;
  console.log(age);
  var age;
}
console.log(age);

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note !
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes


// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, Nan, ''
// true: any other value

// null
let noting = null;
console.log(`value: ${noting}, type: ${typeof noting}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique indentifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true
// console.log(`value: ${gSymbol1}, type: ${typeof gSymbol1}`); // error
console.log(`value: ${gSymbol1.description}, type: ${typeof gSymbol1}`);

// object, real-life object, data structure
const ellie = { name: "ellie", age: 20 };

// 5. Dynamic typing: dynamically typed language
let text = "hello";
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / 2;
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0)); // error
