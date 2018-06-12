function modifyNumber(num) {

    let numAsString = num.toString();
    let sum = sumDigits(numAsString);

    while (sum / numAsString.length <= 5) {

        numAsString += '9';

        sum = sumDigits(numAsString);
    }

    console.log(numAsString);

    function sumDigits(numAsString) {

        let sum = 0;

        for (let digit of numAsString) {
            sum += Number(digit);
        }

        return sum;
    }
}

modifyNumber(101);
modifyNumber(5835);