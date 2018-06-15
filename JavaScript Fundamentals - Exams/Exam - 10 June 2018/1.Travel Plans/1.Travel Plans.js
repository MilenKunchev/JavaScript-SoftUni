function travelPlans(inputArr) {

    let totalGold = 0;
    // Professinons
    let specialized = ["Programming", "Hardware maintenance", "Cooking", "Translating", "Designing"];
    let average = ["Driving", "Managing", "Fishing", "Gardening"];
    let clumsy = ["Singing", "Accounting", "Teaching", "Exam-Making", "Acting"
        , "Writing", "Lecturing", "Modeling", "Nursing"];

    let specializedCustumersCount = 0;
    let averageCustumersCount = 0;
    let clumsyCustumersCount = 0;


    for (let activity of inputArr) {
        let profession = activity.split(' : ')[0];
        let goldOffered = Number(activity.split(' : ')[1]);

        if (specialized.includes(profession)) {
            if (goldOffered < 200) {
                continue;
            }
            specializedCustumersCount++;
            goldOffered -= goldOffered * 0.2;

            totalGold += goldOffered;

            if (specializedCustumersCount % 2 === 0) {
                totalGold += 200;
            }

        }
        else if (average.includes(profession)) {
            averageCustumersCount++;
            totalGold += goldOffered;
        }
        else if (clumsy.includes(profession)) {
            clumsyCustumersCount++;

            let goldToReceive = goldOffered;

            if (clumsyCustumersCount % 2 === 0) {
                goldToReceive = goldOffered - goldOffered * 0.05;
            }
            else if (clumsyCustumersCount % 3 === 0) {
                goldToReceive = goldOffered - goldOffered * 0.1;
            }

            totalGold += goldToReceive;
        }
    }
    console.log(`Final sum: ${totalGold.toFixed(2)}`);
    if (totalGold < 1000) {
        let needToEarn = 1000 - totalGold;
        console.log(`Mariyka need to earn ${needToEarn.toFixed(2)} gold more to continue in the next task.`)
    }
    else {
        let goldMore = totalGold-1000;
        console.log(`Mariyka earned ${goldMore.toFixed(2)} gold more.`)
    }


}

travelPlans(["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199"]);
travelPlans(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199"
    , "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"]);
travelPlans(["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199","Driving : 257"]);