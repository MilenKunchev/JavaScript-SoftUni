function smallestTwoNums(arr) {

    return arr
        .sort((a, b) => a - b)
        .slice(0, 2)
        .join(' ');

}

console.log(smallestTwoNums([3, 3, 30, 15, 50, 5]));