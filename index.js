// Function to toggle classes for menu open/close
function toggleClass(element, className, action = 'toggle') {
  if (element) {
    element.classList[action](className);
  }
}

// Function to toggle the menu
function toggleMenu() {
  const menuIcon = document.querySelector(".menu-icon");
  const overlay = document.getElementById("overlay");
  const navLinks = document.getElementById("navLinks");
  const body = document.querySelector("body");

  toggleClass(menuIcon, 'open');
  toggleClass(navLinks, 'open');
  toggleClass(overlay, 'open');
  toggleClass(body, 'nav-open');
}

// Function to close the menu
function closeMenu() {
  const menuIcon = document.querySelector(".menu-icon");
  const overlay = document.getElementById("overlay");
  const navLinks = document.getElementById("navLinks");
  const body = document.querySelector("body");

  toggleClass(menuIcon, 'open', 'remove');
  toggleClass(navLinks, 'open', 'remove');
  toggleClass(overlay, 'open', 'remove');
  toggleClass(body, 'nav-open', 'remove');
}

// JavaScript to toggle the blue background color on menu icon click
document.querySelector(".menu-icon").addEventListener("click", function () {
  document.body.classList.toggle("blue-background");
});

// Function to scroll to the next section
function scrollToNextPage() {
  const nextSection = document.getElementById("next");
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Event listeners for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the anchor tag with class "nav-link" for the resume
  const resumeLink = document.querySelector('.nav-links a[href*="resume"]');
  
  // Add click event listener to the resume anchor tag
  if (resumeLink) {
    resumeLink.addEventListener("click", function (event) {
      const confirmDownload = confirm("Do you want to download my resume?");
      if (!confirmDownload) {
        event.preventDefault(); // Prevent default action (i.e., following the link)
      }
    });
  }

  // Set the height of the overlay and navigation links
  const contentHeight = document.getElementById("content")?.offsetHeight;
  if (contentHeight) {
    document.getElementById("overlay").style.height = contentHeight + "px";
    document.getElementById("navLinks").style.height = contentHeight + "px";
  }

  // Initial project filtering
  filterProjects('all');
});

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  const sections = document.querySelectorAll(".hidden-text");
  sections.forEach(section => {
    if (isInViewport(section)) {
      section.style.opacity = "1";
    }
  });
}

// Attach the scroll event handler
window.addEventListener('scroll', handleScroll);

// Project filtering functionality
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      filterProjects(category);
    });
  });

  function filterProjects(category) {
    cards.forEach(card => {
      const matchesCategory = category === 'all' || card.getAttribute('data-category') === category;
      card.style.display = matchesCategory ? 'block' : 'none';
    });
  }
});


