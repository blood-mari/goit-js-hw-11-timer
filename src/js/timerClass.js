import { getTimeComponents } from './getTimeComponents';

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.intervalId = null;
        this.refs = {
            $days: document.querySelector(`${selector} [data-value="days"]`),
            $hours: document.querySelector(`${selector} [data-value="hours"]`),
            $mins: document.querySelector(`${selector} [data-value="mins"]`),
            $secs: document.querySelector(`${selector} [data-value="secs"]`),
        };
    }

    startCounter() { this.intervalId =
        setInterval(() => {
            const deltaTime = this.targetDate - Date.now();
            this.renderTime(getTimeComponents(deltaTime));
        }, 1000);
    };

    stopTimer() {
        clearInterval(this.intervalId);
    }

    renderTime({ days, hours, mins, secs }) {
        this.refs.$days.innerHTML = days;
        this.refs.$hours.innerHTML = hours;
        this.refs.$mins.innerHTML = mins;
        this.refs.$secs.innerHTML = secs;
      }
}

export { CountdownTimer };