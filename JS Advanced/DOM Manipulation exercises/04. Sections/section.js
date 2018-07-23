function create(inputArr) {
    let content = document.getElementById('content');

    for (let str of inputArr) {

        let newDiv = document.createElement('div');

        let newParagraph = document.createElement('p');
        newParagraph.textContent = str;
        newParagraph.style.display = 'none';
        newDiv.appendChild(newParagraph);
        content.appendChild(newDiv);

        newDiv.addEventListener('click', function () {
            newParagraph.style.display = 'block'
        });
        newDiv.addEventListener('dblclick', function () {
            newParagraph.style.display = 'none'
        })
    }

}