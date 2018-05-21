function biggestElement(matrix) {

    let biggestElement = Number.NEGATIVE_INFINITY;

    for (let row of matrix) {
        for (let col of row) {

            if (col > biggestElement) {
                biggestElement = col;
            }
        }
    }
    console.log(biggestElement);
}

biggestElement([[20, 50, 10],
    [8, 33, 145]]);

biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
);