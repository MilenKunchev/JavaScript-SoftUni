function distance3D(params) {

let x = params[0];
let y = params[1];
let z = params[2];
let x1 = params[3];
let y1 = params[4];
let z1 = params[5];

let xPoints = Math.pow((x1-x),2);
let yPoints = Math.pow((y1-y),2);
let zPoints = Math.pow((z1-z),2);

let distance = Math.sqrt(xPoints+yPoints+zPoints);

    console.log(distance);

}

distance3D([1, 1, 0, 5, 4, 0]);
distance3D([3.5, 0, 1, 0, 2, -1]);