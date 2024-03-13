// Boolean(expression) in JS returns true/falsy
Boolean(5 < 6); // true
Boolean(100 > 200); // false
Boolean("JavaScript"); // true
Boolean(""); // false

// array example
let miscellaneous = ["🍎", false, "🥭"];
let fruits = miscellaneous.filter(function (element) {
  return element;
});
console.log(fruits);
