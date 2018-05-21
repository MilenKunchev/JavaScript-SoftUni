function increasingSubsequence(arr) {

    let result = [Number.NEGATIVE_INFINITY];
    //arr = arr.map(Number);

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] >= result[result.length - 1]) {

            result.push(arr[i]);
        }
    }
    result.shift();
    return result.join('\n');
}

console.log(increasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(increasingSubsequence([87, 88, 91, 10, 22, 9, 92, 94, 33, 21, 50, 41, 60, 80]));
console.log(increasingSubsequence(['20', '3', '2', '15', '6', '1']));