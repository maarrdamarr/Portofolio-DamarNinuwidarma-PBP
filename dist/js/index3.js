// Tahun footer
document.getElementById("y").textContent = new Date().getFullYear();

// Toggle nav (mobile)
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
navToggle?.addEventListener("click", () => {
  if (!nav) return;
  const showing = nav.style.display === "block";
  nav.style.display = showing ? "none" : "block";
});

// Smooth scroll sederhana untuk anchor dalam halaman
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const id = a.getAttribute("href");
    const el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Handler form kontak (dummy, tanpa backend)
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

form?.addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(form);
  const nama = data.get("nama");
  formMsg.textContent = `Terima kasih, ${nama}! Pesanmu sudah kami terima.`;
  form.reset();
});
