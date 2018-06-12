function arrays(arr) {

    arr.push(88);
    console.log(`push --> ${arr}`);

    arr.pop(88);
    console.log(`pop --> ${arr}`);

    arr.unshift(0);
    console.log(`unshift --> ${arr}`);

    arr.shift(0);
    console.log(`shift --> ${arr}`);
    let pieceFromLeft = arr.slice(3);
    console.log(`slice 3 --> ${pieceFromLeft}`);

    let pieceFrmoRight = arr.slice(-3);
    console.log(`slice -3 --> ${pieceFrmoRight}`);

    let piece = arr.slice(2, 4);
    console.log(`slice 2-4 --> ${piece}`);

    console.log(arr.filter((element, index) => index % 2 === 0).join('|'));
    console.log(arr.filter((element, index) => element % 2 === 0).join('|'));

    console.log(`arr elements --> ${arr}`);
    let spliced = arr.splice(0, 3);
    console.log(`spliced 0-3 elements --> ${spliced}`);
    console.log(`arr left --> ${arr}`);

}

arrays([1, 2, 3, 4, 5, 6, 7]);