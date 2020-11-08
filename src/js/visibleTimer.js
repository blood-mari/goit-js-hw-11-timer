import { getTimeComponents } from './getTimeComponents';

const refs = {

    timerCont: document.querySelector('#timer-1'),
    stopBtn: document.querySelector('.js-stopBtn'),
}

function showTimer() {
    refs.timerCont.classList.add('is-open');
}

export { refs, showTimer };
