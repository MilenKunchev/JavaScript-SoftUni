function extractUniqueWords(inputArr) {

    let words = new Set();
    let str = inputArr.join('');

    let worddPattern = /\w+/g;

    let matches = str.match(worddPattern);

    matches.forEach(w => words.add(w.toLowerCase()));

    console.log([...words].join(', '));

}

extractUniqueWords(['Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.',
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
    'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.']);