function filterByAge(minAge, personA, ageA, personB, ageB) {

    let firstPerson = {name: personA, age: ageA};
    let secondPerson = {name: personB, age: ageB};

    if (firstPerson.age >= minAge) {

        console.log(firstPerson)
    }

    if (secondPerson.age >= minAge) {

        console.log(secondPerson)
    }

}

filterByAge(12, 'Ivan', 15, 'Asen', 9)