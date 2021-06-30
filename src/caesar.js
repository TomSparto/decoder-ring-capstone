// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    let result = "";
    //return false if shift is not a valid value.
    if (shift === 0 || shift < -25 || shift > 25 || !shift) {
      return false;
    }
    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    for (let i = 0; i < input.length; i++) {
      //store each character of input into a variable.
      const character = input[i].toLowerCase(); // input = dog; character = d
      //adds any characters that are not included in the alphabet to the result in sequence.
      if (!alphabet.includes(character)) {
        result += character;
      }
      //need to find the index of character in the alphabet array.
      const foundIndex = alphabet.findIndex((letter) => {
        return letter === character;
      });
      //if index is found in the alphabet array then apply the shift
      if (foundIndex !== -1) {
        //declare shiftedIndex variable
        let shiftedIndex = null;
        //determines if we are encoding or decoding
        if(encode === false){
          shiftedIndex = foundIndex - shift;
        } else{
           shiftedIndex = foundIndex + shift;
        }
        //handles the shift that goes past the end or beginning of the alphabet
        if (shiftedIndex > 25) {
          shiftedIndex -= 26;
        } else if (shiftedIndex < 0) {
          shiftedIndex += 26;
        }
        const newLetter = alphabet[shiftedIndex]; 
        result += newLetter;
      }
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
