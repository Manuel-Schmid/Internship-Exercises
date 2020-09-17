import Matrix from './matrix';

describe ('Matrix', () => {
    it("Test rows of a matrix", () => {
        const example = new Matrix()
        const result = example.getRows('1 2 3\n4 5 6\n7 8 9');
        expect(result).toEqual([  
              [1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]
            ]);
    }),
    it("Test columns of a matrix", () => {
        const example = new Matrix()
        const result = example.getColumns('1 2 3\n4 5 6\n7 8 9');
        expect(result).toEqual([       
              [1, 4, 7],
              [2, 5, 8],
              [3, 6, 9]
            ]);
    }),
    it("Test columns of a matrix2", () => {
        const example = new Matrix()
        const result = example.getColumns('1 2 3 4\n5 6 7 8');
        expect(result).toEqual([       
              [1, 5],
              [2, 6],
              [3, 7],
              [4, 8]
            ]);
    }),
    it("Test columns of a matrix2", () => {
        const example = new Matrix()
        const result = example.getRows('1 2 3 4\n5 6 7 8');
        expect(result).toEqual([       
              [1, 2, 3, 4],
              [5, 6, 7, 8]
            ]);
    }),
    it("Test columns of a matrix3", () => {
        const example = new Matrix()
        const result = example.getRows('1 2 3 4');
        expect(result).toEqual([       
              [1, 2, 3, 4]
            ]);
    }),
    it("Test columns of a matrix3", () => {
        const example = new Matrix()
        const result = example.getColumns('1 2 3 4');
        expect(result).toEqual([       
              [1],
              [2],
              [3],
              [4]
            ]);
        })
}); 