function lastKNums(n, k) {

    function sumArray(arr) {
        let sum = 0;
        for (let num of arr) {
            sum += num;
        }

        return sum;
    }

    let arr = [1];

    for (let i = 1; i < n; i++) {

        let sum = 0;
        let nextNums = arr.slice(-k);
        sum = sumArray(nextNums);

        arr.push(sum);
    }
    console.log(arr.join(' '));
}

lastKNums(6, 3);
lastKNums(8, 2);