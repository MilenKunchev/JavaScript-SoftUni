function restaurantBill(order) {

    let products = [];
    let totalSum = 0;

    for (let i = 0; i < order.length; i++) {

        if (i % 2 === 0) {
            products.push(order[i]);
        }
        if (i % 2 !== 0) {
            totalSum += Number(order[i]);
        }
    }
return `You purchased ${products.join(', ')} for a total sum of ${totalSum}`;
}

console.log(restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69']));