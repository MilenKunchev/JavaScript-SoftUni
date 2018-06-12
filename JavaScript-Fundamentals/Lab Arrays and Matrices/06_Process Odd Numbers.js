function processOddNumbers(arr) {

    let oddPositionElements = [];

    for (let pos in arr) {

        if (pos % 2 !== 0) {

            let element = arr[pos];
            oddPositionElements.unshift(element * 2);
        }
    }
    console.log(oddPositionElements.join(' '));
}


processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);