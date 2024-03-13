# Javascript Jobs Interview Questions

### PROBLEM - 1:

How to remove falsy values from an array?

```
// Remove falsy values from any array
// 6 falsy values: false, 0, null, undefined, '', NaN

let miscellaneous = ["🍎",false,"🍌",NaN,0,undefined,"🍇",null,"","🥭"];
// passing Boolean to array.filter() will remove falsy values from
let fruits = miscellaneous.filter(Boolean);
console.log(fruits);
```

Explanation

```
// Boolean(expression) in JS returns true/falsy
Boolean(5 < 6); // true
Boolean(100 > 200); // false
Boolean("JavaScript"); // true
Boolean(""); // false

// array example
let miscellaneous = ["🍎", false, "🥭"];
let fruits = miscellaneous.filter(Boolean);
console.log(fruits);

```

```
// array example
let miscellaneous = ["🍎", false, "🥭"];
let fruits = miscellaneous.filter(function (element) {
 return element;
});
console.log(fruits);
```

### PROBLEM - 2:

Convert any value to boolean?

```
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
```

### PROBLEM - 3:

How to resize an array?

```
// Resizing any array
let animals = ["🐕", "🐒", "🐈", "🐅"];

// We can use arrays length property
animals.length = 3;
console.log(animals);
```

### PROBLEM - 4:

How to flatten a multidimensional array?

```
// How to flatten a multi-dimensional array
let smileys = ["🥰", ["😄", "😃"], "😉", ["🥲", "😑"]];

// We can use array.flat() method to flatten one leve array
console.log(smileys.flat());

// Multi level array
let smileys2 = ["🥰", ["😄", "😃", ["🥲", "😑"]], "😉"];

// We can pass 'Infinity' parameter to array.flat function
console.log(smileys2.flat(Infinity));
```

### PROBLEM - 4:

How to use short conditions?

```
// Short conditionals
const captain = "Mashrafi";

// Instead of doing this
if(captain === "Mashrafi") {
    console.log("❤️");
}

// We can use &&
captain === "Mashrafi" && console.log("❤️");

// And instead of doing this
if(captain !== "Mashrafi") {
    console.log("😡");
}

// We can use ||
captain === "Mashrafi" || console.log("😡");
```

### PROBLEM - 6:

How to replace all occurrences of a string?

```
// Replace all occurances of a string
const quote =
  "React is a JS framework & this framework is the most popular front-end framework right now";

// Replace all occurances of 'framework' with 'library'
console.log(quote.replace(/framework/g, "library")); // React is a JS library & this library is the most popular front-end library right now
```

### PROBLEM - 7:

How to log variable with values properly?

```
// Log values with variable names smartly
const library1 = "jQuery";
const library2 = "React";

// Instead of doing this
console.log(`library1 - ${library1}`); // library1 - jQuery
console.log(`library2 - ${library2}`); // library2 - React

// We can do this
console.log({ library1 }); // {library1: 'jQuery'}
console.log({ library2 }); // {library2: 'React'}
```

### PROBLEM - 8:

How to calculate performance of a task/operation?

```
// Know performance of a task
// We can wrap our task with performance.now()

const startTime = performance.now();

for (let i = 0; i <= 50; i++) {
  console.log(i);
}

const endTime = performance.now();

console.log(`loop took ${endTime - startTime} milliseconds to finish`);
```

### PROBLEM - 9:

How can we swap values?

### PROBLEM - 10:

How to copy things from clipboard

### PROBLEM - 11:

Destructuring aliases

### PROBLEM - 12:

Get value as data type

### PROBLEM - 13:

Remove duplicate from array

### PROBLEM - 14:

Compare two arrays by value

### PROBLEM - 15:

Shuffling an array

### PROBLEM - 16:

Using comma operator
