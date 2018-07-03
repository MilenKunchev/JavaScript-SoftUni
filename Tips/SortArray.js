function arrSort(arr) {

    let nums = [3, 4, 1, 6, 2, 7, 5, 9, 10, 21, 101];
    let words = ['gama', 'tita', 'beta', 'alfa', 'aalfa', 'zzzetta'];

    // Descending
    nums.sort((a, b) => b - a);
    console.log(nums);

    // Ascending
    nums.sort((a, b) => a - b);
    console.log(nums);
    words.sort();
    console.log(words);

    console.log('-'.repeat(40));

    nums.sort(compareDescendnig);
    words.sort(compareDescendnig);
    console.log(nums);
    console.log(words);

    nums.sort(compareAscending);
    words.sort(compareAscending);
    console.log(nums);
    console.log(words);


    // Descending
    function compareDescendnig(b, a) {
        if (a.length < b.length) {
            return -1;
        }
        else if (a.length > b.length) {
            return 1;
        }
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

    function compareAscending(a, b) {
        if (a.length < b.length) {
            return -1;
        }
        else if (a.length > b.length) {
            return 1;
        }
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

arrSort();