// Simple typing effect
const typedText = document.getElementById("typed");
const words = ["aplikasi premium", "suntik sosmed", "aplikasi premium", "suntik sosmed"];
let i = 0, j = 0, currentWord = "", isDeleting = false;

function typeEffect() {
  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      currentWord = words[i].substring(0, j++);
      typedText.textContent = currentWord;
    }
    if (isDeleting && j >= 0) {
      currentWord = words[i].substring(0, j--);
      typedText.textContent = currentWord;
    }
    if (j === words[i].length) isDeleting = true;
    if (j === 0 && isDeleting) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  }
  setTimeout(typeEffect, isDeleting ? 200 : 300);
}
typeEffect();