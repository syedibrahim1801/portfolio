// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close menu when link clicked (mobile)
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

// Simple contact form handler (front-end only)
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formStatus.textContent = "Thank you! Your message has been recorded (demo).";
  contactForm.reset();

  setTimeout(() => {
    formStatus.textContent = "";
  }, 4000);
});

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        status.textContent = "✅ Message sent successfully!";
        status.style.color = "green";
        form.reset();
      } else {
        status.textContent = "❌ Failed to send message.";
        status.style.color = "red";
      }
    } catch (error) {
      status.textContent = "❌ Network error. Try again.";
      status.style.color = "red";
    }
  });
