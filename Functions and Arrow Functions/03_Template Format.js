function solveQuiz(input) {

    let xml  = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml +='<quiz>\n';
    for (let i = 0; i < input.length; i += 2) {

        let question = input[i];
        let answer = input[i + 1];

        xml+='<question>\n';
        xml+=`${question}\n`;
        xml+='</question>\n';

        xml+='<answer>\n';
        xml+=`${answer}\n`;
        xml+='</answer>\n';
    }
    xml+='</quiz>';

    return xml;
}

// solveQuiz(["Who was the forty-second president of the U.S.A.?",
//     "William Jefferson Clinton"]
// );
solveQuiz(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]
);