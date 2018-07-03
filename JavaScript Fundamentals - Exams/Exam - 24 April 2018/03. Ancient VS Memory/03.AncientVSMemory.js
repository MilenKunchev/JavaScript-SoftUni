function ancientVsMemory(inputArr) {

    let str = concatStrings(inputArr);
    let results = [];

    str = str.slice(str.indexOf('32656 19759 32763'));

    let arr = str.split(/32656\s+19759\s+32763/g);
    for (let i = 1; i < arr.length; i++) {

        results.push(findString(arr[i]));
    }

    console.log(results.join('\n'));


    function concatStrings(inputArr) {
        let result = '';
        for (let i = 0; i < inputArr.length; i++) {
            result += inputArr[i];
            if (i < inputArr.length - 1) {
                result += ' ';
            }
        }
        let arr = result.split(/\s+/g);

        return arr.join(' ');
    }

    function findString(currentStr) {

        let arr = currentStr.trim().split(' ');
        let end = Number(arr[1]) + 3;
        let charCodes = arr.slice(3, end);

        return charCodes.map(x => String.fromCharCode(x)).join('');

    }


}
// ancientVsMemory(['32656 19759 32763 0 5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 0 0'
//      , '0 32656 19759 32763 0 7 0 83 111 102 116 117 110 105 0 0 0 0 0 0 0 0']);
// ancientVsMemory(['0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0'
//     , '5 0 71 111 115 104 111 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 4 0'
//     , '75 105 114 111 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 8 0 86 101'
//     , '114 111 110 105 107 97 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0']);
ancientVsMemory(['0 0 0 0 32656 19759 32763 0 5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 0 0']);