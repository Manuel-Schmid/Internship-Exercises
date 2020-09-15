import Anagram from './anagram';

describe ('Anagram', () => {
    it("Test If google, inlets and banana are Anagrams of listen", () => {
        const example = new Anagram()
        const result = example.isAnagram('listen', ['google', 'inlets', 'banana']);
        expect(result).toEqual(['inlets']);
    }),
    it("Test If fox, rock and gentle are Anagrams of evil", () => {
        const example = new Anagram()
        const result = example.isAnagram('evil', ['rock', 'gentle', 'fox']);
        expect(result).toEqual([]);
    }),
    it("Test If fox, ofx and rock are Anagrams of xof", () => {
        const example = new Anagram()
        const result = example.isAnagram('xof', ['ofx', 'rock', 'fox']);
        expect(result).toEqual(['ofx', 'fox']);
    })
});