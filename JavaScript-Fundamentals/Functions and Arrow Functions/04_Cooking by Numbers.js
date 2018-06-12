function cookingByNumber(input) {

    let number = Number(input[0]);

    for (let i = 1; i < input.length; i++) {

        let operation = input[i];

        number = doOperations(operation, number);

        console.log(number);

    }

    function doOperations(operation, number) {

        switch (operation) {
            case'chop':
                return number / 2;
            case'dice':
                return Math.sqrt(number);
            case 'spice':
                return number += 1;
            case 'bake':
                return number *= 3;
            case'fillet':
                return number -= (number * 0.2);

        }

    }
}

// cookingByNumber([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
// cookingByNumber([200, 'fillet']);
cookingByNumber([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);
