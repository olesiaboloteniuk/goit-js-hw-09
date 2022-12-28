
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let input = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('button[data-start]');
const day = document.querySelector('[data-days]');
const hour = document.querySelector('[data-hours]');
const min = document.querySelector('[data-minutes]');
const sec = document.querySelector('[data-seconds]');

buttonStart.disabled = true;
const date = new Date();
input.value = date;

const options = {
  enableTime: true,
  qtime_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
		window.alert('Please choose a date in the future');
		return
    }
    buttonStart.disabled = false;
  },
};

flatpickr(input, options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
function startTime() {
  setInterval(() => {
    const timer = new Date(input.value) - new Date();
    if (timer < 0) {
      return;
    }
    const { days, hours, minutes, seconds } = convertMs(timer);
    day.textContent = days;
    hour.textContent = hours;
    min.textContent = minutes;
    sec.textContent = seconds;
  }, 1000);
}

buttonStart.addEventListener('click', startTime);