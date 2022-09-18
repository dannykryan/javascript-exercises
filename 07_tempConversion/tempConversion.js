const ftoc = function(f) {
  var result = (( f - 32 ) / 1.8 )
  var rounded = Math.round(result * 10) /10;
  return rounded;
};

const ctof = function(c) {
  var result = ((c * 1.8) + 32 )
  var rounded = Math.round(result * 10) /10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
