const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const message = document.getElementById("message");

// When YES is clicked 💖
yesBtn.addEventListener("click", () => {
  message.innerHTML = "YAYYY 🥹💖<br>Lakshu, you just made me the happiest person alive 😘💞";

  // Confetti effect (simple hearts)
  for (let i = 0; i < 25; i++) {
    createHeart();
  }

  yesBtn.disabled = true;
  noBtn.style.display = "none";
});

// NO button runs away 😈
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// Create floating hearts 💕
function createHeart() {
  const heart = document.createElement("div");
  heart.innerText = "💖";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-20px";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  heart.style.animation = "floatUp 3s linear forwards";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}

// Heart animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-120vh);
    opacity: 0;
  }
}
`;
document.head.appendChild(style);
