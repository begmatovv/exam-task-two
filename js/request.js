// api
const api = "https://api.adviceslip.com/advice/ ";
const btn = document.getElementById("btn");

const text = document.getElementById("text");
const number = document.getElementById("advice-number");
let randomNum = Math.trunc(Math.random() * 224) + 1;
function updateUI(info) {
  text.textContent = info.slip.advice;
  number.textContent = info.slip.id;
}

function getData(api) {
  fetch(api)
    .then((data) => data.json())
    .then((data) => updateUI(data))
    .catch((error) => {});
}
getData(api + randomNum);

btn.addEventListener("click", () => {
  randomNum = Math.trunc(Math.random() * 224) + 1;
  const api = "https://api.adviceslip.com/advice/" + randomNum;

  getData(api);
});
