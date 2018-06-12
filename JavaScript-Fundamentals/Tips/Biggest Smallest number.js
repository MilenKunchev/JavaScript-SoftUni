function biggestSmallestNumber(arr) {

    let biggestNum = Number.NEGATIVE_INFINITY;
    let smallestNum = Number.POSITIVE_INFINITY;

    arr.forEach(e => biggestNum = Math.max(biggestNum, e));
    arr.forEach(e => smallestNum = Math.min(smallestNum, e));

    console.log(`The biggest num is ${biggestNum}`);
    console.log(`The smallest num is ${smallestNum}`);

}

biggestSmallestNumber([1, 2, 3, 4, 5, 6, 7, -8, 5, 3, 2, 1]);