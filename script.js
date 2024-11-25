// Get elements
const contactTrigger = document.getElementById('contactTrigger');
const contactModal = document.getElementById('contactModal');
const closeModal = document.getElementById('closeModal');

// Open modal when Contact is clicked
contactTrigger.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default link behavior
  contactModal.style.display = 'block'; // Show the modal
});

// Close modal when the close button is clicked
closeModal.addEventListener('click', () => {
  contactModal.style.display = 'none'; // Hide the modal
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', (e) => {
  if (e.target === contactModal) {
    contactModal.style.display = 'none'; // Hide the modal
  }
});


  document.addEventListener("DOMContentLoaded", () => {
    // Get the current page's file name (e.g., 'index.html', 'projects.html')
    const currentPage = window.location.pathname.split("/").pop();
  
    // Map file names to nav link IDs
    const navMap = {
      "index.html": "nav-home",
      "projects.html": "nav-projects",
      "about.html": "nav-about",
      "resume.html": "nav-resume",
    };
  
    // Highlight the active navigation link
    const currentNavId = navMap[currentPage];
    if (currentNavId) {
      const currentNavLink = document.getElementById(currentNavId);
      if (currentNavLink) {
        currentNavLink.classList.add("active");
      }
    }
  
    // Handle "Contact" modal functionality
    const contactButton = document.getElementById("nav-contact");
    const contactModal = document.getElementById("contactModal");
    const closeModalButton = document.getElementById("closeModal");
  
    if (contactButton && contactModal) {
      contactButton.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent adding '#' to the URL
        contactModal.style.display = "flex"; // Show the modal
      });
  
      // Close the modal when clicking the close button
      if (closeModalButton) {
        closeModalButton.addEventListener("click", () => {
          contactModal.style.display = "none"; // Hide the modal
        });
      }
  
      // Close the modal when clicking outside the modal content
      contactModal.addEventListener("click", (e) => {
        if (e.target === contactModal) {
          contactModal.style.display = "none"; // Hide the modal
        }
      });
    }
  });