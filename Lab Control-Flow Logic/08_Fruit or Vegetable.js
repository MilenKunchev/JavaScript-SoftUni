function checkForFruitOrVegetable(arg) {

    let fruits = ["banana", "apple", "kiwi", "cherry", "lemon", "grapes", "peach"];

    let vegetables = ["tomato", "cucumber", "pepper", "onion", "garlic", "parsley"];

    if (vegetables.includes(arg)) {

        console.log("vegetable");

    } else if (fruits.includes(arg)) {

        console.log("fruit");

    } else {

        console.log("unknown");
    }
}

checkForFruitOrVegetable("apple");
checkForFruitOrVegetable("something");
checkForFruitOrVegetable("tomato");