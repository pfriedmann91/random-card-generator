import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// FUNCION PARA LAS CARTAS
function generateNewCard() {
  const carta = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const pinta = [
      { name: 'corazones', symbol: '♥' },
      { name: 'diamantes', symbol: '♦' },
      { name: 'picas', symbol: '♠' },
      { name: 'tréboles', symbol: '♣' }
  ];

  const randomValue = carta[Math.floor(Math.random() * carta.length)];
  const randomSuit = pinta[Math.floor(Math.random() * pinta.length)];

  const card = document.getElementById('card');
  const topLeft = card.querySelector('.top-left');
  const center = card.querySelector('.center');
  const bottomRight = card.querySelector('.bottom-right');

  card.className = `card ${randomSuit.name}`;

  topLeft.innerHTML = `${randomValue}<br>${randomSuit.symbol}`;
  center.innerHTML = `${randomSuit.symbol}`;
  bottomRight.innerHTML = `${randomValue}<br>${randomSuit.symbol}`;
}


window.onload = function() {
  generateNewCard();
  
//BOTÓN
  const button = document.getElementById('generateButton');
  button.addEventListener('click', generateNewCard);

// TEMPORIZADOR
  setInterval(generateNewCard, 10000);
};