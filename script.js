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
    if (!topic) return;
    const interest = link.dataset.interest;
    const matchingOption = Array.from(topic.options).find((option) => option.text === interest);
    if (matchingOption) topic.value = matchingOption.value;
    else if (interest === "Parcerias") topic.value = "Parcerias com fabricantes";
    topic.dispatchEvent(new Event("change"));
  });
});

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const topicField = document.querySelector("#topic");
const attachmentField = document.querySelector("#attachment-field");
const attachmentInput = document.querySelector("#attachment");

// Dado demonstrativo: substitua pelo endpoint de um serviço de formulário com suporte a anexos.
// Exemplo: FormSubmit pode receber arquivos via formulário multipart, sujeito às regras do serviço.
const FORM_ENDPOINT = "https://formsubmit.co/SEU_EMAIL_REAL";
const FORM_ENDPOINT_IS_CONFIGURED = !FORM_ENDPOINT.includes("SEU_EMAIL_REAL");

function updateAttachmentVisibility() {
  if (!topicField || !attachmentField) return;
  const selectedOption = topicField.options[topicField.selectedIndex];
  const selectedText = (selectedOption?.textContent || "").trim().toLocaleLowerCase("pt-BR");
  const isQuoteRequest = selectedText.includes("pedido de cotação de preços");
  attachmentField.hidden = !isQuoteRequest;
  attachmentField.setAttribute("aria-hidden", String(!isQuoteRequest));
  if (!isQuoteRequest && attachmentInput) attachmentInput.value = "";
}

if (topicField) {
  topicField.addEventListener("change", updateAttachmentVisibility);
  topicField.addEventListener("input", updateAttachmentVisibility);
  updateAttachmentVisibility();
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    if (!contactForm.reportValidity()) {
      event.preventDefault();
      return;
    }
    const file = attachmentInput?.files?.[0];
    if (file && file.size > 10 * 1024 * 1024) {
      event.preventDefault();
      formStatus.textContent = "O arquivo excede 10 MB. Selecione um arquivo menor.";
      attachmentInput.focus();
      return;
    }
    if (!FORM_ENDPOINT_IS_CONFIGURED) {
      event.preventDefault();
      formStatus.textContent = "Formulário demonstrativo: antes de receber mensagens e anexos, configure o endpoint e o e-mail real no arquivo script.js. O anexo ainda não foi enviado.";
      return;
    }
    contactForm.action = FORM_ENDPOINT;
    contactForm.method = "POST";
    contactForm.enctype = "multipart/form-data";
  });
}
