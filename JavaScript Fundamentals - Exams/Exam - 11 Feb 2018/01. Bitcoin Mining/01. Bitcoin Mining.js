function solve(arr) {
    arr = arr.map(a => Number(a));
    let day = 0;
    let totalLeva = 0;
    let firstPurchaseDay = 0;
    let totalBitcoins = 0;
    for (let i = 0; i < arr.length; i++) {
        day = i + 1;
        let goldForShift = arr[i];
        if (day % 3 === 0) {
            goldForShift = goldForShift - goldForShift * 0.3;
        }
        let levaForShift = Number((goldForShift * 67.51));
        totalLeva += levaForShift;

        if (totalLeva >= 11949.16) {
            let bitcoinPurchase = Math.floor(totalLeva / 11949.16);
            totalBitcoins += bitcoinPurchase;
            totalLeva -= bitcoinPurchase * 11949.16;
            if (firstPurchaseDay === 0) {
                firstPurchaseDay = day;
            }
        }
    }
    console.log(`Bought bitcoins: ${totalBitcoins}`);
    if (firstPurchaseDay !== 0) {
        console.log(`Day of the first purchased bitcoin: ${firstPurchaseDay}`)
    }
    console.log(`Left money: ${totalLeva.toFixed(2)} lv.`)

}

solve([3124.15, 504.212, 2511.124]);