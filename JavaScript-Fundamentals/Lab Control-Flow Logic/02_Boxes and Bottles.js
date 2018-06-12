function calculateBoxesCount(bottlesCount, boxCapacity) {

    if (bottlesCount <= boxCapacity) {

        return 1;

    } else {

        let boxesCount = bottlesCount / boxCapacity;

        if (Number.isInteger(boxesCount)) {

            return boxesCount;

        } else {

            return (boxesCount | 0) + 1;
        }
    }

}

console.log(calculateBoxesCount(5, 10));