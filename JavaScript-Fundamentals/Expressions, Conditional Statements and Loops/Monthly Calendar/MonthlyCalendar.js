function calendar([day,month,year]) {

    //let [currentDay, month, year] = input;


    let date = new Date(year, month - 1, day);
    let currentMonthDaysCount = new Date(year, month, 0).getDate();
    let prevMonthDaysCountCount = new Date(year, month - 1, 0).getDate();
    let daysFromPrevMonth = new Date(year, month - 1, 1).getDay() - 1;
    let daysFromNextMonth = 6 - new Date(year, month - 1, currentMonthDaysCount).getDay();

    let html = `<table>\n`;

     html += `<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n`;

    let weekDaysCounter = 0;

    //Prev month
    html += `<tr>`;

    for (let i = prevMonthDaysCountCount - daysFromPrevMonth; i <= prevMonthDaysCountCount; i++) {

        html += `<td class="prev-month">${i}</td>`;
        weekDaysCounter++;

        if (weekDaysCounter === 7) {
            html += `</tr>\n`;
            html += `<tr>`;

            weekDaysCounter = 0;
        }
    }
    // Currenth month
    for (let i = 1; i <= currentMonthDaysCount; i++) {

        if (i == day) {

            html += `<td class="today">${i}</td>`;
            weekDaysCounter++;

        } else {
            html += `<td>${i}</td>`;
            weekDaysCounter++;
        }

        if (weekDaysCounter === 7) {
            html += `</tr>\n`;
            if (i < currentMonthDaysCount) {
                html += `<tr>`;
            }

            weekDaysCounter = 0;
        }
    }

    // Next month
    for (let i = 1; i <= daysFromNextMonth; i++) {
        html += `<td class="next-month">${i}</td>`;
    }

    if (daysFromNextMonth !== 0) {
        html += `</tr>\n`;
    }

    html += `</table>`;
    //console.log(html);
    return html;

}

calendar([24, 12, 2012]);