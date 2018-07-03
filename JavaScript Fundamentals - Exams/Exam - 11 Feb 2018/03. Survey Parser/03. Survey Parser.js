function solve(inputStr) {

    let label = '';
    let averageRating = 0;

    let surveyPattern = /<svg>[\s\S]*?<\/svg>/gm;
    let surveyMatch = surveyPattern.exec(inputStr);
    if (surveyMatch) {
        let pattern = /<svg>[\s\S]*?<cat>[\s\S]*?<text>[\s\S]*?\[([\s\S]+)\][\s\S]*?<\/text>[\s\S]*?<\/cat>[\s\S]*?<cat>([\s\S]*?)<\/cat><\/svg>/gm;
        let match = pattern.exec(inputStr);
        if (match) {

            label = match[1];

            let ratings = match[2];

            let ratingsPattern = /<g><val>([0-9]+)<\/val>([0-9]+)<\/g>/gm;
            let ratingsMatches = ratingsPattern.exec(ratings);

            if (ratingsMatches) {

                let totalCount = 0;
                let ratingsSum = 0;
                while (ratingsMatches !== null) {

                    let value = Number(ratingsMatches[1]);
                    let count = Number(ratingsMatches[2]);

                    totalCount += count;
                    ratingsSum += count * value;

                    ratingsMatches = ratingsPattern.exec(ratings);
                }
                averageRating = Math.round((ratingsSum / totalCount) * 100) / 100;
                console.log(`${label}: ${averageRating}`);
            } else {
                //  Invalid format if no valid ratings ??????
                console.log('Invalid format');
            }
        }
        else {
            console.log('Invalid format');
        }
    } else {
        console.log(`No survey found`);
    }

}

solve("<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]" +
    "</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4" +
    "</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>");

solve('<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>');

solve('<p>How do you suggest we improve our service?</p><p>More tacos.</p><p>It\'s great, don\'t mess with it!' +
    '</p><p>I\'d like to have the option for delivery</p>');

solve('<svg><cat><text>Which is your favourite meal from our selection?</text></cat><cat><g><val>' +
    'Fish</val>15</g><g><val>Prawns</val>31</g><g><val>Crab Langoon</val>12</g><g><val>Calamari</val>17</g></cat></svg>');