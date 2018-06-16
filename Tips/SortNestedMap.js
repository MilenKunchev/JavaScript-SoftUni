function travelTime(inputArr) {

    let travelData = new Map();

    for (let inputData of inputArr) {
        let [country, town, cost] = inputData.split(' > ');

        //country = startWithUpper(country);
        town = startWithUpper(town);
        cost = Number(cost);

        fillTravelData(travelData, country, town, cost);
    }

    // Sort countries (map by key) alphabetically
    let sorted = new Map([...travelData.entries()].sort());

    for (let [countries, towns] of sorted) {

        // Sort towns by value
        let sortedTowns = new Map([...towns.entries()].sort((a, b) => a[1] - b[1]));

        let townsStr = '';
        for (let [town, price] of sortedTowns) {

            townsStr += `${town} -> ${price} `;
        }
        console.log(`${countries} -> ${townsStr}`);
    }

    function startWithUpper(string) {
        let firstToUpper = string[0].toUpperCase();
        firstToUpper += string.slice(1);
        return firstToUpper;

    }

    function fillTravelData(travelData, country, town, cost) {
        // Add countries if don`t exist
        if (!travelData.has(country)) {
            travelData.set(country, new Map());
            travelData.get(country).set(town, cost);
        }

        else {
            // Add new town in existing country
            if (!travelData.get(country).has(town)) {
                travelData.get(country).set(town, cost);
            }
            // Country and town exist - check cost and keep the cheapest
            else {
                if (travelData.get(country).get(town) > cost) {
                    travelData.get(country).set(town, cost);
                }
            }
        }
    }

}

// travelTime([
//     "bulgaria > sofia > 500",
//     "Bulgaria > Sopot > 800",
//     "France > Paris > 2000",
//     "Albania > Tirana > 1000",
//     "Bulgaria > Ajtos > 200",
//     "bulgaria > burgas > 100"]
// );

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200" ]

);