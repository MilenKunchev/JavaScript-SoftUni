function getDay(day) {

    let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (weekDays.includes(day)) {

        return weekDays.indexOf(day) + 1;
    }

    return "error";

}

console.log(getDay("Monday"));
console.log(getDay("frr"));
console.log(getDay("Friday"));
console.log(getDay("wednesday"));