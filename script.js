// Start hearts immediately (background effect)
setInterval(createHeart, 300);

// ---------- YES FLOW ----------
function yes() {
  document.body.innerHTML = `
    <h1>Are you sure? </h1>
    <img src="cat.gif" class="confirmGif">
    <br><br>
    <button onclick="finalYes()"> Yes Pooky 😍</button>
    <button id="noBtn"> I'm joking hahaha </button>
  `;

  // re-hook the dodging behavior because the button was recreated
  attachNoDodge();
}

function finalYes() {
  document.body.innerHTML = `
    <h1>Nyoooommmmmm!!!!!! ❤️</h1>
    <img src="lupo.gif" class="finalGif">
  `;

  // Start popping wolf GIFs after confirmation
  setInterval(popImage, 400);


}

// ---------- NO BUTTON DODGE ----------
function attachNoDodge() {
  const noBtn = document.getElementById("noBtn");
  if (!noBtn) return;

  noBtn.addEventListener("mouseover", () => {
    const rect = noBtn.getBoundingClientRect();
    createTrail(rect.left, rect.top);

    const x = Math.random() * window.innerWidth * 0.8;
    const y = Math.random() * window.innerHeight * 0.8;

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });
}

// Call once for your ORIGINAL page "No" button (if it exists)
attachNoDodge();

// ---------- TRAIL ----------
function createTrail(x, y) {
  const dot = document.createElement("div");
  dot.className = "trail";
  dot.style.left = x + "px";
  dot.style.top = y + "px";
  document.body.appendChild(dot);
  setTimeout(() => dot.remove(), 500);
}

// ---------- FALLING HEARTS ----------
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";

  heart.style.left = Math.random() * window.innerWidth + "px";

  const duration = 3 + Math.random() * 3;
  heart.style.animationDuration = duration + "s";

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), duration * 1000);
}

// ---------- POPPING GIFS ----------
function popImage() {
  const img = document.createElement("img");
  img.src = "dance.gif";
  img.className = "popup";

  img.style.left = Math.random() * (window.innerWidth - 120) + "px";
  img.style.top = Math.random() * (window.innerHeight - 120) + "px";

  document.body.appendChild(img);
  setTimeout(() => img.remove(), 3000);
}




