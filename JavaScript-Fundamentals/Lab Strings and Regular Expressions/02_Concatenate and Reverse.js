function solve(arr) {
    let reversed = [];
    for (let element of arr) {

        let revstr = Array.from(element).reverse().join('').toString();
        reversed.unshift(revstr);
    }
console.log(reversed.join(''));
}

solve(['I', 'am', 'student']);
solve(['race', 'car']);