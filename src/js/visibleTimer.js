const refs = {
    startBtn: document.querySelector('.js-showBtn'),
    timerCont: document.querySelector('#timer-1'),
    stopBtn: document.querySelector('.js-stopBtn'),
}

function showTimer() {
    refs.timerCont.classList.add('is-open');
    console.log('done');
}

export { refs, showTimer };
