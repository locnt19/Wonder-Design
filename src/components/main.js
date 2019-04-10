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
		spaceBetween: 30,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
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


// product-detail
var productThumbnail = new Swiper('.product-image .thumbnail', {
	slidesPerView: 4,
	speed: 1200,
	loop: true,
	slideToClickedSlide: true,
	autoplay: {
		delay: 3500,
		disableOnInteraction: false,
	}
})
productThumbnail.on('click', function () {
	var target = $('.product-image .thumbnail .swiper-slide-active').attr('data-target')
	$('.product-image .big .slide').not('[data-id=' + target + ']').hide()
	$('[data-id=' + target + ']').fadeIn(400)
})
productThumbnail.on('transitionStart', function () {
	var target = $('.product-image .thumbnail .swiper-slide-active').attr('data-target')
	$('.product-image .big .slide').not('[data-id=' + target + ']').hide()
	$('[data-id=' + target + ']').fadeIn(400)
})

// Product Tab
$('.product-tab nav a').on('click', function (e) {
	e.preventDefault()
	$(this).addClass('active')
	$('.product-tab nav a').not(this).removeClass('active')
	$('.product-tab .pcontent').not(target).hide()
	var target = $(this).attr('href')
	$(target).fadeIn()
})