;(function() {
	"use strict";
	let btn = document.querySelector('.ba-menu-toggle');
		let menu = document.querySelector('.ba-menu');
		btn.addEventListener('click', function (e) {
			menu.classList.toggle('open');
		});
	
})();

let imageSlider = $('.ba-slider');

imageSlider.slick({
	dots: true,
	arrows: false,
	fade: true
});

let bannerSlider = $('.ba-slider-banner');

bannerSlider.slick({
	dots: true,
	arrows: false,
	fade: true,
	autoplay: true,
	autoplaySpeed: 5000,
});
