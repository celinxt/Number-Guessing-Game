const card = document.querySelector(".card");
const cardTwo = document.querySelector(".card-two");
const btnTry = document.querySelector("#btn-try");
const btnReset = document.querySelector("#btn-reset");
let randomNum = Math.round(Math.random() * 10);
let attempts = 1;

// Functions
let toggleScreen = () => {
  card.classList.toggle("hide");
  cardTwo.classList.toggle("hide");
};

let handleClick = (event) => {
  event.preventDefault();
  const num = document.querySelector("#input-try");

  if (Number(num.value) == randomNum) {
    toggleScreen();
    cardTwo.querySelector(
      "h3"
    ).innerText = `Acertou em ${attempts} tentativa(s)!`;
  }

  if (
    Number(num.value) < 0 ||
    Number(num.value) > 10 ||
    (!Number(num.value) && Number(num.value) != 0)
  ) {
    alert("Por favor, insira um número de 0 a 10!");
  }

  num.value = "";
  attempts++;
};

let retryClick = () => {
  toggleScreen();
  attempts = 1;
  randomNum = Math.round(Math.random() * 10);
};

// Events
btnTry.addEventListener("click", handleClick);
btnReset.addEventListener("click", retryClick);

document.addEventListener("keydown", (e) => {
  if (e.key == "Enter" && card.classList.contains("hide")) {
    retryClick();
  }
});
