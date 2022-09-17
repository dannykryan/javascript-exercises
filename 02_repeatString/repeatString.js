const repeatString = function(string, num) {
    if (num > 0) {
        return string.repeat(num);
    }
    else if (num == 0) {
        return "";
    }
    else {
        return "ERROR";
    }
};



// const repeatString = function(string, num) {
//     var repeatedString = "";
//     while (num > 0) {
//         repeatedString += string;
//         num--;
//     }
//     return repeatedString;
// };


// Do not edit below this line
module.exports = repeatString;
