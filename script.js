let time = document.getElementById('time');
let sec_num = 1 * 60 * 10
let isStarted = false;
let interval;

const startTimer = () => {
    handleInterval()
    interval = setInterval(() => {
        handleInterval()
    }, 1000)
}

const handleInterval = () => {
    let minutes = Math.floor((sec_num) / 60);
    let seconds = sec_num - (minutes * 60);
    time.textContent = formatNumber(minutes) + ':' + formatNumber(seconds)
    if (minutes < 1) {
        time.className = "is-finishing has-text-danger"
    } else {
        time.className = ""
    }
    sec_num--
}

const formatNumber = (number) => {
    return ("0" + number).slice(-2)
}

document.getElementById("one-minute").addEventListener("click", () => {
    sec_num = 61
})
const start = document.getElementById("start")
if (start) {
    start.addEventListener("click", () => {
        if (isStarted) {
            isStarted = false;
            start.className = "button is-fullwidth is-success"
            start.textContent = "Reanudar turno"
            clearInterval(interval)
        } else {
            isStarted = true;
            start.className = "button  is-fullwidth"
            start.textContent = "Pausar turno"
            startTimer()
        }
        start.blur();
    })
} else {
    startTimer()
}