const cores = {
  green: '#00FF00',
  red: '#FF0000',
  blue: '#0000FF',
};

const btn = document.getElementById('btn');
const coresNome = document.querySelector('.cores');

btn.addEventListener('click', function () {
  const randomNumber = getRandomNumber();
  const corAleatoria = Object.keys(cores)[randomNumber];
  document.body.style.backgroundColor = corAleatoria;
  coresNome.textContent = cores[corAleatoria];
});

function getRandomNumber() {
  return Math.floor(Math.random() * Object.keys(cores).length);
}

