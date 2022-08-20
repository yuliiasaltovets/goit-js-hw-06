
const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output')
};

console.log(refs);

refs.input.addEventListener('input', onInputChange)
function onInputChange (event) {
    console.log(event.currentTarget.value);
    refs.output.textContent = event.currentTarget.value;

    if (refs.output.textContent === '') {
        refs.output.textContent = 'Anonymous'
    }


}
