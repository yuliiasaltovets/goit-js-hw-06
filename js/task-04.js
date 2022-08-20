

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const spanValue = document.querySelector('button[data-action="increment"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

btnDecrement.addEventListener('click', onBtnDecrementClick);
btnIncrement.addEventListener('click', onBtnIncrementClick);

let counterValue = 0;

function onBtnDecrementClick (){
    counterValue -= 1;
    console.log(counterValue);
    spanValue.textContent = counterValue;
}

function onBtnIncrementClick (){
    counterValue += 1;
    console.log(counterValue);
    spanValue.textContent = counterValue;
}