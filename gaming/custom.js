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
	$("#herstory").click(function(event){
               $('#stage').load('reviews/herstory.html');
            });
	$("#mirrorsedgecatalyst").click(function(event){
               $('#stage').load('reviews/mirrorsedgecatalyst.html');
            });
	$("#pokemonmoon").click(function(event){
               $('#stage').load('reviews/pokemonmoon.html');
            });
	$("#oxenfree").click(function(event){
               $('#stage').load('reviews/oxenfree.html');
            });
	$("#abzu").click(function(event){
               $('#stage').load('reviews/abzu.html');
            });
	$("#persona5").click(function(event){
               $('#stage').load('reviews/persona5.html');
            });
	$("#breathofthewild").click(function(event){
               $('#stage').load('reviews/breathofthewild.html');
            });
	$("#firewatch").click(function(event){
               $('#stage').load('reviews/firewatch.html');
            });

});
