jQuery(document).ready(function(){
	jQuery(".burguer").click(function(e){
		e.preventDefault();
		jQuery(".menu").toggleClass("open");
		jQuery(".burguer").find("i").toggleClass("fa-times");
		jQuery("body").toggleClass("open");
	});

	jQuery(".menu a").click(function(e){
		e.preventDefault();
		
		var id = jQuery(this).attr("href");

		jQuery("html,body").animate({
			"scrollTop" : jQuery(id).offset().top
		},"slow",function(){

		})
	});
});
