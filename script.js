const form = document.getElementById('contact-form');
const msg = document.getElementById('form-msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  msg.textContent = "Thank you! Your message has been sent.";
  form.reset();
});
