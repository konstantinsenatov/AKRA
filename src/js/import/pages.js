import $ from "jquery";

$(document).ready(function() {
	$('.faq__subtitle').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});