document.addEventListener("DOMContentLoaded", () => {
    const gateOverlay = document.getElementById("gateOverlay");
    const revealElements = document.querySelectorAll(".reveal");

    const showVisibleElements = () => {
        revealElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.96) {
                el.classList.add("is-visible");
            }
        });
    };

    if ("IntersectionObserver" in window && revealElements.length > 0) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.05,
                rootMargin: "0px 0px -10px 0px"
            }
        );

        revealElements.forEach((el) => observer.observe(el));
        window.addEventListener("scroll", showVisibleElements, { passive: true });
    } else {
        revealElements.forEach((el) => el.classList.add("is-visible"));
    }

    if (gateOverlay) {
        document.body.classList.add("gate-locked");
        let isOpened = false;

        const triggerBlossomBurst = () => {
            const isMobile = window.innerWidth < 600;
            const petalCount = isMobile ? 26 : 40;

            for (let i = 0; i < petalCount; i++) {
                const petal = document.createElement("div");
                petal.classList.add("burst-petal");

                const angle = (i / petalCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
                const distance = (isMobile ? 80 : 110) + Math.random() * (isMobile ? 160 : 270);
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

        const openInvitation = (e) => {
            if (e && e.type === "touchend") {
                e.preventDefault();
            }
            if (isOpened) return;
            isOpened = true;

            triggerBlossomBurst();

            gateOverlay.classList.add("opened");
            document.body.classList.remove("gate-locked");
            document.body.classList.add("gate-open");

            setTimeout(showVisibleElements, 600);

            setTimeout(() => {
                gateOverlay.remove();
            }, 1750);
        };

        // Both touchend (instant mobile tap) and click (desktop/fallback)
        gateOverlay.addEventListener("touchend", openInvitation, { passive: false });
        gateOverlay.addEventListener("click", openInvitation);
        gateOverlay.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openInvitation(e);
            }
        });
    }
});

// Countdown Timer (Set to Dec 21, 2026 20:30:00 - Nikah After Isha)
const weddingDate = new Date("December 21, 2026 20:30:00").getTime();

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

        const size = Math.random() * 8 + 10;
        const leftPos = Math.random() * 100;
        const fallDuration = Math.random() * 6 + 7;
        const swayDuration = Math.random() * 3 + 2.5;
        const delay = -(Math.random() * fallDuration);

        petal.style.width = `${size}px`;
        petal.style.height = `${size * 0.75}px`;
        petal.style.left = `${leftPos}%`;
        petal.style.animationDuration = `${fallDuration}s, ${swayDuration}s`;
        petal.style.animationDelay = `${delay}s, ${delay}s`;

        container.appendChild(petal);
    }
})();