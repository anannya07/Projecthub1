document.querySelectorAll('.faq-toggle1').forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.closest('.faq-item1');
      
      faqItem.classList.toggle('active');
  
      const faqAnswer = faqItem.querySelector('.faq-answer1');
      
      if (faqItem.classList.contains('active')) {
        faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
      } else {
        faqAnswer.style.maxHeight = null;
      }
    });
  });
  