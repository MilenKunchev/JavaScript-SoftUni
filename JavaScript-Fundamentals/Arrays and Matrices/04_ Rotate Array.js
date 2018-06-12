function rotateArr(arr) {

    let rotations = Number(arr.pop() % arr.length);

    for (let i = 0; i < rotations; i++) {

        let element = arr.pop();
        arr.unshift(element);
    }
    return arr.join(' ');
}

console.log(rotateArr(['Banana', 'Orange', 'Coconut', 'Apple', '15']));