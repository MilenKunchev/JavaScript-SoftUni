function dnaHelix(length) {

    let counter = 1;
    let index = 0;
    let symbols = ['A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G'];
    let starsCount = 2;
    let dashesCount = 0;

    while (counter <= length) {

        let symbol1 = symbols[index];
        let symbol2 = symbols[index + 1];

        if (counter % 4 === 1) {
            starsCount = 2;
            dashesCount = 0;
        }
        if (counter % 4 === 2) {
            starsCount = 1;
            dashesCount = 2;
        }
        if (counter % 4 === 3) {
            starsCount = 0;
            dashesCount = 4;
        }
        if (counter % 4 === 0) {
            starsCount = 1;
            dashesCount = 2;
        }

        console.log(`${'*'.repeat(starsCount)}${symbol1}${'-'.repeat(dashesCount)}${symbol2}${'*'.repeat(starsCount)}`);

        counter++;
        index = (index + 2 < symbols.length) ? index += 2 : 0;
    }
}

//dnaHelix(4);
//dnaHelix(10);
dnaHelix(15);