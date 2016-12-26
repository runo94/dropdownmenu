$(document).ready(function(){
	$(".menu ul li").hover(function(){
		$(this).find('ul').css({'display': 'block'});
		$(this).find(".description").css({'display': 'block'});
	});

	$(".menu ul li ul li a").hover(function(){
	var descr = $(this).attr('data-description');
	$('.description p').text(descr);

	});

	$(".menu").mouseleave(function(){
		$(this).find('ul li ul').css({'display': 'none'});
		$(this).find('.description').css({'display': 'none'});
	});

});