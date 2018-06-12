function solveSecretData(arr) {

    let result = [];
    let pattern = /(\*[A-Z][a-zA-Z]*)(?= |\t|$)|(\+[0-9-]{10})(?= |\t|$)|(![0-9a-zA-Z]+)(?= |\t|$)|(_[0-9a-zA-Z]+)(?= |\t|$)/g;

    for (let str of arr) {
        if (pattern.test(str)) {
            str = str.replace(pattern, replacer);
        }
        result.push(str);
    }
    console.log(result.join('\n'));

    function replacer(match, gr1) {

        let countOfPipes = match.length;
        //console.log(match);
        return '|'.repeat(countOfPipes);

    }
}

solveSecretData(["I can\'t really remember...",'Agent *Ivankov was in the room when it all happened.', 'The person in the room was heavily armed.'
    , 'Agent *Ivankov had to act quick in order.', 'He picked up his phone and called some unknown number. '
    , 'I think it was +555-49-796', "I can't really remember..."
    , 'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21'
    , 'Then after that he disappeared from my sight.', 'As if he vanished in the shadows.'
    , 'A moment, shorter than a second, later, I saw the person flying off the top floor.'
    , "I really don't know what happened there.", 'This is all I saw, that night.', 'I cannot explain it myself...']);

