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
		burger.classList.remove('active');
		document.body.classList.remove('hidden');
	}
});

// links
const links = document.querySelectorAll('a');
links.forEach(link => {
	link.addEventListener('click', e => {
		if (link.textContent != 'WhatsApp') {
			if (link.textContent != 'Связаться') {
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
import { data } from './data.js';
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.popup-header_close');
const catalog = document.querySelector('.catalog');
catalog.addEventListener('click', e => {
	if (e.target.closest('.catalog-company-list-item')) {
		let img = e.target.closest('.catalog-company-list-item').firstElementChild
			.firstElementChild.src;
		let title = e.target
			.closest('.catalog-company-list-item')
			.lastElementChild.textContent.trim();
		showPopup(title, img);
	}
});
function showPopup(title, img) {
	let boiler = data.find(e => e.title == title);
	popup.querySelector('.popup-midlle').innerHTML = '';
	popup.querySelector('.popup-header_title').textContent = title;
	popup.querySelector('.popup-midlle').insertAdjacentHTML(
		'beforeend',
		`
	<div class="popup-left">
							<img src="${img}" alt="#" />
						</div>
						<div class="popup-right">
							<ul class="popup-list">
								${boiler.desc
									.map(e => {
										return `<li>
									<span class="popup-list_title">${e.title}</span>
									<span class="popup-list_value">${e.value}</span>
								</li>`;
									})
									.join('')}
							</ul>
							<p class="popup-description">
								${boiler.text}
							</p>
						</div>`
	);
	popup.classList.add('active');
	document.body.classList.add('hidden');
}
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
