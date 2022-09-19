const target = document.getElementById('target');
const body = document.querySelector('body');
const inputValue = document.querySelector('input');

let couleur1;
let couleur2;
let couleur3;
let couleur4;
let timer = 1000;

function decimalToHexString(number)
{
  if (number < 0){
    number = 0xFFFFFFFF + number + 1;
  }

  return number.toString(16).toUpperCase();
}

const loop = () => {

    couleur1 = decimalToHexString(Math.floor(Math.random()*255));
    couleur2 = decimalToHexString(Math.floor(Math.random()*255));
    couleur3 = decimalToHexString(Math.floor(Math.random()*255));
    couleur4 = decimalToHexString(Math.floor(Math.random()*255));

    inputValue.addEventListener("input", (e) => {
        timer = e.target.value
      });

    target.innerHTML =
    `<h3>RGBA  ${couleur1}  ${couleur2}  ${couleur3}  ${couleur4} </h3>`;

    body.style.backgroundColor = '#' + couleur1 + couleur2 + couleur3 + couleur4;

    setTimeout(() => {
        loop();
    }, timer);
  };

loop();

