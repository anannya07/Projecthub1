/*77777777777777toggling777777777777777777*/ 
const modeIcon = document.getElementById('mode-icon');
const searchIcon = document.getElementById('search-icon');
const scrollArrowImgs = document.querySelectorAll('.scroll-arrow img'); // Select all scroll arrow images
const faqToggles = document.querySelectorAll('.faq-toggle'); // Select all FAQ toggle buttons
// Footer elements
const footerLogo = document.getElementById('footer-logo');
const socialIcons = document.querySelectorAll('.footer-contact .social-icon'); // Select all social media icon images
let isDarkMode = false;

modeIcon.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  isDarkMode = !isDarkMode;
  
  console.log('Dark mode:', isDarkMode);

  // Toggle mode icon and search icon based on dark mode
  if (isDarkMode) {
    modeIcon.src = './images/moon.png';
    searchIcon.src = './images/search-lightmode.png';
    scrollArrowImgs.forEach(img => {
      if (img.closest('.right-arrow')) {
        img.src = './images/arrow-circle-left-dark-mode.png';
      } else if (img.closest('.left-arrow')) {
        img.src = './images/arrow-circle-right-lightmode.png';
      }
    });
    faqToggles.forEach(toggle => {
      const img = toggle.querySelector('img');
      console.log('Setting dark mode image for FAQ toggle');
      img.src = './images/arrow-down-lightmode.png';
    });
    // Update footer logo image
    footerLogo.src = './images/Vector.png';

    // Update social media icons
    socialIcons.forEach(icon => {
      if (icon.alt === "LinkedIn") {
        icon.src = './images/linkedin-lightmode.png';
      } else if (icon.alt === "Discord") {
        icon.src = './images/discord -lightmode.png';
      } else if (icon.alt === "GitHub") {
        icon.src = './images/github-lightmode.png';
      }
      console.log('Updated src to:', icon.src);
    });
  } else {
    modeIcon.src = './images/sun.png';
    searchIcon.src = './images/search-lightmode.png';
    scrollArrowImgs.forEach(img => {
      if (img.closest('.right-arrow')) {
        img.src = './images/arrow-circle-left.png';
      } else if (img.closest('.left-arrow')) {
        img.src = './images/arrow-circle-right.png';
      }
    });
    faqToggles.forEach(toggle => {
      const img = toggle.querySelector('img');
      console.log('Setting light mode image for FAQ toggle');
      img.src = './images/arrow-down-darkmode.png';
    });
    // Update footer logo image
    footerLogo.src = './images/Vector-dark.png';

    // Update social media icons
    socialIcons.forEach(icon => {
      if (icon.alt === "LinkedIn") {
        icon.src = './images/linkedin-darkmode.png';
      } else if (icon.alt === "Discord") {
        icon.src = './images/discord-darkmode.png';
      } else if (icon.alt === "GitHub") {
        icon.src = './images/github darkmode.png';
      }
      console.log('Updated src to:', icon.src);
    });
  }
});


// Add toggle functionality for FAQ buttons
faqToggles.forEach(toggle => {
  const lightModeClosedImage = './images/arrow-down-lightmode.png';
  const darkModeClosedImage = './images/arrow-down-darkmode.png';

  const initialImage = isDarkMode ? lightModeClosedImage: darkModeClosedImage ;
  toggle.innerHTML = `<img src="${initialImage}" alt="Toggle FAQ">`;

  toggle.addEventListener('click', function() {
    toggle.classList.toggle('active');
    console.log('FAQ toggle clicked');

    const faqContent = toggle.nextElementSibling;
    faqContent.classList.toggle('visible');
  });
});



/*=============================*/

const navList = document.querySelector(".nav-list");

document.querySelector(".hamburger").onclick = () => {
  navList.classList.add("show");
};;

document.querySelector(".close").onclick = () => {
  navList.classList.remove("show");
};;



