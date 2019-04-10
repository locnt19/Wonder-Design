const FAQs = {
	toggleItem: function () {
		let tabsItem = $('.FAQs .FAQs-item')
		tabsItem.on('click', function () {
			tabsItem.removeClass('active')
			$(this).addClass('active') // this of tabsItem
		})
	}
};

const ProjectPhotoSwiper = new Swiper('.project-detail-photo .swiper-container', {
	slidesPerView: 1,
	speed: 2000,
	loop: true,
	slideToClickedSlide: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	navigation: {
		prevEl: '.project-detail-photo .mdi-arrow-left',
		nextEl: '.project-detail-photo .mdi-arrow-right'
	}
});

const ProjectOtherSwiper = new Swiper('.project-detail-other .swiper-container', {
	slidesPerView: 3,
	speed: 2000,
	loop: true,
	spaceBetween: 30,
	slideToClickedSlide: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	breakpoints: {
		992: {
			slidesPerView: 2
		},
		576: {
			slidesPerView: 1
		}
	}
});

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

$(document).ready(function () {
	FAQs.toggleItem();
});


// product-detail
var productThumbnail = new Swiper('.product-image .thumbnail', {
	slidesPerView: 4,
	speed: 1200,
	loop: true,
	slideToClickedSlide: true
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
