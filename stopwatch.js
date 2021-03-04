const min = document.querySelector('#min');
const secs = document.querySelector('#secs');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset')
let counterm = 0, startWatchmin,startWatchmsec,counters=0;
start.addEventListener('click', () => {
    startTimer();
})
stop.addEventListener('click', () => {
    clearInterval(startWatchmin);
    clearInterval(startWatchmsec);
    
})

reset.addEventListener('click', () => {
    min.textContent = '00';
    secs.textContent = '00';
    clearInterval(startWatchmin);
    clearInterval(startWatchmsec);
    counterm = 0;
    counters = 0;
})

startTimer = () => {
    startWatchmsec = setInterval(() => {
        counters += 1
        if (counters < 10) {
            secs.textContent = '0' + counters;
        }
        else if (counters < 100) {
            secs.textContent = counters
        } else {
            counters = 0;
        }
    
    }, 1)
    
    startWatchmin = setInterval(() => {
        counterm += 1;
        if (counterm < 10) {
            min.textContent = '0' + counterm;
        } else {
            min.textContent = counterm;
        }
    }, 1000)
    
}


