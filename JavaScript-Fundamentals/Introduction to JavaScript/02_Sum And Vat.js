function sumAndVat(numbers) {

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {

        sum += numbers[i];
    }

    console.log("sum = " + sum);

    let vat = sum * 0.2;

    console.log("VAT = " + vat);

    let total = sum + vat;

    console.log("total = " + total);

}

sumAndVat([1.20, 2.60, 3.50]);