$(document).ready(function(){

	$(".p").hide();
	
	$("#wrapper").dotdotdot({
		watch: "window"
	});

	
     $('table tr td:nth-child(3)').addClass("hidden-xs");
	 
	 $("#playing").click(function(event){
               $('#stage').load('playing.html');
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
			
	$("#review").click(function(event){
               $('#stage').load('/reviews/smtivapocalypse.html');
            });

});
