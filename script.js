// Get modal elements
const contactModal = document.getElementById("contactModal");
const contactBtn = document.getElementById("contactBtn");
const closeModal = document.getElementById("closeModal");

// Show the modal when "Contact" button is clicked
contactBtn.addEventListener("click", () => {
  contactModal.style.display = "flex";
});

// Close the modal when "×" is clicked
closeModal.addEventListener("click", () => {
  contactModal.style.display = "none";
});

// Close the modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === contactModal) {
    contactModal.style.display = "none";
  }
});


// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Get the current page's file name (e.g., 'index.html', 'projects.html')
  const currentPage = window.location.pathname.split("/").pop();

  // Map file names to nav link IDs
  const navMap = {
    "index.html": "nav-home",
    "projects.html": "nav-projects",
    "about.html": "nav-about",
    "resume.html": "nav-resume",
    "contact.html": "nav-contact",
  };

  // Get the nav link ID for the current page
  const currentNavId = navMap[currentPage];

  // Add the 'active' class to the current page's nav link
  if (currentNavId) {
    const currentNavLink = document.getElementById(currentNavId);
    if (currentNavLink) {
      currentNavLink.classList.add("active");
    }
  }
});