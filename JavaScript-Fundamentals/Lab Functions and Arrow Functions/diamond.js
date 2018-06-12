function diamond(count = 5) {
    function printStars(n) {

        console.log(" ".repeat((count - n) / 2) + "*".repeat(n));
    }

    for (let i = 1; i < count; i += 2) {
        printStars(i);
    }

    let difference = count % 2 === 0 ? 3 : 4;
    for (let i = count - difference; i >= 1; i -= 2) {
        printStars(i);

    }
}

diamond(19);