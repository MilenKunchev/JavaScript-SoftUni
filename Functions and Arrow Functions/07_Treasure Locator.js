function treasureLocator(coordinates) {

    for (i = 0; i < coordinates.length; i += 2) {

        let x = coordinates[i];
        let y = coordinates[i + 1];

        let location = getLocation(x, y);

        console.log(location);
    }

    function getLocation(x, y) {

        // Tokelau location
        if (x <= 9 && x >= 8 && y <= 1 && y >= 0) return 'Tokelau';
        // Tuvalu location
        else if (x <= 3 && x >= 1 && y <= 3 && y >= 1) return 'Tuvalu';
        // Samoa location
        else if (x <= 7 && x >= 5 && y <= 6 && y >= 3) return 'Samoa';
        // Tonga location
        else if (x <= 2 && x >= 0 && y <= 8 && y >= 6) return 'Tonga';
        // Cook location
        else if (x <= 9 && x >= 4 && y <= 8 && y >= 7) return 'Cook';
        // On the bottom of the ocean
        else return 'On the bottom of the ocean';
    }

}

//treasureLocator([4, 2, 1.5, 6.5, 1, 3]);
//treasureLocator([6, 4]);
treasureLocator([0, 0, 9, 9, 8, 1, 2, 2, 6, 5, 2, 7, 5, 7, 3, 5]);