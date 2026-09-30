// =========================================================
// SOLARMAIS - INTERAÇÕES
// =========================================================

const nav = document.querySelector(".nav");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav-links a");

menuToggle?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

// ---------------------------------------------------------
// FORMULÁRIO
// IMPORTANTE:
// Troque o número abaixo pelo WhatsApp real da SolarMais.
// Formato: 55 + DDD + número, somente números.
// Exemplo: 5519999999999
// ---------------------------------------------------------

const WHATSAPP_NUMBER = "551998843-5369";

const form = document.getElementById("contactForm");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);

  const nome = data.get("nome");
  const whatsapp = data.get("whatsapp");
  const tipo = data.get("tipo");
  const mensagem = data.get("mensagem");

  const text =
`Olá, SolarMais! Quero saber mais sobre energia solar.

Nome: ${nome}
WhatsApp: ${whatsapp}
Tipo de projeto: ${tipo}
Mensagem: ${mensagem || "Gostaria de receber mais informações."}`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");
});

// ---------------------------------------------------------
// ANIMAÇÃO SUAVE AO ENTRAR NA TELA
// ---------------------------------------------------------

const animatedElements = document.querySelectorAll(
  ".solution-card, .process-item, .benefit, .stat"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

animatedElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(18px)";
  element.style.transition = "opacity .6s ease, transform .6s ease";
  observer.observe(element);
});

const animationStyle = document.createElement("style");
animationStyle.textContent = `
  .solution-card.visible,
  .process-item.visible,
  .benefit.visible,
  .stat.visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(animationStyle);
