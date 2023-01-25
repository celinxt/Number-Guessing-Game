// Variáveis
const card = document.querySelector(".card");
const card2 = document.querySelector(".card2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let randomNum = Math.round(Math.random() * 10);
let attempts = 1;

// Função Callback
let ifClick = (event) => {
  event.preventDefault();

  let num = document.querySelector("#num");

  if (Number(num.value) == randomNum) {
    card.classList.add("hide");
    card2.classList.remove("hide");
    document.querySelector(
      "#h-2"
    ).innerText = `Acertou em ${attempts} tentativa(s)`;
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

let resetClick = () => {
  card.classList.remove("hide");
  card2.classList.add("hide");
  attempts = 1;
  randomNum = Math.round(Math.random() * 10);
};

// Eventos
btnTry.addEventListener("click", ifClick);
btnReset.addEventListener("click", resetClick);
document.addEventListener("keydown", function (e) {
  if (e.key == "Enter" && card.classList.contains("hide")) {
    resetClick();
  }
});
