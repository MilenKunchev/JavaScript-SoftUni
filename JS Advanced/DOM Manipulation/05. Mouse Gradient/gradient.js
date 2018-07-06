function attachGradientEvents() {

    let gradient = document.getElementById('gradient');
    gradient.addEventListener("mousemove", gradientMove);
    gradient.addEventListener('mouseout', gradientOut);

    function gradientMove(event) {
        let mousePositionX = event.offsetX;
        let pow = mousePositionX / (event.target.clientWidth-1);
        pow = Math.trunc(pow*100);

        document.getElementById('result').textContent = pow + '%';
    }

    function gradientOut(event) {
        document.getElementById('result').textContent = '';
    }

}