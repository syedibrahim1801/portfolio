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

// Contact form: submit via Web3Forms (AJAX)
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      headers: {
        // Ensures Web3Forms returns JSON instead of an HTML redirect
        Accept: "application/json",
      },
      body: formData,
    });

    const result = await response.json();

    if (result && result.success) {
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
