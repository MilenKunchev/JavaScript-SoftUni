function solve(inputData, battlesData) {
    let kingdoms = new Map();
    let totalResults = new Map();

    for (let obj of inputData) {
        storeKingdomsInformation(obj);
    }

    for (let battle of battlesData) {
        fight(battle);
    }

    let sortedKingdoms = sortKingdoms();

    printResults();

    function storeKingdomsInformation(obj) {
        let kingdomName = obj.kingdom;
        let generalName = obj.general;
        let armyCount = obj.army;
        // Set new kingdom and general
        if (!kingdoms.has(kingdomName)) {
            kingdoms.set(kingdomName, new Map());
            kingdoms.get(kingdomName).set(generalName, {army: armyCount, wins: 0, losses: 0});
            // Set kingdom for total wins and losses.
            totalResults.set(kingdomName, {wins: 0, losses: 0});
        }
        // Set new general in existing kingdom
        else if (!kingdoms.get(kingdomName).has(generalName)) {
            kingdoms.get(kingdomName).set(generalName, {army: armyCount, wins: 0, losses: 0});
        }
        // Add army to existing general in existing kingdom
        else if (kingdoms.get(kingdomName).has(generalName)) {

            let existingArmy = kingdoms.get(kingdomName).get(generalName).army;
            armyCount += existingArmy;
            kingdoms.get(kingdomName).get(generalName).army = armyCount;
        }
    }

    function fight(battle) {
        let [attackingKingdom, attackingGeneral, defendingKingdom, defendingGeneral] = battle;

        // Check is kingdoms and generals exist, and attacking kingdon is not defending kingdom.
        let oponentsExist = checkKingdomAndGeneral(attackingKingdom, attackingGeneral)
            && checkKingdomAndGeneral(defendingKingdom, defendingGeneral) && attackingKingdom !== defendingKingdom;

        if (oponentsExist) {
            let attackingArmy = kingdoms.get(attackingKingdom).get(attackingGeneral).army;
            let defendingArmy = kingdoms.get(defendingKingdom).get(defendingGeneral).army;

            // Defending army win
            if (attackingArmy < defendingArmy) {
                // New armies
                attackingArmy = Math.floor(attackingArmy - attackingArmy * 0.1);
                defendingArmy = Math.floor(defendingArmy + defendingArmy * 0.1);
                // Wins and losses counter for current general
                kingdoms.get(attackingKingdom).get(attackingGeneral).losses++;
                kingdoms.get(defendingKingdom).get(defendingGeneral).wins++;
                // Wins and losses counter for kingdoms
                totalResults.get(attackingKingdom).losses++;
                totalResults.get(defendingKingdom).wins++;
            }
            // attacking army win
            else if (attackingArmy > defendingArmy) {
                // New armies
                attackingArmy = Math.floor(attackingArmy + attackingArmy * 0.1);
                defendingArmy = Math.floor(defendingArmy - defendingArmy * 0.1);
                // Wins and losses counter for current general
                kingdoms.get(attackingKingdom).get(attackingGeneral).wins++;
                kingdoms.get(defendingKingdom).get(defendingGeneral).losses++;
                // Wins and losses counter for kingdoms
                totalResults.get(attackingKingdom).wins++;
                totalResults.get(defendingKingdom).losses++;
            }
            // Add new armies to kingddoms info.
            kingdoms.get(attackingKingdom).get(attackingGeneral).army = attackingArmy;
            kingdoms.get(defendingKingdom).get(defendingGeneral).army = defendingArmy;
        }

        function checkKingdomAndGeneral(kingdom, general) {
            if (kingdoms.has(kingdom)) {
                if (kingdoms.get(kingdom).has(general)) {
                    return true;
                }
                else {
                    return false;
                }
            }
            return false;
        }
    }

    function sortKingdoms() {

        let sorted = new Map([...totalResults].sort(compare));
        return sorted;

        function compare(a, b) {
            if (a[1].wins > b[1].wins) {
                return -1;
            }
            else if (a[1].wins < b[1].wins) {
                return 1;
            }
            else {
                if (a[1].losses < b[1].losses) {
                    return -1;
                }
                else if (a[1].losses > b[1].losses) {
                    return 1;
                }
                else {
                    if (a[0] < b[0]) {
                        return -1;
                    }
                    else if (a[0] > b[0]) {
                        return 1;
                    }
                    else {

                        return 0;
                    }
                }
            }

        }
    }

    function compareArmies(a, b) {
        if (a[1].army > b[1].army) {
            return -1;
        }
        else if (a[1].army < b[1].army) {
            return 1;
        }
        else {
            return 0;
        }
    }

    function printResults() {
        let winner = [...sortedKingdoms][0][0];
        console.log(`Winner: ${winner}`);
        let generals = [...kingdoms.get(winner)].sort(compareArmies);
        for (let general of generals) {
            console.log(`/\\general: ${general[0]}`);
            console.log(`---army: ${general[1].army}`);
            console.log(`---wins: ${general[1].wins}`);
            console.log(`---losses: ${general[1].losses}`);

        }
    }
}

solve([ { kingdom: "Stonegate", general: "Ulric", army: 5000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 5000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 1000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Maiden Way", "Berinon", "YorkenShire", "Quinn"] ]

);
