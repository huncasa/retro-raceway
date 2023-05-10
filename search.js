document.addEventListener("DOMContentLoaded", function() {
    const searchContent = document.querySelector('.search__content');
const searchInput = document.querySelector('.search__input');

searchContent.classList.add('search__content_hidden');

searchInput.addEventListener('click', () => {
  searchContent.classList.remove('search__content_hidden');
});

searchInput.addEventListener('input', () => {
  let val = searchInput.value.trim().toLowerCase();
  let items = document.querySelectorAll('.search__item');

  if (val === '') {
    items.forEach((item) => {
      item.classList.add('search__item_hidden');
    });
  } else {
    items.forEach((item) => {
      if (item.innerText.toLowerCase().includes(val)) {
        item.classList.remove('search__item_hidden');
      } else {
        item.classList.add('search__item_hidden');
      }
    });
  }
});
    
});