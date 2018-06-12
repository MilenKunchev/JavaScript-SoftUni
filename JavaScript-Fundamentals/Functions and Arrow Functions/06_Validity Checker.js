function validityChecker(points) {

    let [x1, y1, x2, y2] = points;

    checkValidity(x1, 0, y1, 0);
    checkValidity(x2, 0, y2, 0);
    checkValidity(x1, x2, y1, y2);


    function checkValidity(x1, x2, y1, y2) {

        let xPow = Math.pow((x1 - x2), 2);
        let yPow = Math.pow((y1 - y2), 2);

        let distance = Math.sqrt(xPow + yPow);

        let validity = distance % 1 === 0 ? 'valid' : 'invalid';

        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${validity}`)
    }
}

validityChecker([3, 0, 0, 4]);
validityChecker([2, 1, 1, 1]);
validityChecker([9, 7, 3, 2]);