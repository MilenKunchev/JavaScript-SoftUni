function printArray(arr) {
    let delimiter = arr.pop();
    return arr.join(`${delimiter}`);
}

console.log(printArray(['One', 'Two', 'Three', 'Four', 'Five', '-']));
console.log(printArray(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']));