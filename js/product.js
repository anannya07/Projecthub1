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
