$(document).ready(function() {
	$('p').click(function() {
		$(this).effect('bounce', {times:3}, 500);		
	});

	$(document).keydown(function(key) {
		switch(parseInt(key.which,10)) {
			case 65:
				$('p').animate({left: "-=15px"}, 'fast');
				break;
			case 83:
				$('p').animate({top: "+=15px"}, 'fast');
				break;
			case 87:
				$('p').animate({top: "-=15px"}, 'fast');
				break;
			case 68:
				$('p').animate({left:"+=15px"}, 'fast');
				break;
			default:
				break;
		}
	});
});