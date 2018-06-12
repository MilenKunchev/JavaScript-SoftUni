function magicmatrice(matrix) {

    function rowSum(row) {
        return row.reduce((sum, e) => sum += e);
    }

    function colSum(matrix, col) {
        let colSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            colSum += matrix[row][col];
        }
        return colSum;
    }

    let sum = rowSum(matrix[0]);

    for (let i = 0; i < matrix.length; i++) {

        if (sum !== rowSum(matrix[i])) {
            return false;
        }
        if (sum !== colSum(matrix, i)) {
            return false
        }
    }
    return true;
}

console.log(magicmatrice([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));

console.log(magicmatrice([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
));

console.log(magicmatrice([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
));