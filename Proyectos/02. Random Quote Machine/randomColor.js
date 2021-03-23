import getQoute from "./randomQuote.js";

const url = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
const bckColor = document.querySelectorAll(".bck-color");
const txtColor = document.querySelectorAll(".txt-color");
const txtWait = document.querySelector(".txt-wait");
console.log(txtWait);

function randomHex() {
  const color = Array.from(
    { length: 6 },
    () => hex[Math.floor(Math.random() * hex.length)]
  ).join("");
  return `#${color}`;
}

const aplyColor = () => {
  const color = randomHex();
  bckColor.forEach((element) => (element.style.background = color));
  txtColor.forEach((element) => {
    element.style.color = color;
  });
  txtWait.style.opacity = "0";
  txtWait.style.color = color;
  setTimeout(async () => {
    const quote = await getQoute(url);
    txtWait.style.opacity = "1";
  }, 600);
};

export default aplyColor;
