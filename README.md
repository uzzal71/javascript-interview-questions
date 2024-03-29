# Javascript Jobs Interview Questions

### 👉 PROBLEM - 1:

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

### 👉 PROBLEM - 2:

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

### 👉 PROBLEM - 3:

How to resize an array?

```
// Resizing any array
let animals = ["🐕", "🐒", "🐈", "🐅"];

// We can use arrays length property
animals.length = 3;
console.log(animals);
```

### 👉 PROBLEM - 4:

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

### PROBLEM - 5:

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

### 👉 PROBLEM - 6:

How to replace all occurrences of a string?

```
// Replace all occurances of a string
const quote =
  "React is a JS framework & this framework is the most popular front-end framework right now";

// Replace all occurances of 'framework' with 'library'
console.log(quote.replace(/framework/g, "library")); // React is a JS library & this library is the most popular front-end library right now
```

### 👉 PROBLEM - 7:

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

### 👉 PROBLEM - 8:

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

### 👉 PROBLEM - 9:

How can we swap values?

```
// Swaping values
let array = [1, 2, 3, 4, 5];

// temp variable
let temp = array[0];
array[0] = array[4];
array[4] = temp;

console.log(array);
```

array destructuring

```
// array destructuring
[array[0], array[4]] = [array[4], array[0]];
console.log(array);
```

```
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b);
```

Math

```
b = a + (a = b) - b;
console.log(a, b);
```

### 👉 PROBLEM - 10:

How to copy things from clipboard

index.html

```
<h1>javaScript tips</h1>
<p id="text">Uzzal Kumar Roy</p>
<p><button id="copy" onclick="handleClick()">Copy</button></p>
<script src="./index.js"></script>
```

index.js

```
// Copy to clipboard
function copyToClipboard(str) {
  const element = document.createElement("textarea");
  element.value = str;
  document.body.appendChild(element);
  element.select();
  document.execCommand("copy");
  document.body.removeChild(element);
}

function handleClick() {
  let text = document.querySelector("#text");
  copyToClipboard(text.innerText);
}
```

### 👉 PROBLEM - 11:

Destructuring aliases

```
// Destructuring aliases

const language = {
  name: "JavaScript",
  founded: 1995,
  founder: "Brendan Eich",
};

const { name: languageName, founder: createrName } = language;

console.log(languageName, createrName);
```

### 👉 PROBLEM - 12:

Get value as data type

index.html

```
<h1>JavaScript Tips</h1>
<input type="number" value="123" id="number" />
<script src="./index.js"></script>
```

index.js

```
// Get value as data type
const element = document.querySelector("#number").valueAsNumber;

console.log(element);
```

### 👉 PROBLEM - 13:

Remove duplicate from array

```
// remove duplicate from array
const array = [1, 2, 2, 3, 4, 3, 4, 4, 5];
console.log([...new Set(array)]);
```

### 👉 PROBLEM - 14:

Compare two arrays by value

```
// Compare two arrays by values
const hasSameElements = (a, b) => {
  return a.length === b.length && a.every((v, i) => v === b[i]);
};
console.log(hasSameElements([1, 2, 3], [1, 2, 3]));
```

### 👉 PROBLEM - 15:

Shuffling an array

```
// Shuffling array
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.sort((number) => Math.random() - 0.5));
```

### 👉 PROBLEM - 16:

Using comma operator

```
// Comma operator
let x = 1;
x = (x++, x);

console.log(x);

y = (2, 3);
console.log(y);

let a = [[1, 2, 3, 4], [3, 4, 5], [5, 6], [7]];

for (let i = 0, j = 3; i <= 3; i++, j--) {
  console.log("a[" + i + "][" + j + "] = " + a[i][j]);
}
```

### 👉 PROBLEM - 17:

What will be the output of the below code?

```
// What will be the output of the below code?
console.log([] + []); // ""

console.log({} + []); // [object Object]

console.log(true + 1); // 2

console.log(String([])); // ""

```

### 👉 PROBLEM - 18:

What will be the output below code

```
function myFunction() {
  return "Bangladesh";
}

const string = myFunction`hello `; // passing function arguments for template literals
console.log(string); // Bangladesh
```

### 👉 PROBLEM - 19:

how to make all text contents of a website editable?

```
document.body.contentEditable = true;
```

### PROBLEM - 20:

what will be the output of below code?

```
function b(){
    console.log(`the length is ${this.length}`);
}

let a = {
    length: 10,
    method: function(b) {
        arguments[0]();
    }
};

a.method(b, 5); // the length is 2
```

### 👉 PROBLEM - 21:

what will be the output of below code?

```
const a = "constructor";
// String constructor arguments pass 01
console.log(a[a](01)); // "1"
```

### 👉 PROBLEM - 22:

What will be the output?

```
console.log(0.1 + 0.2); // 0.3000004
console.log(0.1 + 0.3); // 0.4
```

### 👉 PROBLEM - 23:

what will be the output of below code?

```
console.log(("Bangladesh").__proto__.__proto__.__proto__); // null
let b = new String("Bangladesh");
console.dir(b);
```

### 👉 PROBLEM - 24:

make a function that sorts its arguments without using loops

```
const myFunction = function () {
  return [].slice.call(arguments).sort();
};

console.log(myFunction(2, 1, 4, 3));
```

### 👉 PROBLEM - 25:

Debounce function

index.html

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Deboncing Tutorial</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <div class="container">
      <button type="button" id="button">Click Here</button>
    </div>

    <script src="./script.js"></script>
  </body>
</html>
```

style.css

```
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  width: 200px;
  height: 50px;
  outline: none;
  border: 0px;
  border-radius: 10px;
  background-color: black;
  color: #fff;
  font-size: 20px;
}
```

script.js

```
const button = document.getElementById("button");

// debounce handler
function debounce(fn, delay) {
  let timeroutId;
  return function () {
    if (timeroutId) {
      clearTimeout(timeroutId);
    }
    timeroutId = setTimeout(() => {
      fn();
    }, delay);
  };
}

button.addEventListener(
  "click",
  debounce(function () {
    console.log("clicked");
  }, 2000)
);
```

### 👉 PROBLEM - 26:

Count duplicate elements in an array

```
// count duplicate element in an array

// input
const fruits = ["🍇", "🥭", "🍍", "🍋", "🥭", "🥭", "🍇", "🍍"];

// output {"🍇": 2, "🥭": 3, "🍍": 2, "🍋": 1}

const countDuplicates = (data) => {
  const output = {};

  // logic here
  // use map or forEach
  data.forEach((d) => {
    output[d] = (output[d] || 0) + 1;
  });

  return output;
};

console.log(countDuplicates(fruits));
```

### 👉 PROBLEM 27:

Reverse words in a string

```
// reverse words in a string

// input
const str = "I love Bangladesh";

// output = "I evol hsedalgnaB";

const reverseWords = (data) => {
  const dataAsArray = data.split(" ");

  const result = dataAsArray.map((d) => {
    return d.split("").reverse().join("");
  });

  return result.join(" ");
};

console.log(reverseWords(str));
```

### 👉 PROBLEM 28:

Sorting words by length in a sentence

```
// sorting words by length in a sentence by asc order

// input
const str = "Java is a Programming language";

// output = " a is Java language Programming"

function sortWords(data) {
  const dataAsArray = data.split(" ");

  dataAsArray.sort((a, b) => a.length - b.length);

  return dataAsArray.join(" ");
}

console.log(sortWords(str));
```

### 👉 PROBLEM 29:

memoization in JavaScript

```
// memoization in javascript

function add(...x) {
  console.log(x);
  return x.reduce((sum, curValue) => sum + curValue, 0);
}

// higher order function
const memoization = (func) => {
  let cache = {};

  return function (...x) {
    const key = JSON.stringify(x);
    if (cache[key]) {
      console.log("result from cache");
      return cache[key];
    } else {
      console.log("calculation result");
      const result = func(...x);
      cache[key] = result;
      return result;
    }
  };
};

const calculate = memoization(add);

console.log(calculate(10, 20, 30, 50));
console.log(calculate(10, 20, 30, 50));
```

### 👉 PROBLEM 30:

Understanding Closure, Async-Await, and Scope

```
async function timer(n) {
  console.log("Start timer");

  for (var i = 0; i <= n; i++) { // let i = 0;
    console.log(i);
  }

  console.log("End timer");
}

timer(3);
```

```
function delay(i) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(i);
    }, i * 1000);
  });
}

async function timer(n) {
  console.log("Start timer");

  for (var i = 0; i <= n; i++) {
    const result = await delay(i);
    console.log(result);
  }

  console.log("End timer");
}

timer(3);

```

### 👉 PROBLEM 31:

Group by Object

```
require("core-js");

const languages = [
  { title: "JavaScript", type: "scripting" },
  { title: "Java", type: "normal" },
  { title: "Python", type: "scripting" },
];
console.log(
  "Languages\n",
  languages,
  "\n-----------------------------------------------"
);

let scriptingLanguages = {};

// way 1
// languages.forEach((language) => {
//     const type = language.type;

//     if (!scriptingLanguages[type]) {
//         scriptingLanguages[type] = [];
//     }
//     scriptingLanguages[type].push(language);
// });

// way 2
// scriptingLanguages = languages.reduce((res, language) => {
//     const type = language.type;
//     if (!res[type]) {
//         res[type] = [];
//     }
//     res[type].push(language);
//     return res;
// }, {});

scriptingLanguages = Object.groupBy(languages, (lang) => lang.type);
console.log(scriptingLanguages);

```

### 👉 PROBLEM 32:

JavaScript Event Delegation

index.html

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Event Delegation</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@400;600&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <div class="container">
      <h1>ইভেন্ট ডেলিগেশন কি?</h1>

      <p>
        একাধিক এলিমেন্টের জন্য
        <span class="highlight">একটাই ইভেন্ট লিসেনার রাখা</span> এবং
        <span class="highlight">নতুন এলিমেন্ট</span> যোগ করলেও যেন লিসেনার কাজ
        করে।
      </p>

      <div class="languages">
        <ul id="list">
          <li>জাভাস্ক্রিপ্ট</li>
          <li>পিএইচপি</li>
          <li>জাভা</li>
          <li>পাইথন</li>
          <li>টাইপস্ক্রিপ্ট</li>
        </ul>

        <div>
          <button onclick="addElement()">নতুন এলিমেন্ট যোগ করুন</button>
        </div>
      </div>
    </div>

    <script src="./script.js"></script>
  </body>
</html>

```

Style.css

```
* {
    font-family: "Anek Bangla", sans-serif;
}

.container {
    margin: 50px;
}

.languages {
    margin-top: 50px;
}

.highlight {
    background-color: aquamarine;
}

h1 {
    border-bottom: 1px solid gray;
}

ul {
    list-style-type: square;
}

li {
    margin-bottom: 10px;
}
```

script.js

```
const list = document.getElementById("list");

list.addEventListener("click", (e) => {
  if (e.target.matches("li")) {
    if (e.target.innerText === "জাভাস্ক্রিপ্ট") {
      e.target.style.backgroundColor = "yellow";
    } else {
      e.target.style.backgroundColor = "blue";
    }
  }
});

function addElement() {
  const newElement = document.createElement("li");
  newElement.textContent = "ডট নেট";
  list.appendChild(newElement);
}

```

### 👉 PROBLEM 33:

JavaScript Event Propagation - Bubbling vs Capturing

index.html

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Event Propagation</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
            href="https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@400;600&display=swap"
            rel="stylesheet"
        />
        <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
        <div class="container">
            <h1>ইভেন্ট প্রোপাগেশন কি?</h1>

            <div class="parent" id="parent">
                <form id="form">
                    <button type="button" id="button">Click here</button>
                </form>
            </div>
        </div>

        <script src="./script.js"></script>
    </body>
</html>
```

style.css

```
* {
    font-family: "Anek Bangla", sans-serif;
    color: whitesmoke;
    background-color: #212121;
}

.container {
    margin: 50px;
}

h1 {
    border-bottom: 1px solid gray;
}

.parent {
    margin-top: 30px;
    padding: 20px;
    border: 1px solid blueviolet;
    border-radius: 5px;
}

form {
    padding: 20px;
    border: 1px solid green;
    border-radius: 5px;
}
button {
    background-color: antiquewhite;
    border: 1px solid #333333;
    border-radius: 5px;
    padding: 6px 12px;
    box-shadow: 4px 4px #000000;
    font-size: 20px;
    color: #333333;
}
```

script.js

```
const parent = document.getElementById("parent");
const form = document.getElementById("form");
const button = document.getElementById("button");

parent.addEventListener("click", listener);

// event capturing or trickling
// form.addEventListener("click", listener, {
//   capture: true,
// });
form.addEventListener("click", listener, true);

button.addEventListener("click", listener);

function listener(event) {
  console.log(this.tagName);
  // event.currentTarget or this save
}


```

### 👉 PROBLEM 34:

JavaScript NaN Explained

```
const result = "Uzzal" / 5;
console.log(result); // NaN

const weired = NaN;
console.log(weired === weired); // false

const result1 = "Sujon" / 5;
const result2 = "Bad programmer" / 5;
console.log(result1 === result2); // false

const array = [NaN];
console.log(array.includes(NaN)); // true

// SameValueZero Algorithm
const sameValueZero = (a, b) => {
  if (a === b || (Number.isNaN(a) && Number.isNaN(b))) {
    return true;
  }
  return false;
};
```
