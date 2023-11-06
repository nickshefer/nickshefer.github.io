const burger = document.querySelector('.header-burger');
const menu = document.querySelector('.header-nav');
const links = document.querySelectorAll('a');
// burger
burger.addEventListener('click', () => {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	document.body.classList.toggle('hidden');
});
// links
links.forEach(link => {
	link.addEventListener('click', e => {
		if (link.textContent != 'Whatsapp') {
			e.preventDefault();
			let id = link.href.match(/#\w+/);
			let top = document.querySelector(id).offsetTop;
			window.scrollTo({
				top: top,
				behavior: 'smooth'
			});
			burger.classList.contains('active') ? burger.click() : null;
		}
		burger.classList.contains('active') ? burger.click() : null;
	});
});
// hero-title
const swiper = new Swiper('.swiper', {
	direction: 'vertical',
	loop: true,
	autoplay: {
		delay: 1500
	}
	// Navigation arrows
});
