function compoundInterest(params) {

    let principalSum = params[0];
    let interestRate = params[1] / 100;      // Percent
    let compoundingPeriod = params[2]; // Months
    let totalTimespan = params[3];     // Years

    let compoundingFrequency = 12 / compoundingPeriod;

    let totalValue = principalSum * (Math.pow((1 + interestRate / compoundingFrequency), compoundingFrequency * totalTimespan));

    console.log(totalValue.toFixed(2));
}

compoundInterest([1500, 4.3, 3, 6]);
compoundInterest([100000, 5, 12, 25]);