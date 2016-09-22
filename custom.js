$(document).ready(function(){

	$("p").hide();

	$("td").textOverflow({
		autoUpdate: true
	});
	
	$(".dot").dotdotdot({
		watch: "window"
	});

});

