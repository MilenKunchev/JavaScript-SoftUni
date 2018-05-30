function matchAllWords(inputStr) {

    let regex = /\w+/g;
    let matches = inputStr.match(regex);

    //console.log(matches);
    console.log(matches.join('|'));
}

//matchAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text');
matchAllWords('_(Underscores) are also word characters');