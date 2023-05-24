const wordSpan = document.getElementById('word-span');
const word = ['WEBSITE', 'LANDING PAGE', 'ART PORTFOLIO', 'QR-MENU', 'E-COMMERCE'];
let i = 0;
let index = 0;
const cicleWords = setInterval(() =>{
  wordSpan.textContent = word[index]
  index++;
  if (index >= word.length) {
    index = 0;
  }
  wordSpan.style.opacity = '1';
}, 3000);

