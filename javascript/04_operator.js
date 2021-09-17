// Operator(연산자)

// 1. String concatenation
console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals:


,,,,,,
1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 1); // remailnder
console.log(2 ** 3); // exponentiation(제곱)

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; // counter = counter + 1; preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++; // postIncrement = counter; counter = counter + 1;
console.log(`postIncrement: ${preIncrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x / y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`or: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log(`i : ${i}`);
  }
  return true;
}

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// obejct equaluty by reference
const hisnext1 = { name: "hisnext" };
const hisnext2 = { name: "hisnext" };
const hisnext3 = hisnext1;
console.log(hisnext1 == hisnext2); // false
console.log(hisnext1 === hisnext2); // false
console.log(hisnext1 === hisnext3); // true

// equality - puzzler
console.log(`equality - puzzler`);
console.log(0 == false); // true;
console.log(0 === false); // false;
console.log("" == false); // true;
console.log("" === false); // false;
console.log(null == undefined); // true;
console.log(null === undefined); // false;
