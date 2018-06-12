function solve(rows, cols) {

    let matrix = createZeroFillMatrix(rows, cols);

    matrix = fillMatrix(matrix, rows, cols);

    printMatrix(matrix);

    function createZeroFillMatrix(rows, cols) {
        let matrix = [];

        for (let i = 0; i < cols; i++) {
            matrix[i] = new Array(cols).fill(0);
        }
        return matrix;
    }

    function fillMatrix(matrix, rows, cols) {

        let x = 0;
        let y = 0;
        let stop = rows * cols;
        let num = 1;
        let endY = rows;
        let endX = cols;

        while (num <= stop) {

            [matrix, x, y, num] = fillToRight(matrix, x, y, num);
            y++;

            [matrix, x, y, num] = fillToDown(matrix, x, y, num);
            x--;


            [matrix, x, y, num] = fillToLeft(matrix, x, y, num);
            y--;

            [matrix, x, y, num] = fillToUp(matrix, x, y, num);
            x++;

            //console.log(`x=${x} y=${y} num=${num} endX=${endX} endY=${endY}`);
        }

        return matrix;

        function fillToRight(matrix, x, y, num) {

            while (x !== endX && y !== endY && matrix[y][x] === 0) {
                matrix[y][x] = num;
                num++;
                x++;
            }
            return [matrix, x - 1, y, num];
        }

        function fillToDown(matrix, x, y, num) {
            while (x !== endX && y !== endY && matrix[y][x] === 0) {
                matrix[y][x] = num;
                num++;
                y++;
            }
            return [matrix, x, y - 1, num];
        }

        function fillToLeft(matrix, x, y, num) {
            while (x !== endX && y !== endY && matrix[y][x] === 0) {
                matrix[y][x] = num;
                num++;
                x--;
            }
            return [matrix, x + 1, y, num];
        }

        function fillToUp(matrix, x, y, num) {
            while (x !== endX && y !== endY && matrix[y][x] === 0) {
                matrix[y][x] = num;
                num++;
                y--;
            }
            return [matrix, x, y + 1, num];
        }
    }

    function printMatrix(matrix) {
        for (let row of matrix) {
            console.log(`${row.join(' ')}`);
        }
    }
}

//solve(3, 3);
solve(5, 5);
//solve(6, 6);