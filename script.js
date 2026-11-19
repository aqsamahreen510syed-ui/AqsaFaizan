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