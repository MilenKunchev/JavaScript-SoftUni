function reduce(matrix) {

    let arr = matrix.reduce((row1,row2)=>row1.concat(row2));

    return arr;

}

console.log(reduce([[1, 2, 3, 4],
    [5, 6, 7, 8],
    [8, 7, 6, 5]
]));