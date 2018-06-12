function assignProperties(elements) {

    let obj = {
        [elements[0]]: elements[1],
        [elements[2]]: elements[3],
        [elements[4]]: elements[5],
    }

    console.log(obj);

}

assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']);