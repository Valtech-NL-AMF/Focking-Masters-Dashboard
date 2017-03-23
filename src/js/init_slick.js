;(function ($) {
	'use strict';

	var initSlickSlider = function () {

		$('.js-slider-index').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.js-slider-content',
			dots: false,
			arrows: false,
			centerMode: true,
			focusOnSelect: true,
			autoplay: true,
			vertical: true
		});
		$('.js-slider-content').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.js-slider-index',
			autoplay: true
		});

		$('.js-slider-horizontal').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true
		});
		
		
	};



	function init() {
		initSlickSlider();
	}

	$(document).ready(init);

})(jQuery);