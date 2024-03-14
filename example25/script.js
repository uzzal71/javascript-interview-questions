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
