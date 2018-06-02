function findVariable(str) {

    let regex =/\b_([a-zA-Z]+)\b/g;
    let result = regex.exec(str);

    while (result!==null) {
        console.log(result[1]);
        result = regex.exec(str);
    }
}
findVariable('__invalidVariable _evenMoreInvalidVariable_ _validVariable');
findVariable('_validVariable');