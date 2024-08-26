document.addEventListener('DOMContentLoaded', function () {
  // Select all card wrappers within the section.categories
  const cardWrappers = document.querySelectorAll('.section.categories .card-wrapper');

  cardWrappers.forEach(wrapper => {
    const cardScroll = wrapper.querySelector('.card-scroll');
    const rightArrow = wrapper.querySelector('.right-arrow');
    const leftArrow = wrapper.querySelector('.left-arrow');

    // Scrolls the cards to the right when the right arrow is clicked
    rightArrow.addEventListener('click', function () {
      cardScroll.scrollBy({
        left: 200, // Adjust this value based on how much you want to scroll per click
        behavior: 'smooth'
      });
    });

    // Scrolls the cards to the left when the left arrow is clicked
    leftArrow.addEventListener('click', function () {
      cardScroll.scrollBy({
        left: -200, // Scrolls in the opposite direction
        behavior: 'smooth'
      });
    });
  });
});
/* card animation */
// Select all cards with the class 'card'
const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', function() {
    // Add the animation class
    this.classList.add('animate');

    // Get the target URL from the data attribute
    const url = this.getAttribute('data-url');

    // Navigate to the specified URL after the animation duration
    setTimeout(() => {
      window.location.href = url;
    }, 300); // Wait for the duration of the animation
  });
});


