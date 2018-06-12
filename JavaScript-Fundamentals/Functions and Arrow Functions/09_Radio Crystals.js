function radioCristals(input) {

    let cut = thickness => thickness / 4;
    let lap = thickness => thickness - thickness * 0.2;
    let grind = thickness => thickness - 20;
    let etch = thickness => thickness - 2;
    let xRay = thickness => thickness + 1;

    let targetThickness = Number(input[0]);

    for (let i = 1; i < input.length; i++) {

        let thickness = Number(input[i]);

        console.log(`Processing chunk ${thickness} microns`);

        while (thickness !== targetThickness) {

            thickness = parseInt(processing(targetThickness, thickness));
        }
        console.log(`Finished crystal ${thickness} microns`)
    }

    function processing(targetThinckness, thickness) {

        let operationsCounter = 0;
        let operation = '';

        while (targetThinckness <= cut(thickness) || targetThinckness - 1 <= cut(thickness)) {
            thickness = cut(thickness);
            operationsCounter++;
            operation = 'Cut';
            if (targetThinckness >= cut(thickness) && targetThinckness - 1 >= cut(thickness)) {
                console.log(`${operation} x${operationsCounter}`);
                console.log('Transporting and washing');
                return thickness;
            }
        }

        while (targetThinckness <= lap(thickness) || targetThinckness - 1 <= lap(thickness)) {
            thickness = lap(thickness);
            operationsCounter++;
            operation = 'Lap';
            if (targetThinckness >= lap(thickness) && targetThinckness - 1 >= lap(thickness)) {
                console.log(`${operation} x${operationsCounter}`);
                console.log('Transporting and washing');
                return thickness;
            }
        }

        while (targetThinckness <= grind(thickness) || targetThinckness - 1 <= grind(thickness)) {
            thickness = grind(thickness);
            operationsCounter++;
            operation = 'Grind';
            if (targetThinckness >= grind(thickness) && targetThinckness - 1 >= grind(thickness)) {
                console.log(`${operation} x${operationsCounter}`);
                console.log('Transporting and washing');
                return thickness;
            }
        }

        while (targetThinckness <= etch(thickness) || targetThinckness - 1 <= etch(thickness)) {
            thickness = etch(thickness);
            operationsCounter++;
            operation = 'Etch';
            if (targetThinckness > etch(thickness) && targetThinckness - 2 >= etch(thickness)) {
                console.log(`${operation} x${operationsCounter}`);
                console.log('Transporting and washing');
                return thickness;
            }
        }

        if (targetThinckness - 1 === thickness) {
            thickness = xRay(thickness);
            operationsCounter++;
            operation = 'X-ray';

            console.log(`${operation} x${operationsCounter}`);
            return thickness;
        }
    }
}

radioCristals([1375, 50000]);
//radioCristals([1000, 4000, 8100]);
