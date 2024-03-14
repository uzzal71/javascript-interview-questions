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
