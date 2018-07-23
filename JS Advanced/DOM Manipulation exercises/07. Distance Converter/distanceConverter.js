function attachEventsListeners() {
    let input = document.getElementById('inputDistance');
    let inputUnits = document.querySelector('#inputUnits');
    let outputUnits = document.querySelector('#outputUnits');
    let outputDistance = document.getElementById('outputDistance');

    document
        .getElementById('convert')
        .addEventListener('click', convertUnits);

    function convertUnits() {
        let conversionRates = [1000, 1, 0.01, 0.001, 1609.34, 0.9144, 0.3048, 0.0254];

        let inputDistance = Number(input.value);
        let inputDistanceInMeters = Number(conversionRates[inputUnits.selectedIndex]);
        let outputDistanceInMeters = Number(conversionRates[outputUnits.selectedIndex]);
        let output = inputDistance * inputDistanceInMeters / outputDistanceInMeters;

        document.getElementById('outputDistance').value = output;
    }
}