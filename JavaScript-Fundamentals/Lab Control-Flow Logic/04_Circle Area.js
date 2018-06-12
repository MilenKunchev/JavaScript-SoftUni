function printCircleArea(radius) {

    let area = Math.PI * radius * radius;

    let areaRoundet  = parseFloat(area).toFixed(2);

    console.log(area);
    console.log(areaRoundet);
}

printCircleArea(33);