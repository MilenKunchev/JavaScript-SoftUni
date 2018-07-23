function attachEventsListeners() {
    let inputDays = document.getElementById('days');
    let inputHours = document.getElementById('hours');
    let inputMinutes = document.getElementById('minutes');
    let inputSeconds = document.getElementById('seconds');

    document
        .getElementById('daysBtn')
        .addEventListener('click', convertDays);

    document
        .getElementById('hoursBtn')
        .addEventListener('click', convertHours);
    document
        .getElementById('minutesBtn')
        .addEventListener('click', convertMinutes);
    document
        .getElementById('secondsBtn')
        .addEventListener('click', convertSeconds);

    function convertDays() {
        let days = Number(inputDays.value);
        inputHours.value = days * 24;
        inputMinutes.value = days * 1440;
        inputSeconds.value = days * 86400;
    }

    function convertHours() {
        let hours = Number(inputHours.value);
        inputDays.value = hours / 24;
        inputMinutes.value = hours * 60;
        inputSeconds.value = hours * 3600;
    }

    function convertMinutes() {
        let minutes = Number(inputMinutes.value);
        inputDays.value = minutes / 1440;
        inputHours.value = minutes / 60;
        inputSeconds.value = minutes * 60;

    }

    function convertSeconds() {
        let seconds = Number(inputSeconds.value);
        inputDays.value = seconds / 86400;
        inputHours.value = seconds / 3600;
        inputMinutes.value = seconds / 60;
    }

}