const substitutionModule = require("../src/substitution.js");
const expect = require("chai").expect;

describe("substitution", ()=>{
    it("Returns false if the given alphabet isn't exactly 26 characters long.", ()=>{
      const actual = substitutionModule.substitution('abc', 'bcadefghijklmnopqrstuvwxy');
      expect(actual).to.be.false;
    });
    it("Correctly translates the given phrase, based on the alphabet given to the function.", ()=>{
      const actual = substitutionModule.substitution('abc', 'bcadefghijklmnopqrstuvwxyz');
      const expected = 'bca';
      expect(actual).to.equal(expected);
    });
    it("Returns false if there are any duplicate characters in the given alphabet.", ()=>{
      const actual = substitutionModule.substitution('abc', 'bcadefghijklmnopqrstuvwxzz');
      expect(actual).to.be.false;
    });
    it("Maintains spaces in the message, before and after encoding or decoding.", ()=>{
      const actualEncode = substitutionModule.substitution('a b c', 'zyxwvutsrqponmlkjihgfedcba');
      const expectedEncode = 'z y x';
      const actualDecode = substitutionModule.substitution('z y x', 'zyxwvutsrqponmlkjihgfedcba', false);
      const expectedDecode = 'a b c';
      expect(actualEncode).to.equal(expectedEncode);
      expect(actualDecode).to.equal(expectedDecode);
    });
    it("Ignores capital letters.", ()=>{
      const actual = substitutionModule.substitution('ABC', 'bcadefghijklmnopqrstuvwxyz');
      const expected = 'bca';
      expect(actual).to.equal(expected);
    });
});
