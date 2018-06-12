function countLetters(str,letter) {

    let count  = 0;

    for (let i =0; i < str.length; i++){

        if(str[i]=== letter){

            count++;
        }
    }
    console.log(count)

}

countLetters('hello', 'l');
countLetters('panther', 'n');