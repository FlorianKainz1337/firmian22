'use strict';

$(function(){
	var winHeight = $(window).height(),
		newHeight = winHeight - 80,
		goTopFunction = function(event){
		event.preventDefault();
		$('html, body').animate({scrollTop : 0},800, 'easeInOutExpo');
		return false;
	};

	// goTop functions
	$(window).scroll(function(){
		if ($(this).scrollTop() > 300) {
			$('.goTop').fadeIn();
		} else {
			$('.goTop').fadeOut();
		}
	});
	$('.goTop').click(goTopFunction);
	$('.navbar-brand').click(goTopFunction);

	// set section heights
	$('#landing').height(winHeight);
	$('#bilder').height(newHeight);
	$('#referenz').height(newHeight);
	$('#kontakt').height(newHeight);

	// set background pictures
	$('#landing').backstretch('images/bg_1.jpg');

	$('ul.nav a').bind('click',function(event){
	    var $anchor = $(this);
	    $('html, body').stop().animate({
	        scrollTop: ($($anchor.attr('href')).offset().top - 80)
	    }, 1500,'easeInOutExpo');
	    event.preventDefault();
	});
});
