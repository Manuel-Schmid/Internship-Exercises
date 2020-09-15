import PrimeNumbers from './prime-numbers';

describe ('PrimeNumbers', () => {
    it("Test If 3 is a Prime Number", () => {
        const example = new PrimeNumbers()
        const result = example.isPrimeNumber(3);
        expect(result).toBeTruthy();
    }),
    it("Test If 13 is a Prime Number", () => {
        const example = new PrimeNumbers()
        const result = example.isPrimeNumber(13);
        expect(result).toBeTruthy();
    }),
    it("Test If 15 is a Prime Number", () => {
        const example = new PrimeNumbers()
        const result = example.isPrimeNumber(15);
        expect(result).toBeFalsy();
    })
}); 