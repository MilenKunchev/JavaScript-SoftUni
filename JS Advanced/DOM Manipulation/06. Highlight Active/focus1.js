function focus() {
    let inputs = document.getElementsByTagName('input');
    let input = Array.from(inputs);
    for (let input of inputs) {
        input.addEventListener('focus', focused);
        input.addEventListener('blur', blured);
    }

    function focused(avent) {

        avent.target.parentNode.className = 'focused';
    }

    function blured(avent) {

        avent.target.parentNode.removeAttribute('class');
    }
}