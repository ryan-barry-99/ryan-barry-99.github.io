document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("form-success");
  const errorMessage = document.getElementById("form-error");

  form.addEventListener("submit", async function (event) {
      event.preventDefault(); // Prevent the default form submission

      const formData = new FormData(form); // Collect form data

      try {
          // Make the POST request to Formspree
          const response = await fetch("https://formspree.io/f/xrbgyalp", {
              method: "POST",
              headers: { Accept: "application/json" },
              body: formData,
          });

          if (response.ok) {
              // If the response is successful
              successMessage.style.display = "block"; // Show success message
              errorMessage.style.display = "none"; // Hide error message
              form.reset(); // Clear form inputs
          } else {
              // If the response is not successful
              throw new Error("Form submission failed");
          }
      } catch (error) {
          // Handle errors
          successMessage.style.display = "none"; // Hide success message
          errorMessage.style.display = "block"; // Show error message
      }
  });
});