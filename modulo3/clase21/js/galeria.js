jQuery(document).ready(function(){
	jQuery(".imagen").click(function(){
		var titulo = jQuery(this).attr("title");
		var src = jQuery(this).attr("src");	
		
		jQuery(".imagen-grande").attr("src",src);	
		jQuery(".contenedor-imagen-grande h1").text(titulo);

		jQuery(".contenedor-imagen-grande").fadeIn("slow");

	});

	jQuery(".contenedor-imagen-grande h1").click(function(){
		jQuery(".contenedor-imagen-grande").fadeOut("slow");
	});
});
