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
