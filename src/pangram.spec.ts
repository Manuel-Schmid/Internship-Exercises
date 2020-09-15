import Pangram from './pangram';

describe('Pangram', () => {
    it("Test If 'The quick brown fox jumps over the lazy dog'  is pangram?", () => {
        const example = new Pangram()
        const result = example.isPangram('The quick brown fox jumps over the lazy dog');
        expect(result).toBeTruthy();
    }),
    it("Test If 'The Quick brown fox jumps over the lazy dog'  is pangram?", () => {
        const example = new Pangram()
        const result = example.isPangram('The Quick brown fox jumps over the lazy dog');
        expect(result).toBeTruthy();
    }),
    it("Test If 'Hello World'  is pangram?", () => {
        const example = new Pangram()
        const result = example.isPangram('Hello World');
        expect(result).toBeFalsy();
    })
});
