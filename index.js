const burger = document.querySelector('.header-burger');
const menu = document.querySelector('.header-nav');
burger.addEventListener('click', () => {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	document.body.classList.toggle('hidden');
});
