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
