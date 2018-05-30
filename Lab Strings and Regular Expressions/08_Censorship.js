function censorship(text, words) {

    for (let word of words) {

        let replaced = '-'.repeat(word.length);

        while (text.indexOf(word) !== -1) {
            text = text.replace(word, replaced);
        }
    }
    return text;
}

console.log(censorship('roses are red, violets are blue', [', violets are', 'red']));