const FAQs = {
	toggleItem: function() {
		let tabsItem = $('.FAQs .FAQs-item')
		tabsItem.on('click', function () {
			tabsItem.removeClass('active')
			$(this).addClass('active') // this of tabsItem
		})
	}
};

$(document).ready(function () {
	FAQs.toggleItem();
	var lastedNews = new Swiper('.lasted-news .swiper-container', {
		slidesPerView: 3,
		loop: true,
		speed: 1000,
		spaceBetween: 20,
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			512: {
				slidesPerView: 1,
			}
		}
	})
});