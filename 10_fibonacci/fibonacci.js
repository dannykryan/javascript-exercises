const fibonacci = function (y) {
  var fib = [
    1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584,
    4181, 6765, 10946, 17711, 28657, 46368, 75025,
  ];

  var x = parseInt(y);

  if (x > 0) {
    xFib = x <= 1 ? 1 : fib[x - 1];
    return xFib;
  } else {
    return "OOPS";
  }
};

// SOLUTION OFFERED BY THE ODIN PROJECT:
// THIS IMPROVED SOLUTION WILL ALLOW FOR ANY NUMBER TO BE FED IN

// const fibonnaci = function(count) {
//     if (count < 0) return 'OOPS';
//     if (count === 0) return 0;

//     let firstPrev = 1
//     let secondPrev = 0

//     for (let i = 2; i <= count; i++) {
//         let current = firstPrev + secondPrev;
//         secondPrev = firstPrev;
//         firstPrev = current;
//     }

//     return firstPrev;
// }

// Do not edit below this line
module.exports = fibonacci;
