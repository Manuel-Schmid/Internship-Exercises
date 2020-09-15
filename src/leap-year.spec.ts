import LeapYear from './leap-year';

describe('LeapYear', () => {
    it('Test if 2020 is Leapyear?', () => {
        const example = new LeapYear()
        const result = example.isLeapYear(2020);
        expect(result).toBeTruthy();
    }),
    it('Test if 2019 is Leapyear?', () => {
        const example = new LeapYear()
        const result = example.isLeapYear(2019);
        expect(result).toBeFalsy();
    }),
    it('Test if 400 is Leapyear?', () => {
        const example = new LeapYear()
        const result = example.isLeapYear(400);
        expect(result).toBeTruthy();
    })
});
