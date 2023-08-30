const palindromes = function (string) {
  var punctuation = /[\.,?!"\s]/g;

  var stringA = string.toLowerCase().replace(punctuation, "");

  var stringB = stringA.split("").reverse().join("");

  return stringA === stringB;
};

// Do not edit below this line
module.exports = palindromes;
