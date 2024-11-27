document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const successMessage = document.getElementById("form-success");
    const errorMessage = document.getElementById("form-error");
  
    form.addEventListener("submit", async function (event) {
      event.preventDefault(); // Prevent the default form submission
  
      const formData = new FormData(form); // Collect form data
  
      try {
        const response = await fetch("https://formspree.io/f/xrbgyalp", {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        });
  
        if (response.ok) {
          successMessage.style.display = "block"; // Show success message
          errorMessage.style.display = "none"; // Hide error message
          form.reset(); // Clear form inputs
        } else {
          throw new Error("Form submission failed");
        }
      } catch (error) {
        successMessage.style.display = "none"; // Hide success message
        errorMessage.style.display = "block"; // Show error message
      }
    });
  
    // Load Navbar
    fetch("navbar.html")
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("navbar").innerHTML = html;
      })
      .catch((error) => console.error("Error loading navbar:", error));
  
    // Load Footer
    fetch("footer.html")
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("footer").innerHTML = html;
      })
      .catch((error) => console.error("Error loading footer:", error));
  });