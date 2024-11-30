document.addEventListener("DOMContentLoaded", function () {
  // Fetch and dynamically load the navbar
  fetch("/navbar")
    .then((response) => response.text())
    .then((html) => {
      // Insert navbar HTML into the DOM
      document.getElementById("navbar").innerHTML = html;

      // Sidebar functionality starts here (after navbar is loaded)
      const hamburgerMenu = document.getElementById("hamburger-menu");
      const sidebar = document.getElementById("sidebar");
      const overlay = document.getElementById("overlay");

      if (hamburgerMenu && sidebar) {
        // Open the sidebar
        hamburgerMenu.addEventListener("click", () => {
          sidebar.classList.add("show");
          if (overlay) overlay.classList.add("show");
        });

        // Close the sidebar when clicking the overlay
        if (overlay) {
          overlay.addEventListener("click", () => {
            sidebar.classList.remove("show");
            overlay.classList.remove("show");
          });
        }
      }
    })
    .catch((error) => console.error("Error loading navbar:", error));

  // Fetch and dynamically load the footer
  fetch("/footer")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("footer").innerHTML = html;
    })
    .catch((error) => console.error("Error loading footer:", error));

  // Modal functionality for the contact button
  const contactButton = document.querySelector("#contactBtn");
  const modal = document.querySelector("#contactModal");
  const closeModal = document.querySelector("#closeModal");

  // Open modal
  if (contactButton) {
    contactButton.addEventListener("click", () => {
      if (modal) modal.style.display = "flex";
    });
  }

  // Close modal
  if (closeModal) {
    closeModal.addEventListener("click", () => {
      if (modal) modal.style.display = "none";
    });
  }

  // Close modal when clicking outside of it
  window.addEventListener("click", (event) => {
    if (modal && event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Form submission functionality for the contact form
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("form-success");
  const errorMessage = document.getElementById("form-error");

  if (form) {
    form.addEventListener("submit", async function (event) {
      event.preventDefault(); // Prevent default form submission

      const formData = new FormData(form); // Collect form data

      try {
        // Make the POST request to Formspree
        const response = await fetch("https://formspree.io/f/xrbgyalp", {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        });

        if (response.ok) {
          // If response is successful
          if (successMessage) successMessage.style.display = "block"; // Show success message
          if (errorMessage) errorMessage.style.display = "none"; // Hide error message
          form.reset(); // Clear form inputs
        } else {
          // If response is not successful
          throw new Error("Form submission failed");
        }
      } catch (error) {
        // Handle errors
        if (successMessage) successMessage.style.display = "none"; // Hide success message
        if (errorMessage) errorMessage.style.display = "block"; // Show error message
      }
    });
  }

  // Collapsible sections functionality
  const collapsibleHeaders = document.querySelectorAll(".collapsible-header");

  collapsibleHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      // Toggle the "active" class for the clicked header
      header.classList.toggle("active");

      // Toggle the visibility of the content
      const content = header.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });
});