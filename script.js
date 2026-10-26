const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menu");
    });
  });
}

document.querySelectorAll("[data-interest]").forEach((link) => {
  link.addEventListener("click", () => {
    const topic = document.querySelector("#topic");
    if (topic) {
      const interest = link.dataset.interest;
      const matchingOption = Array.from(topic.options).find((option) => option.text === interest);
      if (matchingOption) topic.value = matchingOption.value;
      else if (interest === "Parcerias") topic.value = "Parcerias com fabricantes";
    }
  });
});

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

/*
 * Configuração necessária antes de publicar:
 * substitua o endereço abaixo pelo e-mail institucional real da Govnex.
 * O formulário usa mailto e não envia nem armazena dados no servidor.
 */
const CONTACT_EMAIL = "contato@seudominio.com.br";

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    if (CONTACT_EMAIL === "contato@seudominio.com.br") {
      formStatus.textContent = "Antes de publicar, configure o e-mail institucional em script.js (CONTACT_EMAIL).";
      return;
    }

    const data = new FormData(contactForm);
    const subject = encodeURIComponent(`[Govnex] ${data.get("topic")}`);
    const body = encodeURIComponent(
      `Nome: ${data.get("name")}\n` +
      `Órgão ou empresa: ${data.get("organization") || "Não informado"}\n` +
      `E-mail: ${data.get("email")}\n` +
      `Assunto: ${data.get("topic")}\n\n` +
      `Mensagem:\n${data.get("message")}`
    );
    formStatus.textContent = "Abrindo seu aplicativo de e-mail...";
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  });
}
