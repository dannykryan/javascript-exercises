const palindromes = function (string) {
  var punctuation = /[\.,?!"\s]/g;

  var stringA = string.toLowerCase().replace(punctuation, "");

  var stringB = stringA.split("").reverse().join("");

  if (stringA == stringB) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
