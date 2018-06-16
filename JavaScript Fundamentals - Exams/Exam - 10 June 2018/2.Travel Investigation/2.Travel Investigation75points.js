function travelInvestigation(input) {

    //!!!!!!! 75/100  points  wrong REGEX
    input = input.map(x => x.toLowerCase());
    let delimiter = input[1];

    let companies = input[0].split(delimiter).map(x => x.replace(/\s/g, ""));

    let pattern = "";

    for (let company of companies) {
        pattern += "^(?=.*\\b";
        pattern += company;
        pattern += '\\b)';
    }

    pattern += '.*$';

    let sentences = input.slice(2);
    let regex = RegExp(pattern, 'ig');

    let validSentences = [];
    let invalidSentences = [];

    for (let sentence of sentences) {
        let result = sentence.match(regex);

        if (result !== null) {
            validSentences.push(sentence);
        }
        else {
            invalidSentences.push(sentence);
        }
    }

    if (validSentences[0] !== undefined) {
        console.log("ValidSentences");
        for (let i = 0; i < validSentences.length; i++) {
            console.log(`${i + 1}. ${validSentences[i]}`);
        }
        if (invalidSentences[0] !== undefined) {
            console.log("=".repeat(30));
        }
    }
    if (invalidSentences[0] !== undefined) {
        console.log("InvalidSentences");
        for (let i = 0; i < invalidSentences.length; i++) {
            console.log(`${i + 1}. ${invalidSentences[i]}`);
        }
    }
}

// travelInvestigation(["bulgariatour@, minkatrans@, koftipochivkaltd",
//     "@,",
//     "Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
//     "dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
//     "someone continues as no "]
// );

// travelInvestigation(["bulgariatour@, minkatrans@, koftipochivkaltd",
//     "@,",
//     "Mincho  e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
//     "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
//     "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"]
// );

travelInvestigation(["bulgariatour8, minkatrans8, koftipochivkaltd",
    "8,",
    "Mincho  e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour miki",
    "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
    "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"]
);