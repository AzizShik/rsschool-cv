const body = document.documentElement;
const headerBurger = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__nav');
const headerNavList = document.querySelector('.header__nav-list');

const burgerOpenTransform = [
  { transform: 'translateX(100%)' },
  { transform: 'translateX(0%)' },
];

const burgerCloseTransform = [
  { transform: 'translateX(0%)' },
  { transform: 'translateX(100%)' },
];

const burgerTiming = {
  duration: 250,
  iterations: 1,
};

function closeBurger() {
  headerNav.classList.remove('header__nav--active');
  headerBurger.classList.remove('header__burger--active');
  body.classList.remove('lock');
}

function openBurger() {
  headerNav.classList.add('header__nav--active');
  headerBurger.classList.add('header__burger--active');
  body.classList.add('lock');
  headerNavList.animate(burgerOpenTransform, burgerTiming);
}

headerBurger.addEventListener('click', (e) => {
  const el = e.target;
  console.log(el);
  if (el.classList.contains('header__burger--active')) {
    let anim = headerNavList.animate(burgerCloseTransform, burgerTiming);

    anim.addEventListener('finish', () => {
      closeBurger();
    });
  } else {
    openBurger();
  }
});

headerNav.addEventListener('click', (e) => {
  const el = e.target;

  if (!el.closest('.header__nav-list')) {
    let anim = headerNavList.animate(burgerCloseTransform, burgerTiming);

    anim.addEventListener('finish', () => {
      closeBurger();
    });
  }

  if (el.classList.contains('header__nav-list-item-link')) {
    closeBurger();
  }
});
