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

### PROBLEM - 3:

How to resize an array?

### PROBLEM - 4:

How to flatten a multidimensional array?

### PROBLEM - 4:

How to use short conditions?

### PROBLEM - 6:

How to replace all occurrences of a string?

### PROBLEM - 7:

How to log variable with values properly?

### PROBLEM - 8:

How to calculate performance of a task/operation?
