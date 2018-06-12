function printNElement(arr) {
    let result = '';
    let n = Number(arr.pop());
    for (let i = 0; i < arr.length; i += n) {

       result+=`${arr[i]}\n`;
    }
    return result;
}

console.log(printNElement(['5', '20', '31', '4', '20', '2']));