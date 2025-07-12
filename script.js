// Typing Animation
const texts = ["Frontend Developer", "Lifelong Learner", "Future Full-Stack Engineer"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
const typingElement = document.getElementById('typing-text');

(function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  typingElement.textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500);
  } else {
    setTimeout(type, 100);
  }
})();

// Theme Toggle
const themeBtn = document.getElementById('toggle-theme');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});
