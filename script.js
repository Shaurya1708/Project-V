const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const message = document.getElementById("message");

// YES button 💖
yesBtn.addEventListener("click", () => {
  message.innerHTML =
    "YAYYY 🥹💖<br>Lakshu, you just made me the happiest person alive 😘💞";

  for (let i = 0; i < 30; i++) {
    createHeart();
  }

  yesBtn.disabled = true;
  noBtn.style.display = "none";
});

// Function to move NO button 😈
function moveNoButton() {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const x = Math.random() * (window.innerWidth - btnWidth);
  const y = Math.random() * (window.innerHeight - btnHeight);

  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Mobile + Desktop events
noBtn.addEventListener("mouseover", moveNoButton);   // desktop
noBtn.addEventListener("touchstart", moveNoButton); // mobile
noBtn.addEventListener("click", moveNoButton);      // extra safety

// Hearts animation 💕
function createHeart() {
  const heart = document.createElement("div");
  heart.innerText = "💖";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-20px";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  heart.style.animation = "floatUp 3s linear forwards";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 3000);
}

// Heart float animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-120vh); opacity: 0; }
}
`;
document.head.appendChild(style);
