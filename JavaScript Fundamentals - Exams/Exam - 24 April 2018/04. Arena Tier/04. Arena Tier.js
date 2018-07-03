function arenaTier(inputArr) {

    let gladiatorPool = new Map();
    let totalSkils = new Map();

    for (let inputStr of inputArr) {

        if (inputStr.includes('->')) {
            addGladiatorToPool(inputStr);
        }
        else if (inputStr.includes(' vs ')) {
            let gladiatorsExist = areGladiatorsExist(inputStr);
            if (gladiatorsExist) {
                fight(inputStr);
            }
        }
    }
    fillTotalSkills(gladiatorPool);
    totalSkils = sortMap(totalSkils);
    printResult();

    function addGladiatorToPool(inputStr) {

        let [name, technique, skill] = inputStr.split(' -> ');

        // Gladiator don`t exist
        if (!gladiatorPool.has(name)) {
            gladiatorPool.set(name, new Map());
            gladiatorPool.get(name).set(technique, Number(skill));
        }
        // Gladiator exist
        else {
            // technique don`t exist
            if (!gladiatorPool.get(name).has(technique)) {
                gladiatorPool.get(name).set(technique, Number(skill));
            }
            else {
                let currentSkill = Number(gladiatorPool.get(name).get(technique));
                if (currentSkill < skill) {
                    gladiatorPool.get(name).set(technique, Number(skill));
                }
            }
        }
    }

    function areGladiatorsExist(inputStr) {
        let [firstGladiator, secondGladiator] = inputStr.split(' vs ');
        return (gladiatorPool.has(firstGladiator) && gladiatorPool.has(secondGladiator));
    }

    function fight(inputStr) {
        let [firstGladiator, secondGladiator] = inputStr.split(' vs ');

        // Take arrays of gladiators techniques
        let firstGladiatorTechniques = [...gladiatorPool.get(firstGladiator).entries()].map(x => x[0]);
        let secondGladiatorTechniques = [...gladiatorPool.get(secondGladiator).entries()].map(x => x[0]);

        // Check gladiators if they got at least one in common technique
        let haveCommon = false;
        let commonTechniques = [];
        for (let technique of firstGladiatorTechniques) {
            if (secondGladiatorTechniques.includes(technique)) {
                haveCommon = true;
                commonTechniques.push(technique);
            }
        }

        if (haveCommon) {
            let technique = commonTechniques[0];
            let firstGladiatorSkill = gladiatorPool.get(firstGladiator).get(technique);
            let secondGladiatorSkill = gladiatorPool.get(secondGladiator).get(technique);

            if (firstGladiatorSkill < secondGladiatorSkill) {
                gladiatorPool.delete(firstGladiator);
            }
            else if (firstGladiatorSkill>secondGladiatorSkill) {
                gladiatorPool.delete(secondGladiator);
            }
            else{
                gladiatorPool.delete(firstGladiator);
                gladiatorPool.delete(secondGladiator);
            }
        }
    }

    function fillTotalSkills(gladiatorPool) {
        let gladiators = gladiatorPool.keys();

        for (let gladiator of gladiators) {
            let totalSkill = Array.from(gladiatorPool.get(gladiator).values()).map(x => Number(x)).reduce((a, b) => a + b);
            totalSkils.set(gladiator, totalSkill);
        }
    }

    function sortMap(totalSkills) {

        let sorted = new Map([...totalSkills].sort(compare));
        return sorted;

        function compare(a, b) {
            if (a[1] > b[1]) {
                return -1;
            }
            else if (a[1] < b[1]) {
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

    function printResult() {

        for (let gladiator of [...totalSkils]) {
            console.log(`${gladiator[0]}: ${gladiator[1]} skill`);

            let techniques = gladiatorPool.get(gladiator[0]);
            techniques = sortMap(techniques);
            for (let i = 0; i < [...techniques].length; i++) {
                console.log(`- ${[...techniques][i][0]} <!> ${[...techniques][i][1]}`);
            }
        }


    }
}

arenaTier([
     'Pesho -> Drack -> 900'
    , 'Pesho -> Drack -> 1000'
    , 'Gosho -> Drack -> 800'
    , 'Pesho vs Gosho'
    , 'Ave Cesar'
]);
// arenaTier([
//     'Pesho -> Duck -> 400'
//     , 'Pesho -> Shield -> 400'
//     , 'Zoltar -> Shield -> 150'
//     , 'Julius -> Shield -> 150'
//     , 'Gladius -> Heal -> 200'
//     , 'Acto -> Heal -> 200'
//     , 'Abtu -> Heal -> 200'
//     , 'Gladius -> Support -> 250'
//     , 'Gladius -> Shield -> 250'
//     , 'Gladius -> Shield -> 100'
//     , 'Gladius -> Duck -> 100'
//     , 'Pesho vs Gladius'
//     , 'Gladius vs Gosho'
//     , 'Gladius vs Gosho'
//     , 'Ave Cesar'
// ]);
// arenaTier([
//     'Pesho -> Duck -> 400'
//     , 'Julius -> Shield -> 150'
//     , 'Gladius -> Heal -> 200'
//     , 'Gladius -> Support -> 250'
//     , 'Gladius -> Shield -> 250'
//     , 'Pesho vs Gladius'
//     , 'Gladius vs Julius'
//     , 'Gladius vs Gosho'
//     , 'Ave Cesar'
// ]);
