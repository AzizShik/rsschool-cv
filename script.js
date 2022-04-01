window.addEventListener('load', () => {
  const burgerBtn = document.querySelector('.header__burg');
  const headerNav = document.querySelector('.header__nav');

  burgerBtn.addEventListener('click', () => {
    toggleMenu();
  });

  function toggleMenu() {
    burgerBtn.classList.toggle('header__burg--active');

    headerNav.classList.toggle('header__nav--active');
  }

  headerNav.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('header__nav')) {
      toggleMenu();
    }

    if(el.classList.contains('header__link')) {
      toggleMenu();
    }
  });


  hljs.highlightAll();
});
