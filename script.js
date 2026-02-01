const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const card = document.getElementById("card");
const music = document.getElementById("music");

// Move NO button (mouse + phone)
noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

function moveNo() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 60);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

// YES button
yesBtn.addEventListener("click", () => {
    music.play();

    card.innerHTML = `
        <h1>YAAAY 💐💖</h1>
        <p>You just made my heart happy 🥹 boo boo bear ❤️😙</p>
        <h3>I LOVE YOU, BABE ❤️🌹</h3>
        <img src="photo.jpg" style="width:300px; height:150px;">
    `;

    flowerRain();
});

// Flower rain
function flowerRain() {
    for (let i = 0; i < 120; i++) {
        const f = document.createElement("div");
        f.className = "flower";
        f.innerHTML = "🌸";
        f.style.left = Math.random() * window.innerWidth + "px";
        f.style.animationDuration = (Math.random() * 6 + 5) + "s";
        document.body.appendChild(f);

        setTimeout(() => f.remove(), 10000);
    }
}

// Screenshot scare (not perfect, but fun)
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        alert("HEY 😭 screenshot detected!");
    }
});
