const  startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId = null;



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function startColorChange  () {
  timerId = setInterval(() => {
body.style.backgroundColor = getRandomHexColor();
  }, 1000);
	startBtn.setAttribute('disabled', true);
};


function stopColorChange ()  {
  clearInterval(timerId);
	startBtn.removeAttribute("disabled");
};

startBtn.addEventListener('click', startColorChange);
stopBtn.addEventListener('click', stopColorChange);
