// Aşk Başlangıç Tarihi: 1 Şubat 2026
// (Yıl, Ay-1, Gün) -> Ocak 0, Şubat 1'dir.
const startDate = new Date(2026, 1, 1, 0, 0, 0).getTime();

function updateTimer() {
    const now = new Date().getTime();
    const diff = now - startDate;

    const timerElement = document.getElementById("timer");
    if (!timerElement) return;

    if (diff < 0) {
        timerElement.innerText = "Süre Bekleniyor...";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const pad = (n) => n < 10 ? "0" + n : n;

    timerElement.innerText = `${days} Gün ${pad(hours)} Saat ${pad(minutes)} Dakika ${pad(seconds)} Saniye`;
}

// Her saniye güncelle
setInterval(updateTimer, 1000);
// Sayfa açılır açılmaz çalıştır
updateTimer();

// Kalp Yağmuru
function createHeart() {
    const container = document.getElementById("heart-particles");
    if (!container) return;
    const h = document.createElement("div");
    h.className = "falling-heart";
    h.innerHTML = "❤";
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = (Math.random() * 10 + 15) + "px";
    h.style.animationDuration = (Math.random() * 3 + 3) + "s";
    h.style.opacity = Math.random() * 0.6 + 0.3;
    container.appendChild(h);
    setTimeout(() => h.remove(), 6000);
}
setInterval(createHeart, 400);
