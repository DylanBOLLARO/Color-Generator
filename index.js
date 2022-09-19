const target = document.getElementById('target');
const body = document.querySelector('body');

let couleur1;
let couleur2;
let couleur3;
let couleur4;

function decimalToHexString(number)
{
  if (number < 0)
  {
    number = 0xFFFFFFFF + number + 1;
  }

  return number.toString(16).toUpperCase();
}

const loop = () => {

    couleur1 = decimalToHexString(Math.floor(Math.random()*255));
    couleur2 = decimalToHexString(Math.floor(Math.random()*255));
    couleur3 = decimalToHexString(Math.floor(Math.random()*255));
    couleur4 = decimalToHexString(Math.floor(Math.random()*255));

    target.innerHTML =
    `<h3>RGBA  ${couleur1}  ${couleur2}  ${couleur3}  ${couleur4} </h3>`;

    body.style.backgroundColor = '#' + couleur1 + couleur2 + couleur3 + couleur4;

    setTimeout(() => {
        loop();
    }, 750);
  };

  loop();