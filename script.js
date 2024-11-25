// Modal Behavior
const contactModal = document.getElementById("contactModal");
const contactBtn = document.getElementById("contactBtn");
const closeModal = document.getElementById("closeModal");

// Open Modal
contactBtn.addEventListener("click", () => {
  contactModal.style.display = "flex";
});

// Close Modal
closeModal.addEventListener("click", () => {
  contactModal.style.display = "none";
});

// Close Modal When Clicking Outside
window.addEventListener("click", (e) => {
  if (e.target === contactModal) {
    contactModal.style.display = "none";
  }
});