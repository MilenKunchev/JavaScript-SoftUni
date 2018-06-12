function agregateElements(elements) {

    let sum = 0;

    let inverseSum = 0;

    let concat = '';

    for (let element of elements){

        sum += element;

        inverseSum += 1/element;

        concat +=element.toString();
    }

    console.log(sum);

    console.log(inverseSum);

    console.log(concat);
}

agregateElements([1, 2, 3]);
agregateElements([2, 4, 8, 16]);