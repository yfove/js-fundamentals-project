// Document.ready
(function() {
    //focuses on load
    document.querySelector("#timerName").focus();

    //when form is submitted...
    $('form').on('submit', function (e) {
        //stops auto refreshing
        e.preventDefault();

        //disable set button once it has been pressed
        document.querySelector("input[type=submit]").disable = true;

        //shows cancel button once timer starts
        document.querySelector("#cancel").style.display="block";

        //get timer name and save it
        const $timerName = $('input[type=text]');
        const timerName = $timerName.val();

        //get hours, minutes, and seconds and save it
        const inputHour = document.querySelector('#hoursInput').value;
        const inputMinutes = document.querySelector('#minutesInput').value;
        const inputSeconds = document.querySelector('#secondsInput').value;

        //change input from string to bumber
        const numHours = parseInt(inputHours);
        const numMinutes = parseInt(inputMinutes);
        const numSeconds = parseInt(inputSeconds);
    })
})
