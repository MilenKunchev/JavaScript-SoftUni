function splitString(str, delimiter) {

    let splittedElements = str.split(delimiter);

    console.log(delimiter);
    console.log(splittedElements.join('\n'));
}

splitString('One-Two-Three-Four-Five', '-');
//splitString(`http://platform.softuni.bg`,`.`);
