function populationInTown(inputData) {

    let register = new Map();

    for (let townData of inputData) {

        let [town, pop] = (townData.split(' <-> '));

        if (register.has(town)) {
            register.set(town, register.get(town) + Number(pop));
        } else {
            register.set(town, Number(pop));
        }
    }
    [...register].forEach(([town, pop]) => console.log(`${town} : ${pop}`));
}

console.log(populationInTown(
    ['Sofia <-> 1200000'
        , 'Montana <-> 20000'
        , 'Montana <-> 20000'
        , 'New York <-> 10000000'
        , 'Washington <-> 2345000'
        , 'Las Vegas <-> 1000000'
    ]));