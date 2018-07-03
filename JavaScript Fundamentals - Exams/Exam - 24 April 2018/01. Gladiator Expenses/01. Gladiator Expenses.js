function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let expenses = 0;

    let brokenHelmet = false;
    let brokenSword = false;
    let brokenShieldCounter = 0;

    for (let lost = 1; lost <= lostFights; lost++) {

        // Broken Helmet
        if (lost % 2 === 0) {
            expenses += helmetPrice;
            brokenHelmet = true;
        }
        // Broken sword
        if (lost % 3 === 0) {
            expenses += swordPrice;
            brokenSword = true;
        }
        // Broken shield
        if (brokenHelmet && brokenSword) {
            expenses += shieldPrice;
            brokenShieldCounter++;
        }
        // Broken armor
        if (brokenShieldCounter % 2 === 0 && brokenShieldCounter !== 0) {
            expenses += armorPrice;
        }
        brokenHelmet = false;
        brokenSword = false;
        if (brokenShieldCounter===2){
            brokenShieldCounter=0;
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23,12.50,21.50,40,200);