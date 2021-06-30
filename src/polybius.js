// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    //create a variable that stores the polybius square
    const polybiusSquare = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "i/j", "k"],
      ["l", "m", "n", "o", "p"], //dog = 414322
      ["q", "r", "s", "t", "u"], //my message = 2345 23513434112251
      ["v", "w", "x", "y", "z"],
    ]; 
    //create result variable
    let result = "";
    if (encode === true) { //run this block of code if encoding
      for (let i = 0; i < input.length; i++) { //looping input
        const character = input[i].toLowerCase(); //assigning each character to a variable and making it lowercase
        let firstIndex = null; //first index variable
        let secondIndex = null; //second index variable
        if (character === "i" || character === "j") { //resolves if character is i or j
          firstIndex = 1; //setting first index for i and j
          secondIndex = 3; //setting second index for i and j
          result += secondIndex + 1; //adding first part of number pair to result for i and j
          result += firstIndex + 1; //adding second part of number pair to result for i and j
        } else { //if character does not equal i or j
          firstIndex = polybiusSquare.findIndex((letterArr) => { //set first index equal to the first sub array that includes the character variable
            return letterArr.includes(character);
          });
          if (polybiusSquare[firstIndex] === undefined) { //if first index was not found then we need to add unfound character to result string
            result += character;
          } else { //since character was found in the polybiusSquare array then we will continue searching
            secondIndex = polybiusSquare[firstIndex].findIndex((letter) => { //assign second index by finding the letter that matches the character inside polybiusSquare[firstIndex]
              return character === letter;
            });
            result += secondIndex + 1; //adding first part of number pair to result for character
            result += firstIndex + 1; //adding second part of number pair to result for character
          }
        }
      }
      return result; //returns result of encoding process
    } else { //this assumes that encoding = false
      for (let i = 0; i < input.length; i++) { //looping input
        let secondIndex = null; //initialize secondIndex
        let firstIndex = null; //initialize firstIndex
        secondIndex = input[i] - 1; //assign secondIndex to character at i index and then subtracting 1 so that I have a real index value
        if (secondIndex === -1) { //if second index is not a number then it will push that character to result
          result += input[i];
        } else { //otherwise continue gathering data
          i++; //increment i
          firstIndex = input[i] - 1; //assing firstIndex to new input of i, subracting 1 to get a working index value
          if (polybiusSquare[firstIndex] === undefined) { //accounting for an odd numbered input returning false
            return false;
          }
          result += polybiusSquare[firstIndex][secondIndex]; //using the discovered firstIndex and secondIndex to find the characters for each pair and putting them into result;
        }
      }
      return result; //returns final result for decoding
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
