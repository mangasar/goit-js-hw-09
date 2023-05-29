const refs = {
  formEl: document.querySelector('.form'),
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

refs.formEl.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();

  const { delay, step, amount } = event.target.elements;
  let delayEl = parseInt(delay.value);
  let stepEl = parseInt(step.value);

  for (let i = 0; i <= amount.value; i++) {
    createPromise(i, delayEl)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayEl += stepEl;
  }
}