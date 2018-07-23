function toggle() {
    let button = document.querySelector('span.button');
    buttonState = button.textContent;
    let textDiv = document.getElementById('extra');

    if (buttonState === 'More') {
        button.textContent = 'Less';
        textDiv.style.display = 'block'
    }
    else {
        button.textContent = 'More';
        textDiv.style.display = 'none'
    }

}