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

        //setup variable to calculate time remaining
        let totalSeconds = numHours*3600 + numMinutes*60 + numSeconds;
        let remainingHours = Math.floor(totalSeconds/3600);
        let remainingMinutes =  Math.floor((totalSeconds % 3600)/ 60);
        let remainingSeconds = Math.floor(totalSeconds % 60);

        //Display Timer Name on page
        if(timerName === ""){
            document.getElementById('displayTimerName').innerHTML=`Timer name: ???`;
            document.getElementById('displayRemark').innerHTML=`Too lazy`; 
        }else{
            document.getElementById('displayTimerName').innerHTML=timerName;
        }

        //logic to check time
        const checkTime = () => {
            if(totalSeconds === 0) {
                document.querySelector('#hours').innerHTML = 0;
                document.querySelector('#minutes').innerHTML = 0;
                document.querySelector('#seconds').innerHTML = 0;
                document.querySelector('#completed').innerHTML = "Complete!";
            }else{
                if(totalSeconds <= 10){
                    docoument.querySelector('#hours').classList.add('red');
                    docoument.querySelector('#minutes').classList.add('red');
                    docoument.querySelector('#seconds').classList.add('red');
                }
                // recalculate total minutes 
                remainingHours = Math.floor(totalSeconds / 3600);
                remainingMinutes = Math.floor((totalSeconds % 3600)/60);
                remainingSeconds = Math.floor(totalSeconds % 60);

                //update timer on screen
                document.querySelector('#hours').innerHTML = remainingHours;
                document.querySelector('#minutes').innerHTML = remainingMinutes;
                document.querySelector('#seconds').innerHTML = remaingSeconds;
                //decrease remaining time for one second
                totalSeconds--;
            }
        }

    })
})
