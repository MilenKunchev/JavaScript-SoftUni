function validate() {

    let str = 'abc3213b321 Java script, Java';
    let plus = '+';
    let pattern = /[a-z]/g;

    let regex = new RegExp(pattern);

    console.log(regex.exec(str));   //[ 'a', index: 0, input: 'abc3213b321 Java script Java' ]
    console.log(regex.test(str));   //true
    console.log(str.match(/\w+/g)); //[ 'abc3213b321', 'Java', 'script', 'Java' ]
    console.log(str.match(/\a/g));  // [ 'a', 'a', 'a', 'a', 'a' ]
    console.log(str.replace(/Java/g, 'JAVA')); //abc3213b321 JAVA script, JAVA

    let regex1 = /([A-Z])/g;
    let text = 'My name is Ivan';
    let result = regex1.exec(text);
    while (result !== null) {

        console.log(result[1]); // Print first group 'M', 'I'

        result = regex1.exec(text);
    }

    // Replace text with Regex ----->
    let pattern1 = /(My name) (is) (Ivan)/g;

    console.log(text);  //My name is Ivan
    text = text.replace(pattern1, replacer);
    console.log(text);  //Ivan is My name

    function replacer(match, gr1, gr2, gr3) {
        return gr3 + ' ' + gr2 + ' ' + gr1;
    }
}

validate();