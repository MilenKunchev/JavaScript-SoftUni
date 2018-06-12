function checkEnd(str, subStr) {

    return str.substr(str.length - subStr.length) === subStr;
}

console.log(checkEnd('This sentence ends with fun?', 'fun?'));
console.log(checkEnd('This is Houston, we have…', 'We have…'));
console.log(checkEnd('The new iPhone has no headphones jack.', 'o headphones jack.'));