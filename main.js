$(document).ready(function(){
	$(".menu ul li").hover(function(){
		$(this).find('ul').css({'display': 'block'});
		$(this).find(".description").css({'display': 'block'});
	});

	$(".menu ul li ul li a").hover(function(){
	var xyi = $(this).attr('data-description');
	$('.description p').text(xyi);

	});

});