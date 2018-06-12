function diagonalAttack(arr) {
    let matrix = [];

    for (let i = 0; i < arr.length; i++) {
        matrix.push(arr[i].split(' ').map(Number));
    }

    let primaryDiagonalSum = 0;
    let secondaryDiagonaSum = 0;
    let rowLastIndex = matrix[0].length - 1;

    for (let i = 0; i <= rowLastIndex; i++) {

        primaryDiagonalSum += matrix[i][i];
        secondaryDiagonaSum += matrix[i][rowLastIndex - i];
    }

    if (primaryDiagonalSum === secondaryDiagonaSum) {
        for (let row = 0; row < matrix.length; row++) {

            for (let col = 0; col < matrix[row].length; col++) {

                if (row !== col && row !== matrix[row].length - 1 - col) {

                    matrix[row][col] = primaryDiagonalSum;
                }
            }
        }
    }

    for (let row of matrix) {
        console.log(`${row.join(' ')}`);
    }
}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);