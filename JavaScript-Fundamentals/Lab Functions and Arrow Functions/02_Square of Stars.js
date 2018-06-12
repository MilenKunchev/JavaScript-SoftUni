function squareOfStars (count = 5){
    function printStars (n=count) {
        console.log("*"+ " *".repeat (n-1));
    }
    for (let i = 0; i<count ; i++){
        printStars();

    }

}
squareOfStars(6);