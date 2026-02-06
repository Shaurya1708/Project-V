document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yes");
  const noBtn = document.getElementById("no");
  const message = document.getElementById("message");

  // YES button 💖
  yesBtn.addEventListener("click", () => {
    message.innerHTML =
      "YAYYY 🥹💖<br>Lakshu, you just made me the happiest person alive 😘💞";

    // Hearts & kisses
    for (let i = 0; i < 20; i++) createHeart();
    for (let i = 0; i < 15; i++) createKiss();

    // Remove buttons after YES
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
  });

  // Move NO button 😈
  function moveNoButton() {
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const x = Math.random() * (window.innerWidth - btnWidth);
    const y = Math.random() * (window.innerHeight - btnHeight);

    noBtn.style.position = "fixed";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  }

  // Desktop + Mobile events
  noBtn.addEventListener("mouseover", moveNoButton);
  noBtn.addEventListener("touchstart", moveNoButton);
  noBtn.addEventListener("click", moveNoButton);

  // 💖 Heart animation
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

  // 😘 Kiss animation
  function createKiss() {
    const kiss = document.createElement("div");
    kiss.innerText = "😘";
    kiss.style.position = "fixed";
    kiss.style.left = Math.random() * 100 + "vw";
    kiss.style.bottom = "-20px";
    kiss.style.fontSize = Math.random() * 22 + 22 + "px";
    kiss.style.animation = "floatUp 3.5s linear forwards";
    document.body.appendChild(kiss);

    setTimeout(() => kiss.remove(), 3500);
  }

  // Animation keyframes
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
});
