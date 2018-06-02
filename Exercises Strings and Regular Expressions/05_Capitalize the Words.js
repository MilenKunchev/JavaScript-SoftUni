function capitalizeWords(str) {

    let result = [];

    let words = str.split(' ');
    for (let word of words) {

        let newWord = '';

        for (let index in word) {
            if (index === '0') {
                newWord = word[index].toUpperCase();
            }
            else {
                newWord += word[index].toLowerCase();
            }
        }
        result.push(newWord);
    }

    return result.join(' ');
}

console.log(capitalizeWords('caP@italize these words @tEE@st'));
console.log(capitalizeWords('Was that Easy? tRY thIs onE for SiZe!'));