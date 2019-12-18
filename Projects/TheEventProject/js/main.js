// jQuery("#gallery").unitegallery({
// 	tiles_justified_space_between:10,
// 	tiles_type: "justified",
// });



$(document).ready(function(){
  $('.slider-for-schedule').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.slider-nav-schedule',
	dots: false,
	centerMode: false,
	focusOnSelect: true
  });
});


$(document).ready(function(){
$('.slider-nav-schedule').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.slider-for-schedule',
	dots: false,
	centerMode: false,
	focusOnSelect: true
	});
});


$(document).ready(function(){
	$('.gallery-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	dots: true,

	});
});
