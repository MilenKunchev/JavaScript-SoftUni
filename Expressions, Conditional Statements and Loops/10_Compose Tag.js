function composeHTML(elements) {

    let fileLocation = elements[0];
    let alternateText = elements[1];

    let html = `<img src="${fileLocation}" alt="${alternateText}">`;
    console.log(html);

}

composeHTML(['smiley.gif', 'Smiley Face']);