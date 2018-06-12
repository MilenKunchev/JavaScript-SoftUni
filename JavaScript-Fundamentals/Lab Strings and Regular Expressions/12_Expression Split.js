function expresionSplit(input) {

    let result =input.match(/[^ ;()\\.,]+/g);

    console.log(result.join('\n'));

}
expresionSplit('let sum = 4 * 4,b = "wow";');
//expresionSplit('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}');
