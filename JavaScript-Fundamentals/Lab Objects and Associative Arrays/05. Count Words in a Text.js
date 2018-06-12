function countWords(input) {

    let text = input.join('\n');

    let words = text.split(/[^a-zA-Z0-9]/).filter(w => w !== '');

    let wordsCount = {};

    for (let word of words) {

        if (wordsCount[word] !== undefined) {
            wordsCount[word] += 1;
        }
        else{
            wordsCount[word]=1;
        }
    }
    console.log(JSON.stringify(wordsCount));
}

countWords(["JS devs use Node.js for server-side JS.','-- JS for devs"]);