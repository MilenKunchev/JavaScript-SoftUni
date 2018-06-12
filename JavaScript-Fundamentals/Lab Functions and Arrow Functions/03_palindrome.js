function isPalindrome(word) {

    for (let i = 0; i < word.length; i++) {

        if (word[i] !== word[word.length - 1 - i]) {

            return false;
        }
    }
    return true;
}

console.log(isPalindrome("11711"));