

const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', inputColorChanger);
function inputColorChanger(event) {
  const inputEl = event.currentTarget;
  const inputDataLength = Number(inputEl.dataset.length);
 
  if (inputEl.value.length === inputDataLength) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
}

