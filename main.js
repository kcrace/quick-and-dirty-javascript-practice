// this loads everything first
$(document).ready(function(){ 


// hey jquery go find class slider, detect when something is changed 
// (like we detected when something was clicked before), when theres
// a change we are gonna do this function, console log the value of
// the silder that has been changed.
	$('.slider-width').change(function() {
		console.log($(this).val());


		var sliderValue = $(this).val();
			$('.l-top-hex').css('border-left', sliderValue / 2 + 'px solid transparent');
			$('.l-top-hex').css('border-right', sliderValue / 2 + 'px solid transparent');
			$('.l-mid-hex').css('width', sliderValue + 'px');
			$('.l-bottom-hex').css('border-left', sliderValue / 2 + 'px solid transparent');
			$('.l-bottom-hex').css('border-right', sliderValue / 2 + 'px solid transparent');

	})


	$('.slider-height').change(function() {
		console.log($(this).val());


		var sliderValue = $(this).val();
			$('.l-top-hex').css('border-bottom', sliderValue / 2 + 'px solid #ffdf00');
			$('.l-mid-hex').css('height', sliderValue + 'px');
			$('.l-bottom-hex').css('border-top', sliderValue / 2 + 'px solid #ffdf00');		

// // a pipe ( || ) means or  (&&) means and
// 		if (sliderValue >= 40 || sliderValue < 20) {
// 			$('h2').css('font-family', 'serif');
// 		} else{
// 			$('h2').css('font-family', 'sans-serif');
// 		}
	
	})
})