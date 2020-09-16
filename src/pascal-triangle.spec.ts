import PascalTriangle from './pascal-triangle';

describe ('PascalTriangle', () => {
    it("Test generate a Pascal Triangle with 2 rows", () => {
        const example = new PascalTriangle()
        const result = example.generateTriangle(2);
        expect(result).toEqual([
            [1],
            [1, 1],
          ]);
    }),
    it("Test generate a Pascal Triangle with 4 rows", () => {
        const example = new PascalTriangle()
        const result = example.generateTriangle(4);
        expect(result).toEqual([
            [1],
            [1, 1],
            [1, 2, 1],
            [1, 3, 3, 1]
          ]);
    }),
    it("Test generate a Pascal Triangle with 5 rows", () => {
        const example = new PascalTriangle()
        const result = example.generateTriangle(5);
        expect(result).toEqual([
            [1],
            [1, 1],
            [1, 2, 1],
            [1, 3, 3, 1],
            [1, 4, 6, 4, 1]
          ]);
    })
    /* ,
    it("Test get generate last row of a Pascal Triangle with 4 rows", () => {
        const example = new PascalTriangle()
        const result = example.generateLastRow(4);
        expect(result).toEqual([
            [1, 3, 3, 1]
          ]);
    })     */
}); 