function solve(data) {

    let regex = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/;

    for (let employee of data) {

        let match = regex.exec(employee);

        if (match) {

            console.log(`Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${match[2]}`);
        }
    }
}

// solve(`Jonathan - 2000 - Manager
// Peter- 1000- Chuck
// George - 1000 - Team Leader
// `);

solve([`I - 1000 - CEO`, `Ivan - 500 - Employee`, `Peter - 500 - Employee`]);