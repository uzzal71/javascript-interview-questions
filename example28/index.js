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
