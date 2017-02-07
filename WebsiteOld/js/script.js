$(document).ready(function(){
	// Makes all resume sections invisible except education on load
	$('.involvement, .skills, .work, .activities').hide();
	$('.tab1').css({'background-color':'#0047ab'});

	// Underlines tab words on mouse-over
	$('.res-tabs div').mouseenter(function() {
		$(this).css({'text-decoration':'underline'});
	});

	$('.res-tabs div').mouseleave(function() {
		$(this).css({'text-decoration':'none'});
	});

	// Changes color of active tab
	$('.res-tabs div').click(function() {
		$('.res-tabs div').css({'background-color':'#ab6400'});
		$(this).css({'background-color':'#0047ab'});
	});

	// NOTE: There's a way to do this with less lines of code. Fix it this week.
	// Shows education div, hides all others on click
	$('.tab1').click(function() {
		$('.education').show();
		$('.involvement, .skills, .work, .activities').hide();
	});

	// Shows involvement div, hides all others on click
	$('.tab2').click(function() {
		$('.involvement').show();
		$('.education, .skills, .work, .activities').hide();
	});

	// Shows skills div, hides all others on click
	$('.tab3').click(function() {
		$('.skills').show();
		$('.education, .involvement, .work, .activities').hide();
	});

	// Shows work div, hides all others on click
	$('.tab4').click(function() {
		$('.work').show();
		$('.education, .involvement, .skills, .activities').hide();
	});

	// Shows activities div, hides all others on click
	$('.tab5').click(function() {
		$('.activities').show();
		$('.education, .involvement, .skills, .work').hide();
	});
});