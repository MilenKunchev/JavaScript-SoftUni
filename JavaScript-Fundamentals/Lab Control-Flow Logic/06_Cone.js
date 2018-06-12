function findConeelEments(radius, height) {

    let volume = 1 / 3 * Math.PI * Math.pow(radius, 2) * height;

    let l = Math.sqrt((Math.pow(radius, 2) + Math.pow(height, 2)));

    let area = Math.PI * radius * (radius + l);

    console.log("volume = " + volume);


    console.log("area = " + area);

}

findConeelEments(3, 5);