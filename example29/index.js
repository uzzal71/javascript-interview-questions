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
