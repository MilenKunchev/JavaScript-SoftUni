function diagonalSums(matrix) {

    let rowLastIndex = matrix[0].length - 1;
    let sumLeft = 0;
    let sumRight = 0;

    for (let i = 0; i <= rowLastIndex; i++) {

        sumLeft += matrix[i][i];
        sumRight += matrix[i][rowLastIndex - i];
    }
    return (`${sumLeft} ${sumRight}`);
}

console.log(diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
));

console.log(diagonalSums([[20, 40],
    [10, 60]]
));