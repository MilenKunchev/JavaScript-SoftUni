function checkNum(num) {

    if (!Number.isInteger(num)) {

        console.log("invalid");

    } else if (num % 2 === 0) {

        console.log("even");
    } else if (num % 2!== 0 ){
        console.log("odd");
    }

}

checkNum(0);