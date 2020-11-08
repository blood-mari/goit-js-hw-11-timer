import { getTimeComponents } from './getTimeComponents';

const refs = {
    startBtn: document.querySelector('.js-showBtn'),
    timerCont: document.querySelector('#timer-1'),
    stopBtn: document.querySelector('.js-stopBtn'),
    isActive: false,
}

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.intervalId = null;
        this.refs = {
            days: document.querySelector(`${selector} [data-value="days"]`),
            hours: document.querySelector(`${selector} [data-value="hours"]`),
            mins: document.querySelector(`${selector} [data-value="mins"]`),
            secs: document.querySelector(`${selector} [data-value="secs"]`),
        };
    }

    startCounter() {
        if (refs.isActive) { return };

        refs.isActive = true;
        this.intervalId =
        setInterval(() => {
            const deltaTime = this.targetDate - Date.now();
            this.renderTime(getTimeComponents(deltaTime));
        }, 1000);
    };

    showTimer() {
        refs.timerCont.classList.add('is-open');
        this.startCounter();
    }

    stopTimer() {
        clearInterval(this.intervalId);
        refs.isActive = false;
        console.log("stop timer called")
    }

    renderTime({ days, hours, mins, secs }) {
        this.refs.days.innerHTML = days;
        this.refs.hours.innerHTML = hours;
        this.refs.mins.innerHTML = mins;
        this.refs.secs.innerHTML = secs;
      }
}

export { CountdownTimer ,refs };