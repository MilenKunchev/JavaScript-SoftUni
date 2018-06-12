function roadRadar(input) {
    let [speed, zone] = input;

    let limit = getLimit(zone);

    console.log(getInfracton(speed, limit));

    function getInfracton(speed, limit) {

        let overSpeed = speed - limit;

        if (overSpeed <= 0) return '';
        if (overSpeed > 0 && overSpeed <= 20) return 'speeding';
        if (overSpeed > 20 && overSpeed <= 40) return 'excessive speeding';
        if (overSpeed > 40) return 'reckless driving';

    }

    function getLimit(zone) {
        switch (zone) {
            case'motorway':
                return 130;
            case'interstate':
                return 90;
            case'city':
                return 50;
            case'residential':
                return 20;
        }
    }

}


roadRadar([40, 'city']);
roadRadar([21, 'residential']);
roadRadar([120, 'interstate']);
roadRadar([200, 'motorway']);