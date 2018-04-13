$(".dolphinimage").on("click", function () {
	$(".dolphinimage").toggle(function () 
	{
		$(".dolphinimage").animate({ 
			left: '500px',
			opacity: '.80',
			height: '600px',
			width: '750px'

		}); 

	});

});



$(".thesislink").on("hover", function () { 
	$(this).css({"color":"green","font-family":"comic sans", "font-size":"30px"}); 

}, function () { 
	$(this).css({"color":"black","font-family":"comic sans", "font-size":"40px"}); 

}); 
