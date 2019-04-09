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
});