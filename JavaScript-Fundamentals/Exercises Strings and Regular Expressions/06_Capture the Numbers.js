function captureNumbers(arr) {

    //let str = arr.toString();
    //console.log(str.match(/\d+/g).join(' '));

    console.log(arr.toString().match(/\d+/g).join(' '));
}

captureNumbers(['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']);