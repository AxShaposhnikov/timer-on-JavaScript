let deadline = '2020-04-20';

    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));

            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
    }
    
    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        
        function updateClock() {
            let t = getTimeRemaining(endTime);
            hours.textContent = checkDigit(t.hours);
            minutes.textContent = checkDigit(t.minutes);
            seconds.textContent = checkDigit(t.seconds);

            if (t.total < 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    function checkDigit(value) { 
        return (value / 10 < 1) ? '0' + value : value;
    }

    setClock('timer', deadline);