const polybiusModule = require("../src/polybius.js");
const expect = require("chai").expect;

describe("polybius", ()=>{
    it("When encoding, it translates the letters i and j to 42.", ()=>{
      const actualI = polybiusModule.polybius('i');
      const actualJ = polybiusModule.polybius('j');
      const expected = '42';
      expect(actualI).to.equal(expected);
      expect(actualJ).to.equal(expected);
      
    });
    it("When decoding, it translates 42 to (i/j).", ()=>{
      const actual = polybiusModule.polybius('42', false);
      const expected = 'i/j';
      expect(actual).to.equal(expected);
    });
    it("Ignores capital letters.", ()=>{
      const actual = polybiusModule.polybius('Dog');
      const expected = '414322';
      expect(actual).to.equal(expected);
    });
    it("Maintains spaces in the message, before and after encoding or decoding.", ()=>{
      const actual = polybiusModule.polybius('my dog');
      const actualDecode = polybiusModule.polybius('2345 23513434112251', false);
      const expected = '2345 414322';
      const expectedDecode = 'my message';
      expect(actual).to.equal(expected);
      expect(actualDecode).to.equal(expectedDecode);
    });
});
