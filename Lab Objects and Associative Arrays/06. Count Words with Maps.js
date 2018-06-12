function countWords(input) {

    let text = input.join('\n').toLowerCase();

    let words = text.split(/[^a-zA-Z0-9_]/).filter(w => w !== '');

    let map = new Map();
    for (let word of words) {

        if (map.has(word)) {

            map.set(word, map.get(word) + 1);
        }
        else map.set(word, 1);
    }
    let sorted = Array.from(map.keys()).sort();

    return sorted.forEach(w => console.log(`'${w}' -> ${map.get(w)} times`));
}

console.log(countWords(["JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --"]));