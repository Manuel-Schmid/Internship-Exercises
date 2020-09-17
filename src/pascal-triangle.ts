class PascalTriangle {
    
    generateTriangle = function(rows: number) {
        let pTriangle = new Array(rows); 
        for(let i = 0; i < rows; i++){
            let row = new Array(i + 1);
            row[0] = 1;//Every row starts with 1
            row[row.length - 1] = 1; //Every row ends with 1
            for (let z = 1; z < row.length - 1; z++) { //starts at 1 and ends at "length - 1" because the first and last are already fixed to be 1
                let prevRow = pTriangle[i-1]
                row[z] = prevRow[z] + prevRow[z - 1];
            }
            pTriangle[i] = row;
        }
        return pTriangle;
    }

     generateLastRow(rows: number){
        let triangle = this.generateTriangle(rows);
        return triangle[triangle.length - 1];
    } 
}
export default PascalTriangle; 
