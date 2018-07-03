function sortMap() {

    // Fill map with string keys and int values
    let map = new Map([['abcd', 8], ['azc', 9], ['adc', 7],['alc',8]]);
    let textMap = new Map([['d', 'a'], ['c', 'a'], ['a', 'b'],['b','c']]);

    // sort map by values descending order then by keys descending order
    let sorted = new Map([...map].sort(compare));
    let sortedText = new Map([...textMap].sort(compare));


    console.log(sorted);
    console.log(sortedText);

    function compare(a, b) {
        // Order by values
        if (a[1] > b[1]) {
            return -1; // Ascending order 1 or change '>' with '<'
        }
        else if (a[1] < b[1]) {
            return 1; // Ascending order -1 ...
        }
        // Order by keys
        else {
            if (a < b) {
                return -1;
            }
            else if (a > b) {
                return 1;
            }
            else {
                return 0;
            }
        }
    }
}

sortMap();