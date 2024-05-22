
function toggleMenu() {
  var menuIcon = document.querySelector(".menu-icon");
  var overlay = document.getElementById("overlay");
  var navLinks = document.getElementById("navLinks");
  var body = document.querySelector("body");

  menuIcon.classList.toggle("open");
  navLinks.classList.toggle("open");
  overlay.classList.toggle("open");
  body.classList.toggle("nav-open");
}

function closeMenu() {
  var menuIcon = document.querySelector(".menu-icon");
  var overlay = document.getElementById("overlay");
  var navLinks = document.getElementById("navLinks");
  var body = document.querySelector("body");

  menuIcon.classList.remove("open");
  navLinks.classList.remove("open");
  overlay.classList.remove("open");
  body.classList.remove("nav-open");
}

// JavaScript to toggle the blue background color on menu icon click
document.querySelector(".menu-icon").addEventListener("click", function () {
  document.body.classList.toggle("blue-background");
});

// Function to scroll to the next section
function scrollToNextPage() {
  var nextSection = document.getElementById("next");
  nextSection.scrollIntoView({ behavior: "smooth" });
}
function scrollToNextPage() {
  const nextSection = document.querySelector('#next');
  nextSection.scrollIntoView({ behavior: 'smooth' });
}
// resume
document.addEventListener('DOMContentLoaded', function() {
  // Get the anchor tag with class "nav-link" for the resume
  const resumeLink = document.querySelector('.nav-links a[href*="resume"]');

  // Add click event listener to the resume anchor tag
  resumeLink.addEventListener("click", function (event) {
    var confirmDownload = confirm("Do you want to download my resume?");
    if (!confirmDownload) {
      event.preventDefault(); // Prevent default action (i.e., following the link)
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  // Get the height of the content
  var contentHeight = document.getElementById("content").offsetHeight;

  // Set the height of the overlay and navigation links
  document.getElementById("overlay").style.height = contentHeight + "px";
  document.getElementById("navLinks").style.height = contentHeight + "px";
});

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  const sections = document.querySelectorAll(".hidden-text");
  sections.forEach((section) => {
    if (isInViewport(section)) {
      section.style.opacity = "1";
    }
  });
}
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      console.log('Button clicked:', button.textContent);
      const category = button.getAttribute('data-category');
      console.log('Category:', category);
      filterProjects(category);
    });
  });

  function filterProjects(category) {
    console.log('Filtering projects by category:', category);
    cards.forEach(card => {
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // Initially display all projects
  filterProjects('all');
});
