// 8. Conditional operators: if
// if, else if, else
const name = "ellie";
if (name === "ellie") {
  console.log("A");
} else if (name === "coder") {
  console.log("B");
} else {
  console.log("C");
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === "ellie" ? "yes" : "no");

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const brower = "Chrome";
switch (brower) {
  case "IE":
    console.log("IE");
    break;
  case "Chrome":
  case "Firefox":
    console.log("Chrome or Firefox");
    break;
  default:
    console.log("other");
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}
console.log(`while last: ${i}`);

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);
console.log(`do while last: ${i}`);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline vareable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (i = 0; i < 10; i++) {
  for (j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// break, continue
// Q1. interate from 0 to 10 and print only even numbers (use continue)

// Q2. interate from 0 to 10 and print numbers until reaching 8 (use break)