// Wait for the DOM content to fully load before running any script
document.addEventListener("DOMContentLoaded", function() {
  // Modal functionality for Contact button
  const contactTrigger = document.getElementById('contactTrigger');
  const contactModal = document.getElementById('contactModal');
  const closeModal = document.getElementById('closeModal');

  // Open modal when Contact is clicked
  if (contactTrigger) {
      contactTrigger.addEventListener('click', (e) => {
          e.preventDefault(); // Prevent default link behavior
          contactModal.style.display = 'block'; // Show the modal
      });
  }

  // Close modal when the close button is clicked
  if (closeModal) {
      closeModal.addEventListener('click', () => {
          contactModal.style.display = 'none'; // Hide the modal
      });
  }

  // Close modal when clicking outside of the modal content
  window.addEventListener('click', (e) => {
      if (e.target === contactModal) {
          contactModal.style.display = 'none'; // Hide the modal
      }
  });

  // Load the navbar content from navbar.html
  fetch("/navbar")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("navbar").innerHTML = html;
    })
    .catch((error) => console.error("Error loading navbar:", error));

  // Load the footer content from footer.html
  fetch("/footer")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("footer").innerHTML = html;
    })
    .catch((error) => console.error("Error loading footer:", error));

  // Get the current page's file name (e.g., 'index.html', 'projects.html')
  const currentPage = window.location.pathname.split("/").pop();

  // Map file names to nav link IDs
  const navMap = {
    "/index": "nav-home",
    "/projects": "nav-projects",
    "/about": "nav-about",
    "/resume": "nav-resume",
    "/contact": "nav-contact"
  };

  // Highlight the active navigation link
  const currentNavId = navMap[currentPage];
  if (currentNavId) {
    const currentNavLink = document.getElementById(currentNavId);
    if (currentNavLink) {
      currentNavLink.classList.add("active");
    }
  }

  // Hamburger Menu Functionality for Mobile
  const hamburger = document.getElementById("hamburger-menu");
  const navLinks = document.getElementById("nav-links");

  if (hamburger) {
      hamburger.addEventListener("click", function() {
          navLinks.classList.toggle("show"); // Toggle the visibility of nav links on mobile
      });
  }
});
