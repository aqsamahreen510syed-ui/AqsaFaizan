document.addEventListener("DOMContentLoaded", () => {
    const gateOverlay = document.getElementById("gateOverlay");

    if (gateOverlay) {
        document.body.classList.add("gate-locked");

        const triggerBlossomBurst = () => {
            const petalCount = 40;

            for (let i = 0; i < petalCount; i++) {
                const petal = document.createElement("div");
                petal.classList.add("burst-petal");

                // Spread evenly in a 360-degree circle with slight randomness
                const angle = (i / petalCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
                const distance = 110 + Math.random() * 270; // px outward
                const tx = Math.cos(angle) * distance;
                const ty = Math.sin(angle) * distance;
                const rot = Math.floor(Math.random() * 720 - 360);
                const size = 11 + Math.random() * 10;

                petal.style.width = `${size}px`;
                petal.style.height = `${size * 0.75}px`;
                petal.style.setProperty("--tx", `${tx}px`);
                petal.style.setProperty("--ty", `${ty}px`);
                petal.style.setProperty("--rot", `${rot}deg`);
                petal.style.animationDelay = `${Math.random() * 0.08}s`;

                document.body.appendChild(petal);

                setTimeout(() => {
                    petal.remove();
                }, 1450);
            }
        };

        const openInvitation = () => {
            if (gateOverlay.classList.contains("opened")) return;

            triggerBlossomBurst();

            gateOverlay.classList.add("opened");
            document.body.classList.remove("gate-locked");
            document.body.classList.add("gate-open");

            setTimeout(() => {
                gateOverlay.remove();
            }, 1500);
        };

        gateOverlay.addEventListener("click", openInvitation);
        gateOverlay.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openInvitation();
            }
        });
    }
});
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