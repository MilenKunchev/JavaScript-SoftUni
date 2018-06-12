function findVariable(str) {

    let result = [];
    let regex = /_([a-zA-Z0-9]+)/g;
    let match = regex.exec(str);

    while (match !== null) {
        result.push(match[1]);
        match = regex.exec(str);
    }
    if (result.length !== 0) {
        console.log( result.join(','));
    }
}

//findVariable('__invalidVariable _evenMoreInvalidVariable_ _validVariable');
//console.log(findVariable('The _id and _age variables are both integers.'));
findVariable('The  id and  age_55 variables are both integers.');