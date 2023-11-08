// burger
const burger = document.querySelector('.header-burger');
const menu = document.querySelector('.header-nav');
document.addEventListener('click', e => {
	if (burger === e.target) {
		menu.classList.toggle('active');
		burger.classList.toggle('active');
		document.body.classList.toggle('hidden');
	} else if (
		e.target.closest('.header-nav') ||
		!menu.classList.contains('active')
	) {
		return;
	} else {
		menu.classList.remove('active');
		document.body.classList.remove('hidden');
	}
});

// links
const links = document.querySelectorAll('a');
links.forEach(link => {
	link.addEventListener('click', e => {
		if (link.textContent != 'WhatsApp') {
			if (link.textContent != 'Связаться') {
				console.log(link.textContent);
				e.preventDefault();
				let id = link.href.match(/#\w+/);
				let top = document.querySelector(id).offsetTop;
				window.scrollTo({
					top: top,
					behavior: 'smooth'
				});
			}

			burger.classList.contains('active') ? burger.click() : null;
		}
		burger.classList.contains('active') ? burger.click() : null;
	});
});

// hero-title
const swiper1 = new Swiper('.swiper1', {
	direction: 'vertical',
	loop: true,
	autoplay: {
		delay: 1500
	}
});

// hero-btn
const heroBtn = document.querySelector('.hero-btn');
heroBtn.addEventListener('click', () => {
	let id = heroBtn.getAttribute('href');
	let top = document.querySelector(id).offsetTop;
	window.scrollTo({
		top: top,
		behavior: 'smooth'
	});
});

// catalog slider
const swiper2 = new Swiper('.swiper2', {
	spaceBetween: 10,
	navigation: {
		nextEl: '.swiper-btn-next',
		prevEl: '.swiper-btn-prev'
	}
});

// popup
const popup = document.querySelector('.popup');
const catalogBtn = document.querySelector('.catalog-btn');
const closeBtn = document.querySelector('.popup-header_close');
function showPopup() {
	popup.classList.add('active');
	document.body.classList.add('hidden');
}
// catalogBtn.addEventListener('click', showPopup);
popup.addEventListener('click', e => {
	if (e.target == closeBtn) {
		popup.classList.remove('active');
		document.body.classList.remove('hidden');
	}
	if (e.target.closest('.popup-block')) {
		return;
	} else {
		popup.classList.remove('active');
		document.body.classList.remove('hidden');
	}
});
