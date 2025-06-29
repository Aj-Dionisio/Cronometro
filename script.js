const startButton = document.querySelector('#startButton');
const stopButton = document.querySelector('#stopButton');
let seconds = document.querySelector('#segundos')
let minutes = document.querySelector('#minutos')
let hours = document.querySelector('#horas')
let number = 0
let cron
let minute = 0
let hour = 0

function start() {
    cron = setInterval(() => {
        number++
        seconds.innerHTML = number % 60
        if( number === 60){
        number = 0;
        minute++;
        minutes.innerHTML = minute;
    }
    if(minute === 60){
        number = 0;
        minute = 0;
        hour++
        hours.innerHTML = hour;
    }
    }, 1000);

    
}

function Parou() {
    clearInterval(cron)
}






startButton.addEventListener('click', start)

stopButton.addEventListener('click', Parou)

