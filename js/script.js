const body = document.querySelector('html');
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
	duration: 500,
	iterations: 1,
};

function closeBurger() {
	headerNav.classList.remove('header__nav--active');
	headerBurger.classList.remove('header__burger--active');
	body.classList.remove('lock');
}

function OpenBurger() {
	headerNav.classList.add('header__nav--active');
	headerBurger.classList.add('header__burger--active');
	body.classList.add('lock');
	headerNav.animate(burgerOpenTransform, burgerTiming);
}

headerBurger.addEventListener('click', (e) => {
	const el = e.target;
	if (el.parentNode.classList.contains('header__burger--active')) {
		let anim = headerNav.animate(burgerCloseTransform, burgerTiming);

		anim.addEventListener('finish', () => {
			closeBurger();
		});
	} else {
		OpenBurger();
	}
});

headerNav.addEventListener('click', (e) => {
	const el = e.target;
	console.log(el);
	if (el.classList.contains('header__nav-list-item-link')) {
		closeBurger();
	}
});
