removeFromArray = (array, unwanted, unwanted2, unwanted3, unwanted4) => {
    const filtered = array.filter((number) => {
       return number !== unwanted && number !== unwanted2 && number !== unwanted3 && number !== unwanted4
    });
  
    return filtered;
  };


  

// Do not edit below this line
module.exports = removeFromArray;
