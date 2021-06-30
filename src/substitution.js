// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    //returns false if the length of alphabet is not exactly 26
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }
    //returns false if there is a duplicate character
    for (let character of alphabet) {
      if (alphabet.split(character).length - 1 > 1) {
        return false;
      }
    }
    //normal alphabet to compare to key
    const normalAlph = "abcdefghijklmnopqrstuvwxyz";
    //final result variable
    let result = "";
    for (let character of input) {
      //account for spacing or strange characters
      if (!alphabet.includes(character.toLowerCase())) {
        result += character;
      } else {
        let foundIndex = null;
        //if encode else decode
        if (encode === true) {
          foundIndex = normalAlph.indexOf(character.toLowerCase());
          result += alphabet[foundIndex];
        } else {
          foundIndex = alphabet.indexOf(character.toLowerCase());
          result += normalAlph[foundIndex];
        }
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
