function travelInvestigation(input) {

    input = input.map(x => x.toLowerCase());

    let validSentences = [];
    let invalidSentences = [];

    let delimiter = input[1];
    let companies = input[0].split(delimiter).map(x => x.replace(/\s/g, ""));

    let sentences = input.slice(2);

    for (let sentence of sentences) {
        let isValid = true;

        for (let company of companies) {
            if (!sentence.includes(company))
                isValid = false;
        }
        if (isValid) {
            validSentences.push(sentence);
        }
        else
        {
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

travelInvestigation(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
    "someone continues as no "]
);

// 2TravelInvestigation75points(["bulgariatour@, minkatrans@, koftipochivkaltd",
//     "@,",
//     "Mincho  e Kofti PochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
//     "We will koftipo chivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
//     "dqdo BuLGariaTOUR mraz some text but is KoftiPoc ivkaLTD minkaTRANS"]
// );

// 2TravelInvestigation75points(["bulgariatour8, minkatrans8, koftipochivkaltd",
//     "8,",
//     "Mincho  e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour miki",
//     "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
//     "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"]
// );