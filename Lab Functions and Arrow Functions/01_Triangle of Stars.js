function printTriangle(count = 5) {

    for (let i = 1; i <= count; i++) {
        printStars(i);
    }
    for (i = count - 1; i >= 0; i--) {
        printStars(i);
    }

    function printStars(n) {
        console.log('*'.repeat(n));
    }
}

printTriangle(10);