/*document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
      const parent = item.parentElement;
      parent.classList.toggle('active');
    });
  });
  */
  document.querySelectorAll('.faq-item').forEach(item => {
    const toggleButton = item.querySelector('.faq-toggle');
    const question = item.querySelector('.faq-question');
  
    toggleButton.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other items
      document.querySelectorAll('.faq-item').forEach(i => {
        if (i !== item) {
          i.classList.remove('active');
        }
      });
      
      // Toggle the clicked item
      item.classList.toggle('active', !isActive);
    });
  });
  
  
  