// Remove falsy values from any array
// 6 falsy values: false, 0, null, undefined, '', NaN

let miscellaneous = [
  "🍎",
  false,
  "🍌",
  NaN,
  0,
  undefined,
  "🍇",
  null,
  "",
  "🥭",
];
// passing Boolean to array.filter() will remove falsy values from
let fruits = miscellaneous.filter(Boolean);
console.log(fruits);
