function extractText(str) {

    let result = [];
    let startIndex = str.indexOf('(');
    let endIndex = str.indexOf(')',startIndex);


    while (startIndex !== -1 && endIndex !== -1) {

        result.push(str.substring(startIndex + 1, endIndex));

        startIndex = str.indexOf('(', endIndex + 1);
        endIndex = str.indexOf(')', startIndex );
    }
    console.log(result.join(', '));
}

extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');
extractText('Rakiya (Bulgarian brandy is self-made liquor alcoholic drink');