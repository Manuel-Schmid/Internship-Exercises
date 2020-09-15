import CountWords from './count-words';

describe ('CountWords', () => {
    it("Test If an array of words will show the right number of them", () => {
        const example = new CountWords()
        const result = example.numberOfWords('one fish two fish red fish blue fish');
        expect(result).toEqual({one: 1, fish: 4, two: 1, red: 1, blue: 1});
    })
}); 