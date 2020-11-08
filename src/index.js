import './sass/main.scss';

import { CountdownTimer, refs } from './js/timerClass';


const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Dec 4, 2020'),
  });

// timer.startCounter();

refs.startBtn.addEventListener('click', timer.showTimer.bind(timer));

refs.stopBtn.addEventListener('click', timer.stopTimer.bind(timer));