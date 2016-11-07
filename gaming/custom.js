$(document).ready(function(){

	$(".p").hide();
	
	$("#wrapper").dotdotdot({
		watch: "window"
	});
	
     $('table tr td:nth-child(3)').addClass("hidden-xs");
			
	$('#playing').click(function() {
				location.reload();
			});
	 
	 $("#toplay").click(function(event){
               $('#stage').load('toplay.html');
            });
			
	 $("#played").click(function(event){
               $('#stage').load('played.html');
            });
			
	 $("#ids").click(function(event){
               $('#stage').load('idpage.html');
            });
			
	$("#smtivapocalypse").click(function(event){
               $('#stage').load('reviews/smtivapocalypse.html');
            });
	$("#mirrorsedgecatalyst").click(function(event){
               $('#stage').load('reviews/mirrorsedgecatalyst.html');
            });

});
