function addRemove(commands) {

    let arr = [];
    let element = 1;
    let counter = 0;
    while (counter < commands.length) {

        let command = commands[counter];
        if (command === 'add') {

            arr.push(element);
        }
        if (command === 'remove') {
            arr.pop();

        }
        element++;
        counter++;
    }

    if (arr[0] !== undefined) {
        console.log(arr.join('\n'));
    } else {
        console.log('Empty');
    }

}

addRemove(["add", "add", "add", "add"]);
addRemove(["add", "add", "remove", "add", "add"]);
addRemove(["remove", "remove", "remove"]);