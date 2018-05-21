function equalNeighbors(matrix) {

    let equalsNighbors = 0;

    for (let r = 0; r < matrix.length - 1; r++) {

        for (let c = 0; c < matrix[r].length; c++) {

            if (matrix[r][c] === matrix[r + 1][c]) {

                equalsNighbors += 1;
            }

            if (matrix[r][c] === matrix[r][c + 1]) {

                equalsNighbors += 1;
            }

            if (r === matrix.length - 2) {
                if (matrix[r + 1][c] === matrix[r + 1][c + 1]) {
                    equalsNighbors += 1;
                }
            }
        }
    }
    return equalsNighbors;
}

console.log(equalNeighbors([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
));
console.log(equalNeighbors([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
));

console.log(equalNeighbors([[2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]
));