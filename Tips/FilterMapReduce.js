function bill(input) {

    let items = input.filter((x, i) => i % 2 === 0);
    let sum = input.filter((x, i) => i % 2 === 1).map(Number).reduce((a, b) => a + b);

    return (`You purchased ${items.join(', ')} for a total sum of ${sum}`);

}

console.log(bill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69']));