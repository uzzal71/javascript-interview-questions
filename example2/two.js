// convert any value to boolean

console.log(!!"sujon"); // true
console.log(!!""); // false
console.log(!!0); // false
console.log(!!NaN); // false
console.log(!!undefined); // false
console.log(!!null); // false
console.log(!!1); // true

// we can also use Boolean() to achieve save
console.log(Boolean("sujon")); // true
console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(1)); // true
