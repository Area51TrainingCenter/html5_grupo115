jQuery(document).ready(function(){
	jQuery(".abrir").click(function(){
		jQuery(".fondo").attr("class","fondo abierto");
		jQuery(".cuadro").attr("class","cuadro abierto");		
	});

	jQuery(".cerrar").click(function(){
		jQuery(".fondo").attr("class","fondo");
		jQuery(".cuadro").attr("class","cuadro");
	});	
});