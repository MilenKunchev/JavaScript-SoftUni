function solve(sofiaArr, forces) {

    let sofiaMap = fillMatrix(sofiaArr);
    let pollutedAreas = [];

    for (let element of forces) {
        let [force, value] = element.split(' ');
        value = Number(value);
        switch (force) {
            case 'breeze':
                sofiaMap = breeze(sofiaMap, value);
                break;
            case 'gale':
                sofiaMap = gale(sofiaMap, value);
                break;
            case 'smog':
                sofiaMap = smog(sofiaMap, value);
                break;

        }
    }

    pollutedAreas = poluttionCheck(sofiaMap, pollutedAreas);

    if (pollutedAreas[0] === undefined) {
        console.log('No polluted areas');
    } else {

        console.log(`Polluted areas: ${pollutedAreas.join(', ')}`);
    }

    function fillMatrix(sofiaArr) {

        let sofiaMap = [];
        for (str of sofiaArr) {
            let row = str.split(' ').map(a => Number(a));
            sofiaMap.push(row)
        }
        return sofiaMap;
    }

    function breeze(sofiaMap, value) {
        let pm = 15;
        for (let i = 0; i < 5; i++) {
            if (sofiaMap[value][i] - pm > 0) {
                sofiaMap[value][i] -= pm;
            }
        }
        return sofiaMap;
    }

    function gale(sofiaMap, value) {
        let pm = 20;
        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 5; col++) {
                if (col === value && (sofiaMap[row][col] - pm) > 0) {
                    sofiaMap[row][col] -= pm;
                }
            }
        }
        return sofiaMap;
    }

    function smog(sofiaMap, value) {
        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 5; col++) {
                sofiaMap[row][col] += value;
            }
        }
        return sofiaMap;
    }

    function poluttionCheck(sofiaMap, pollutedAreas) {
        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 5; col++) {
                if (sofiaMap[row][col] >= 50) {
                    let pollutedZone = `[${row}-${col}]`;
                    pollutedAreas.push(pollutedZone);
                }
            }
        }
        return pollutedAreas;
    }
}

solve([
        "5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24",
    ],
    ["breeze 1", "gale 2", "smog 25"]
);
solve([
        "5 7 3 28 32",
        "41 12 49 30 33",
        "3 16 20 42 12",
        "2 20 10 39 14",
        "7 34 4 27 24",
    ],
    [
        "smog 11", "gale 3",
        "breeze 1", "smog 2"
    ]
);