
const button = document.querySelector('.change-color');
const bgColor = document.querySelector('.color');
const bodyElement = document.querySelector('body');

button.addEventListener( 'click', backGroundColorHandler);

function backGroundColorHandler () {
  const colorElement = getRandomHexColor();
  bodyElement.style.backgroundColor = colorElement;
  bgColor.textContent = colorElement;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
