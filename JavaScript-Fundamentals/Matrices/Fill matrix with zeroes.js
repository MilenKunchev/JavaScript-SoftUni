function fillMatrix(rows, cols, elements) {
    let matrix = [];
    for (let i = 0; i < cols; i++) {
        matrix[i] = new Array(cols).fill(0);
    }

    printMatrix(matrix);

    console.log('-----------');

    function printMatrix(matrix) {
        for (let row of matrix) {
            console.log(row.join(' '));
        }
    }

    return matrix;
}
console.log(fillMatrix(5, 5, 0));