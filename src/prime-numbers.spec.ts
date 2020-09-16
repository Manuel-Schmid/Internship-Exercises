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
    }),
    it("Test Primes from 1 - 14", () => {
        const example = new PrimeNumbers()
        const result = example.primesInRange(14);
        expect(result).toEqual([2,3,5,7,11,13]);
    }),
    it("Test Filter Primes from 1 - 100", () => {
        const example = new PrimeNumbers()
        const result = example.primesInRange2(100);
        expect(result).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
    })
}); 