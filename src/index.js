import './sass/main.scss';

import { CountdownTimer } from './js/timerClass';
import { refs, showTimer } from './js/visibleTimer'


const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Dec 4, 2020'),
  });

timer.startCounter();

refs.startBtn.addEventListener('click', showTimer, {once: true});
refs.stopBtn.addEventListener('click', timer.stopTimer.bind(timer), {once: true});