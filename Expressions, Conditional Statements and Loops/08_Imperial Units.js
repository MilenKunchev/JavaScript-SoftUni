function inchesToFeet(input) {

    let foots = parseInt(input / 12);
    let inches = input < 12 ? input : input - 12 * foots;

    let result = foots + "'-" + inches + '"';

    console.log(result);

}

inchesToFeet(36);
inchesToFeet(55);
inchesToFeet(11);