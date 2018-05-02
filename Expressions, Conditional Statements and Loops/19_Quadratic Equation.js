function quadraticEquation(a, b, c) {

    let discriminant = Math.pow(b, 2) - 4 * a * c;

    if (discriminant < 0) {
        return "No";
    }

    if (discriminant === 0) {

        let root = -b / (2 * a);
        return root;
    }

    if (discriminant > 0) {

        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        let root1 = x1 < x2 ? x1 : x2;
        let root2 = x1 > x2 ? x1 : x2;


        let result = `${root1}\n${root2}`;

        return result;
    }
}

console.log(quadraticEquation(6, 11, -35));
console.log(quadraticEquation(1, -12, 36));
console.log(quadraticEquation(5, 2, 1));