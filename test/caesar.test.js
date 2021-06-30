const caesarModule = require("../src/caesar.js");
const expect = require("chai").expect;

describe("caesar", ()=>{
    it("Returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.", ()=>{
        const zero = caesarModule.caesar('dog', 0);
        const lessThan = caesarModule.caesar('dog', -26);
        const greaterThan = caesarModule.caesar('dog', 26);
        const notPresent = caesarModule.caesar('dog');
        expect(zero).to.be.false;
        expect(lessThan).to.be.false;
        expect(greaterThan).to.be.false;
        expect(notPresent).to.be.false;
    });
    it("Ignores capital letters.", ()=>{
        const actual = caesarModule.caesar('Dog', 1);
        const expected = 'eph';
        expect(actual).to.equal(expected);
    });
    it("When encoding, it handles shifts that go past the end of the alphabet.", ()=>{
        const actual = caesarModule.caesar('zebra', 1);
        const expected = 'afcsb';
        expect(actual).to.equal(expected);
    });
    it("Maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.", ()=>{
        const actual = caesarModule.caesar('say hi', 1);
        const expected = 'tbz ij';
        expect(actual).to.equal(expected);
    });
});