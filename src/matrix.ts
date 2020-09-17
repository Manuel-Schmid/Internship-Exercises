class Matrix {

    getRows(matrix: String){
        let matrixArr: number[][] = [];
        let lines = matrix.split('\n')
        matrixArr = lines.map(function(matrixItem) {
            return matrixItem.split(' ').map(function(matrixElement){
                return parseInt(matrixElement);
            })
        })

        return matrixArr;
    }

    getColumns(matrix2: String){
        let matrixRows = this.getRows(matrix2);
       
        let columns: number[][] = [];
        let numColumns = matrixRows[0].length;
        for (let j = 0; j < numColumns; j++) {
            columns.push([]);
        }
        
        for (let i = 0; i < matrixRows.length; i++) {
            let row = matrixRows[i];
            for (let j = 0; j < row.length; j++) {
                columns[j].push(row[j]);
            }
        }
        
        return columns;
    }   


}
export default Matrix;