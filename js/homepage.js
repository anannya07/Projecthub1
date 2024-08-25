const modeIcon = document.getElementById('mode-icon');
let isDarkMode = false;

modeIcon.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    modeIcon.classList.remove('bx-sun');
    modeIcon.classList.add('bx-moon');
  } else {
    modeIcon.classList.remove('bx-moon');
    modeIcon.classList.add('bx-sun');
  }
});
const navList = document.querySelector(".nav-list");

document.querySelector(".hamburger").onclick = () => {
  navList.classList.add("show");
};;

document.querySelector(".close").onclick = () => {
  navList.classList.remove("show");
};;

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded"); // Check if the DOM is loaded
  
  const accordions = document.querySelectorAll('.faq-row .accordion');
  console.log(accordions); // Check if accordions are selected correctly
  accordions.forEach(accordion => {
    accordion.addEventListener("click", function() {
      console.log("Accordion clicked:", this);
      this.classList.toggle("active");

      // Collapse other accordions
      accordions.forEach(item => {
        if (item !== this) {
          item.classList.remove("active");
        }
      });
    });
  });
});

