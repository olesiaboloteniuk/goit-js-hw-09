import Notiflix, { Notify } from 'notiflix';
const form = document.querySelector(".form")

function createPromise(position, delay) {
	const shouldResolve = Math.random() > 0.3;
	const data = {
		position,
		delay,
	};
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (shouldResolve) {
				resolve(data);
			} else {
				reject(data);
	
			}
		}, delay);
	});
}
function handleSubmit(event) {
	event.preventDefault();
    let delay = Number(event.currentTarget.elements.delay.value);
	const step = Number(event.currentTarget.elements.step.value);
	const amount = Number(event.currentTarget.elements.amount.value);

	for (let position = 1; position <= amount; position++) {
		createPromise(position, delay)
			.then(({ position, delay }) => {
				Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
					timeout: 5000,
					width: '300px',
				})
			})
			
		.catch (({position, delay}) => Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
					timeout: 5000,
					width: '300px',
		})
				);
		delay += step;
	}
}

form.addEventListener('submit', handleSubmit)


// return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			if (shouldResolve) {
// 				resolve(Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
// 					timeout: 5000,
// 					width: '300px'
// 				}));
// 			} else {
// 				reject(Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
// 					timeout: 5000,
// 					width: '300px'
// 				})
// 			);
	
// 			}
// 		}, delay);
// 	});