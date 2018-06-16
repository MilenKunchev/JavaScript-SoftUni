function minkeDecode(inputArr) {

    let startPoint = Number(inputArr[0]);
    let endPoint = Number(inputArr[1]);
    let rightWord = inputArr[2];
    let encryptedText = inputArr.slice(3).toString();

    let encryptedCountry = findCountry(encryptedText, startPoint, endPoint);
    let country = decryptCountry(encryptedCountry, rightWord, startPoint, endPoint);
    let town = decryptTown(encryptedText);

    console.log(`${country} => ${town}`);

    function findCountry(encryptedText, startPoint, endPoint) {

        let re = /\b[A-Z]{1}[a-z]+[A-Z]{1}\b/g;
        let countries = encryptedText.match(re);

        // Country check and return country with more chars then endpoint +1
        for (let country of countries) {
            if (country.length - 1 > endPoint) {
                return country;
            }
        }
    }

    function decryptCountry(encryptedCountry, rightWord, startPoint, endPoint) {

        let decrypetdCountry = encryptedCountry
            .substring(0, startPoint) + rightWord + encryptedCountry
            .substring(endPoint + 1, encryptedCountry.length).toLowerCase();

        return decrypetdCountry;
    }

    function decryptTown(encryptedText) {

        let re = /[0-9]{3}\.*[0-9]*/g;
        let nums = encryptedText.match(re);

        let town = [];
        for (let num of nums) {

            let charNum = Math.ceil(Number(num));
            let char = String.fromCharCode(charNum);
            town.push(char);
        }
        town[0] = town[0].toUpperCase();
        return town.join('');
    }

}

minkeDecode(["1", "4", "loveni", "SerbiA 67 – sDf1d17ia aTe 1" +
", 108 confin$4%#ed likewise it humanity  Bulg35aria -" +
" VarnA railLery1a0s1 111 an unpacked as 109 he"]);

minkeDecode(["3", "5", "gar", "114 sDfia 1, riDl10 confin$4%#ed117 " +
"likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"]);