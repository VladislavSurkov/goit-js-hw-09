const btmStart = document.querySelector('button[data-start]');
const btmStop = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

btmStop.disabled = true;
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onBtmClickStart() {
  btmStart.disabled = true;
  btmStop.disabled = false;

  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onBtmClickStop() {
  btmStart.disabled = false;
  btmStop.disabled = true;

  clearInterval(timerId);
}

btmStart.addEventListener('click', onBtmClickStart);
btmStop.addEventListener('click', onBtmClickStop);
