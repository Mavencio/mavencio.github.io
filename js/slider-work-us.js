const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const contents = document.querySelectorAll('.work-us .board .content-1, .work-us .board .content-2');

let currentContent = 0;

nextButton.addEventListener('click', () => {
  contents[currentContent].classList.remove('active');
  currentContent = (currentContent + 1) % contents.length;
  contents[currentContent].classList.add('active');
});

prevButton.addEventListener('click', () => {
  contents[currentContent].classList.remove('active');
  currentContent = (currentContent - 1 + contents.length) % contents.length;
  contents[currentContent].classList.add('active');
});