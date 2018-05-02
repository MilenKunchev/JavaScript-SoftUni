function lastMonth(elements) {

    let [day, month, year] = elements;
    let date = new Date(year, month - 1, 0);

    console.log(date.getDate());
}

lastMonth([17, 12, 2002]);