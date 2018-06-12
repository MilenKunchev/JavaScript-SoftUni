function calendar(input) {

    let [currentDay, month, year] = input;


    let date = new Date(year, month - 1, currentDay);
    let currentMonthDays = new Date(year, month, 0).getDate();
    let prevMonthDays = new Date(year, month - 1, 0).getDate();
    let daysFromPrevMonth = new Date(year, month - 1, 1).getDay() - 1;
    let daysFronNextMonth = 6 - new Date(year, month - 1, currentMonthDays).getDay();

    let html = `<table>\n`;

     html += `<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n`;

    let weekDaysCounter = 0;

    //Prev month
    html += `<tr>`;

    for (let day = prevMonthDays - daysFromPrevMonth; day <= prevMonthDays; day++) {

        html += `<td class="prev-month">${day}</td>`;
        weekDaysCounter++;

        if (weekDaysCounter === 7) {
            html += `</tr>\n`;
            html += `<tr>`;

            weekDaysCounter = 0;
        }
    }
    // Currenth month
    for (let day = 1; day <= currentMonthDays; day++) {

        if (day === currentDay) {

            html += `<td class="today">${day}</td>`;
            weekDaysCounter++;

        } else {
            html += `<td>${day}</td>`;
            weekDaysCounter++;
        }

        if (weekDaysCounter === 7) {
            html += `</tr>\n`;
            if (day < currentMonthDays) {
                html += `<tr>`;
            }

            weekDaysCounter = 0;
        }
    }

    // Next month
    for (let day = 1; day <= daysFronNextMonth; day++) {
        html += `<td class="next-month">${day}</td>`;
    }

    if (daysFronNextMonth !== 0) {
        html += `</tr>\n`;
    }

    html += `</table>`;
    //console.log(html);
    return html;

}
