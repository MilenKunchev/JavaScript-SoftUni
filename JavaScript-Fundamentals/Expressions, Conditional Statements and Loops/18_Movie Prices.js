function moviePrices(input) {

    let title = input[0].toLowerCase();
    let day = input[1].toLowerCase();

    let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

    let dayIndex = days.indexOf(day);

    if (title === "the godfather" && days.includes(day)) {

        let prices = [12, 10, 15, 12.50, 15, 25, 30];

        return prices[dayIndex];

    } else if (title === "schindler's list" && days.includes(day)) {

        let prices = [8.50, 8.50, 8.50, 8.50, 8.50, 15, 15];

        return prices[dayIndex];

    } else if (title === "casablanca" && days.includes(day)) {

        let prices = [8, 8, 8, 8, 8, 10, 10];

        return prices[dayIndex];

    } else if (title === "the wizard of oz" && days.includes(day)) {

        let prices = [10, 10, 10, 10, 10, 15, 15];

        return prices[dayIndex];

    } else {
        return ("error");
    }
}

console.log(moviePrices(['The Godfather', 'Friday']));
console.log(moviePrices(['casablanca', 'sunday']));
console.log(moviePrices(["Schindler's LIST", 'saturday']));
console.log(moviePrices(["SoftUni", 'Nineday']));
console.log(moviePrices(["SoftUni", 'monday']));
console.log(moviePrices(["casablanca", 'Nineday']));