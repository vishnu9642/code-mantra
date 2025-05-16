document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const responseDiv = document.getElementById('form-response');

  // Simulate form response
  responseDiv.innerHTML = `<p>Thank you, <strong>${name}</strong>. We’ll contact you at <strong>${email}</strong> soon!</p>`;
  this.reset();
});

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}