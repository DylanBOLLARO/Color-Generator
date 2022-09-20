const target = document.getElementById("target");
const body = document.querySelector("body");
const inputValue = document.querySelector("input");
const rouge = document.getElementById("rouge");
const vert = document.getElementById("vert");
const bleu = document.getElementById("bleu");
const alpha = document.getElementById("alpha");

let couleur1;
let couleur2;
let couleur3;
let couleur4;
let timer = 1000;

function decimalToHexString(number) {
  if (number < 0) {
    number = 0xffffffff + number + 1;
  }

  return number.toString(16).toUpperCase();
}

const loop = () => {
  couleur1 = decimalToHexString(Math.floor(Math.random() * 255));
  couleur2 = decimalToHexString(Math.floor(Math.random() * 255));
  couleur3 = decimalToHexString(Math.floor(Math.random() * 255));
  couleur4 = decimalToHexString(Math.floor(Math.random() * 255));

  inputValue.addEventListener("input", (e) => {
    timer = e.target.value;
  });

  if (rouge.checked == false) {
    couleur1 = "00";
  }

  if (vert.checked == false) {
    couleur2 = "00";
  }

  if (bleu.checked == false) {
    couleur3 = "00";
  }

  if (alpha.checked == false) {
    couleur4 = "FF";
  }

  target.innerHTML = `<h3>RGBA  ${couleur1}  ${couleur2}  ${couleur3}  ${couleur4} </h3>`;

  body.style.backgroundColor = `#${couleur1}${couleur2}${couleur3}${couleur4}`;

  console.log(`#${couleur1}${couleur2}${couleur3}${couleur4}`);
  setTimeout(() => {
    loop();
  }, timer);
};

loop();
