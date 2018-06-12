function findDistance(params) {

    let firstObjectSpeed = params[0] * 0.27777777777778;
    let secondObjectSpeed = params[1] * 0.27777777777778;
    let time = params[2];

    let dist1 = firstObjectSpeed * time;
    let dist2 = secondObjectSpeed * time;

    let dist = Math.abs(dist1 - dist2);

    console.log(dist);

}

findDistance([0, 60, 3600]);
findDistance([11, 10, 120]);
findDistance([5, -5, 40]);