function tripLength(input) {

    let [x1, y1, x2, y2, x3, y3] = input.map(Number);

    let distanceBetweenPoints = (x1, y1, x2, y2) => Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));

    let distance123 = distanceBetweenPoints(x1, y1, x2, y2) + distanceBetweenPoints(x2, y2, x3, y3);
    let distance132 = distanceBetweenPoints(x1, y1, x3, y3) + distanceBetweenPoints(x3, y3, x2, y2);
    let distance213 = distanceBetweenPoints(x2, y2, x1, y1) + distanceBetweenPoints(x1, y1, x3, y3);

    let minDistance = Math.min(distance123, distance132, distance213);

    let result = '';

    if (minDistance == distance123) {
        result = `1->2->3: ${distance123}`;
    }

    else if (minDistance == distance132) {
        result = `1->3->2: ${distance132}`;
    }

    else if (minDistance == distance213) {
        result = `2->1->3: ${distance213}`;
    }
    return result;
}

console.log(tripLength([0, 0, 2, 0, 4, 0]));
console.log(tripLength([5, 1, 1, 1, 5, 4]));
console.log(tripLength([-1, -2, 3.5, 0, 0, 2]));