jQuery(document).ready(function(){
	jQuery(".abrir").click(function(){
		/*jQuery(".fondo").addClass("abierto");
		jQuery(".cuadro").slideDown("slow",function(){
			
		});	*/	
		/*
			jQuery(".fondo").addClass("abierto");	
			jQuery(".cuadro").addClass("abierto");	
		

		jQuery(".fondo").fadeIn("fast",function(){
			jQuery(".cuadro").fadeIn("slow");
		});	*/	
	});

	jQuery(".cerrar").click(function(){
		/*jQuery(".cuadro").slideUp("slow",function(){
			jQuery(".fondo").removeClass("abierto")
		});	*/
		/*jQuery(".fondo").removeClass("abierto");	
		jQuery(".cuadro").removeClass("abierto");	
		jQuery(".cuadro").fadeOut("slow",function(){
			jQuery(".fondo").fadeOut("fast");
		});	*/
	});	

	jQuery(".boton").click(function(){
		var titulo = jQuery(this).attr("title");
		jQuery(".fondo").fadeToggle("slow");
		jQuery(".cuadro").slideToggle("slow");
	/*	alert(titulo);
		if(jQuery(".fondo").hasClass("abierto") && 
			jQuery(".cuadro").hasClass("abierto"))
		{
			jQuery(".fondo").removeClass("abierto");	
			jQuery(".cuadro").removeClass("abierto");
		}else{
			jQuery(".fondo").addClass("abierto");	
			jQuery(".cuadro").addClass("abierto");
		}

		jQuery(".fondo").toggleClass("abierto");	
		jQuery(".cuadro").toggleClass("abierto");
		jQuery(".fondo").fadeToggle("slow");
		jQuery(".cuadro").fadeToggle("slow");*/
		
	});	
});