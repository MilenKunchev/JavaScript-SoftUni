function gradsToRadians(grads) {

    // Full cyrcle =400 grads
    grads %= 400;

    // If grads < 0 : grads = 400 + grads
    grads = grads < 0 ? grads + 400 : grads;

    // radians = grads * (360/400) ---> 360 full cyrcle in radians
    let radians = grads * 0.9;

    console.log(radians);

}

gradsToRadians(100);
gradsToRadians(400);
gradsToRadians(850);
gradsToRadians(-50);