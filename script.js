// // Placeholder for future functionality (e.g., show popup)
// document.querySelector('.quote-button').addEventListener('click', () => {
//     alert('Thank you for your interest! A quote request popup can go here.');
//   });
  


const quoteButton = document.querySelector('.quote-button');
const quoteForm = document.getElementById('quoteForm');
const closeBtn = document.querySelector('.close-btn');

quoteButton.addEventListener('click', () => {
  quoteForm.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  quoteForm.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === quoteForm) {
    quoteForm.style.display = 'none';
  }
});
