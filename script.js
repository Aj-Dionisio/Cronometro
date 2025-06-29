const startButton = document.querySelector('#startButton');
const pauseButton = document.querySelector('#pauseButton');
const resetButton = document.querySelector('#restButton');
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
        if (number === 60) {
            number = 0;
            minute++;
            minutes.innerHTML = minute;
        }
        if (minute === 60) {
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

function zerou() {
    number = 0;
    seconds.innerHTML = number;
    minute = 0;
    minutes.innerHTML = minute;
    hour = 0;
    hours.innerHTML = hour;
    clearInterval(cron);
}






startButton.addEventListener('click', start)

pauseButton.addEventListener('click', Parou)

resetButton.addEventListener('click', zerou)

