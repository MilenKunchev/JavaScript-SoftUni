function figureOf4Squares(n) {

    let rows = n % 2 === 0 ? n - 1 : n;
    let cols = 2 * n - 1;

    let dashesCount = (cols - 3) / 2;
    let midleLinePosition = Math.round(rows / 2);


    let element = '';

    let plusLine = "+" + "-".repeat(dashesCount) + "+" + "-".repeat(dashesCount) + "+";
    let spaceLine = "|" + " ".repeat(dashesCount) + "|" + " ".repeat(dashesCount) + "|";

    for (let i = 1; i < rows; i++) {

        if (i === 1 || i === midleLinePosition || i === rows) {

            element += plusLine + "\n";
        } else {
            element += spaceLine + "\n";
        }
    }

    element += plusLine + "\n";

    console.log(element);
}

figureOf4Squares(4);