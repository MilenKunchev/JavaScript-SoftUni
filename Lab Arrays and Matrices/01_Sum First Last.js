function sum(arr) {

    let result = Number(arr[0]) + Number(arr[arr.length - 1]);
    return result;
}

console.log(sum([1, 2, 3, 4]));
console.log(sum(['7.7', '2', '3', '4']));