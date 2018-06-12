function twoPointsDistance(x1, y1, x2, y2) {

    let sqaredDistance = Math.pow((x1 - x2),2) + Math.pow((y1 - y2),2);

    let distance = Math.sqrt(sqaredDistance,2);

    return distance;


}

console.log(twoPointsDistance(2, 4, 5, 0))