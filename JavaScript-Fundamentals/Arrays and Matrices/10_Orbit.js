function fillMatrix(arr) {

    let [rows,cols,x,y] = arr;

    let matrix = createZeroFillMatrix(rows, cols);

    fillMatrix(matrix, x, y);
    printMatrix(matrix);

    function createZeroFillMatrix(rows, cols) {
        let matrix = [];
        for (let i = 0; i < cols; i++) {
            matrix[i] = new Array(cols).fill(0);
        }
        return matrix;
    }

    function fillMatrix(matrirx, row, col) {
        let num = 1;
        let cellsToFill = 0;

        fillCell(matrix, row, col, num); // fill start cell

        while (!isMatrixFull(matrix)) {
            row--;
            col--;
            num++;
            cellsToFill += 2;

            for (let i = 0; i < cellsToFill; i++) {
                if (isInRange(rows, row, col)) fillCell(matrix, row, col, num);
                col++;
            }
            for (let i = 0; i < cellsToFill; i++) {
                if (isInRange(rows, row, col)) fillCell(matrix, row, col, num);
                row++;
            }
            for (let i = 0; i < cellsToFill; i++) {
                if (isInRange(rows, row, col)) fillCell(matrix, row, col, num);
                col--;
            }
            for (let i = 0; i < cellsToFill; i++) {
                if (isInRange(rows, row, col)) fillCell(matrix, row, col, num);
                row--;
            }
        }

        function fillCell(matrix, row, col, num) {
            for (let i = 0; i < 2; i++) {
                matrix[row][col] = num;

            }
            return matrix;
        }
    }

    function isMatrixFull(matrix) {
        for (let row of matrix) {
            for (num of row) {

                if (num === 0) {
                    return false;
                }
            }
        }
        return true;
    }

    function isInRange(rows, row, col) {
        let endOfMatrix = rows - 1;
        if (row > endOfMatrix || col > endOfMatrix || row < 0 || col < 0) {
            return false
        }
        return true;
    }

    function printMatrix(matrix) {
        for (let row of matrix) {
            console.log(row.join(' '));
        }

    }
}

//fillMatrix(5, 5, 0, 0);
//fillMatrix(7, 7, 3, 3);
//fillMatrix(3, 3, 1, 1);
//fillMatrix(5, 5, 3, 3);
fillMatrix([5, 5, 4, 4]);