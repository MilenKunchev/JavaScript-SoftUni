function calculate(a, b, op) {

    function doIt(a, b, operation) {

        return (operation(a, b));

    }

    let add = function (a, b) {

        return (a + b);
    };
    let subtract = function (a, b) {

        return (a - b);
    };
    let multiply = function (a, b) {

        return (a * b);
    };
    let divide = function (a, b) {

        return (a / b);
    };

    switch (op) {

        case'+':
            return doIt(a, b, add);

        case'-':
            return doIt(a, b, subtract);

        case'*':
            return doIt(a, b, multiply);

        case'/':
            return doIt(a, b, divide);
    }

}

console.log(calculate(3, 4, '+'));
console.log(calculate(3, 4, '-'));
console.log(calculate(3, 4, '*'));
console.log(calculate(3, 4, '/'));