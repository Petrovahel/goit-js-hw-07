function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change_color');
const color = document.querySelector('.color');

button.addEventListener("click", () => {
 const randomColor = getRandomHexColor();
    color.textContent = randomColor;
    document.body.style.backgroundColor = randomColor;
});