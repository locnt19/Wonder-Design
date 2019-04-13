
$(document).ready(function () {
	if ($(window).scrollTop() > 0) {
		$('header').addClass('fixed')
	} else {
		$('header').removeClass('fixed')
	}
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 0) {
			$('header').addClass('fixed')
		} else {
			$('header').removeClass('fixed')
		}
	})
	const FAQs = {
		toggleItem: function () {
			let tabsItem = $('.FAQs .FAQs-item')
			tabsItem.on('click', function () {
				tabsItem.removeClass('active')
				$(this).addClass('active') // this of tabsItem
			})
		}
	};
	let paginationNav = $('.newspager ul li')
	paginationNav.on('click', function () {
		paginationNav.removeClass('active')
		$(this).toggleClass('active')
	})
	let faqsNav = $('.product .FAQs-nav ul li')
	faqsNav.on('click', function () {
		faqsNav.removeClass('active')
		$(this).toggleClass('active')
	})
	const Header = {
		toggleSearchBox: function () {
			let searchIcon = $('.search-wrapper i')
			let searchBox = $('.search-box')
			searchIcon.on('click', function () {
				searchBox.toggleClass('active')
			})
		},
		toggleMenu: function () {
			let toggleMenu = $('header .toggle-menu')
			let menuParent = $('header .menu-parent')
			let contactinfo = $('header .contact-info')
			let backdrop = $('header .backdrop')
			let overflowHidden = $('html')
			toggleMenu.on('click', function () {
				toggleMenu.toggleClass('open')
				menuParent.toggleClass('active')
				contactinfo.toggleClass('active')
				backdrop.toggleClass('active')
				overflowHidden.toggleClass('active')
			})
		},
		moveContactInfo: function () {
			let moveContactInfo = new MappingListener({
				selector: 'header .contact-info',
				mobileWrapper: '.mobile-header',
				mobileMethod: 'appendTo',
				desktopWrapper: '.top-header-menu',
				desktopMethod: 'prependTo',
				breakpoint: 992,
			}).watch()
		},
		moveMainMenu: function () {
			let moveMainMenu = new MappingListener({
				selector: 'header .menu-parent',
				mobileWrapper: '.mobile-header',
				mobileMethod: 'appendTo',
				desktopWrapper: '.main-header-menu',
				desktopMethod: 'insertBefore',
				// desktopWrapper: '.main-header-wrapper',
				// desktopMethod: 'appendTo',
				breakpoint: 992,
			}).watch()
		},
		moveToggleMenu: function () {
			let moveToggleMenu = new MappingListener({
				selector: 'header .toggle-menu',
				mobileWrapper: '.mobile-header',
				mobileMethod: 'appendTo',
				desktopWrapper: '.main-header-wrapper',
				desktopMethod: 'prependTo',
				breakpoint: 992,
			}).watch()
		},
		moveLanguageBox: function () {
			let moveLanguageBox = new MappingListener({
				selector: 'header .language',
				mobileWrapper: '.menu-parent',
				mobileMethod: 'appendTo',
				desktopWrapper: '.top-header-menu',
				desktopMethod: 'appendTo',
				breakpoint: 992,
			}).watch()
		},
		moveLogo: function () {
			let moveLogo = new MappingListener({
				selector: 'header .logo-wrapper',
				mobileWrapper: '.mobile-header',
				mobileMethod: 'appendTo',
				desktopWrapper: '.main-header-wrapper',
				desktopMethod: 'prependTo',
				breakpoint: 992,
			}).watch()
		},
		moveSearchBox: function () {
			let moveSearchBox = new MappingListener({
				selector: 'header .search-box',
				mobileWrapper: '.menu-parent',
				mobileMethod: 'appendTo',
				desktopWrapper: '.search-wrapper',
				desktopMethod: 'appendTo',
				breakpoint: 992,
			}).watch()
		}
	};

	var moveNavBarTopList = new MappingListener({
		selector: '.contact-info',
		mobileWrapper: '.mobile-header',
		mobileMethod: 'appendTo',
		desktopWrapper: '.top-header-menu',
		desktopMethod: 'prependTo',
		breakpoint: 768,
	}).watch()

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
	})

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
	})
	
	// product-detail
	var productThumbnail = new Swiper('.product-image .thumbnail', {
		slidesPerView: 4,
		speed: 1200,
		loop: true,
		spaceBetween: 10,
		slideToClickedSlide: true,
		navigation: {
			prevEl: '.product-image .mdi-arrow-left',
			nextEl: '.product-image .mdi-arrow-right'
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

	var lastedNews = new Swiper('.lasted-news .swiper-container', {
		slidesPerView: 3,
		loop: true,
		speed: 2000,
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

	var productOther = new Swiper('.wd-donors .swiper-container', {
		slidesPerView: 6,
		loop: true,
		speed: 1000,
		spaceBetween: 20,
		// autoplay: {
		// 	delay: 3000,
		// 	disableOnInteraction: false,
		// },
		navigation: {
			nextEl: '.wd-donors .swiper-next',
			prevEl: '.wd-donors .swiper-prev'
		},
		breakpoints: {
			992: {
				slidesPerView: 5,
			},
			768: {
				slidesPerView: 4,
			},
			576: {
				slidesPerView: 2,
			}
		}
	})

	var Banner = new Swiper('.wd-banner .swiper-container', {
		slidesPerView: 1,
		autoplay: {
			delay: 2000
		},
		loop: true,
		pagination: {
			el: '.wd-banner .swiper-pagination',
		},
	})
	FAQs.toggleItem();
	Header.toggleSearchBox();
	Header.moveContactInfo();
	Header.moveLanguageBox();
	Header.moveLogo();
	Header.moveToggleMenu();
	Header.moveMainMenu();
	Header.moveSearchBox();
	Header.toggleMenu();
});


