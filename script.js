// Countdown Timer (Set to Dec 19, 2026 11:30:00)
const weddingDate = new Date("December 19, 2026 11:30:00").getTime();

const timer = setInterval(function () {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML =
            "<p style='color: var(--accent-light); font-size: 1.2rem;'>Alhamdulillah, the celebrations have begun!</p>";
        return;
    }

    document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);

// RSVP Form Submission Handler
document.getElementById("rsvpForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("rsvp-message").style.display = "block";
    this.reset();
});

// Falling Cherry Blossom Petals
(function createCherryBlossoms() {
    const container = document.getElementById("petalsContainer");
    if (!container) return;

    const isMobile = window.innerWidth < 600;
    const petalCount = isMobile ? 16 : 28;

    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement("span");
        petal.className = "petal";

        const size = Math.random() * 8 + 10; // 10px to 18px
        const leftPos = Math.random() * 100; // 0% to 100% width
        const fallDuration = Math.random() * 6 + 7; // 7s to 13s
        const swayDuration = Math.random() * 3 + 2.5; // 2.5s to 5.5s
        const delay = -(Math.random() * fallDuration); // Start mid-fall on load

        petal.style.width = `${size}px`;
        petal.style.height = `${size * 0.75}px`;
        petal.style.left = `${leftPos}%`;
        petal.style.animationDuration = `${fallDuration}s, ${swayDuration}s`;
        petal.style.animationDelay = `${delay}s, ${delay}s`;

        container.appendChild(petal);
    }
})();