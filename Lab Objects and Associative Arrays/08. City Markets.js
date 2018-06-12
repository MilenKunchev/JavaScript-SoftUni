function cityMarkets(input) {

    let summary = new Map();
    for (let entry of input) {

        let [city, product, sales] = entry.split(' -> ');
        let income = sales.split(' : ').reduce((a, b) => a * b);

        if (!summary.has(city)) {
            summary.set(city, new Map());
        }
        if (!summary.get(city).has(product)) {
            summary.get(city).set(product, 0);
        }

        let oldIncome = summary.get(city).get(product);

        summary.get(city).set(product, oldIncome + income);
    }
    for (let [city, products] of summary) {
        console.log(`Town - ${city}`);
        for (let [productName, productTotalIncome] of products) {
            console.log(`$$$${productName} : ${productTotalIncome}`);
        }
    }
}

cityMarkets([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
]);