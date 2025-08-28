// Update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  document.getElementById("formMsg").textContent = "Thank you! Your message has been sent.";
  this.reset();
});
