// Get modal elements
const contactModal = document.getElementById("contactModal");
const contactBtn = document.getElementById("contactBtn");
const closeModal = document.getElementById("closeModal");

// Show the modal when "Contact" button is clicked
contactBtn.addEventListener("click", () => {
  contactModal.style.display = "flex";
});

// Close the modal when "x" is clicked
closeModal.addEventListener("click", () => {
  contactModal.style.display = "none";
});

// Close the modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === contactModal) {
    contactModal.style.display = "none";
  }
});