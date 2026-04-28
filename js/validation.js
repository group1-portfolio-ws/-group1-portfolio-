// Form validation for the contact section
const btn      = document.getElementById('submit-btn');
const feedback = document.getElementById('form-feedback');

btn.addEventListener('click', () => {
  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Clear previous feedback
  feedback.textContent = '';
  feedback.className   = 'form-feedback';

  if (!name || !email || !message) {
    feedback.textContent = '⚠️ Please fill in all fields.';
    feedback.classList.add('error');
    return;
  }

  const emailOK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOK) {
    feedback.textContent = '⚠️ Please enter a valid email address.';
    feedback.classList.add('error');
    return;
  }

  feedback.textContent = '✅ Message sent! I\'ll get back to you soon.';
  feedback.classList.add('success');
});