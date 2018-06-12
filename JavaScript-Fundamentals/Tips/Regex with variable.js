function findOccurrences(sentence, word) {


    let pattern = `\\b${word}\\b`;
    let regex = RegExp(pattern, 'ig');  //Add /ig to regex
    //console.log(regex);
    console.log(sentence.match(regex).length);

}


findOccurrences('How do you plan on achieving that? How? How can you even think of that?', 'how');
findOccurrences('There was one. Therefore I bought it. I wouldn’t buy it otherwise.','there');