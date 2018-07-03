function sortNestedArray() {

    // Fill map with nested array
    let nestedArr = new Map([["abbb", [9, 5, 3, 7, 1]], ["aab", ['b', 'z', 'a', 'c', 'd']]
        , ["aac", [9, 0, 3, 7, 1]], ["aaa", [8, 5, 9, 8, 0]]]);

    // Sort array
    let sortedArr = new Map([...nestedArr].sort(arrSort));
    // Sort map
    let sortedMap = new Map([...sortedArr].sort(compare));
    // Print sorted Map with nested sorted arrays
    console.log(sortedMap);

    function arrSort(a, b) {
        //console.log(a);
        //console.log(a[1]);
        return a[1].sort(compare) - b[1].sort(compare);
    }

    function compare(a, b) {

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

sortNestedArray();