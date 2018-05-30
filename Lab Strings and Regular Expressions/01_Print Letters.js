function printLetters(str) {

    // for (let i = 0; i < str.length; i++) {
    //     console.log((`str[${i}] -> ${str[i]}`));
    // }

    for(let i in str){
        console.log((`str[${i}] -> ${str[i]}`));
    }
}

printLetters('Hello, World!');