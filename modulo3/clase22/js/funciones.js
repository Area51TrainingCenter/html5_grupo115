jQuery(document).ready(function(){
	jQuery(".item-acordeon h2").click(function(){
		jQuery(".contenido-acordeon").slideUp();
		if(jQuery(this).find("i").hasClass("fa-chevron-up"))
		{
			jQuery(this).find("i").removeClass("fa-chevron-up");
		}else{
			jQuery(".item-acordeon h2 i").removeClass("fa-chevron-up");	
			jQuery(this).find("i").addClass("fa-chevron-up");
		}

		jQuery(this).next().stop().slideToggle();
	});

	jQuery(".lista-botones a").click(function(e){
		e.preventDefault();
		var indice = jQuery(this).index();
		jQuery(".lista-botones a").removeClass("active");
		jQuery(".contenido-acordeon").removeClass("active");
		jQuery(this).addClass("active");
		jQuery(".contenido-acordeon").eq(indice).addClass("active");
	})

	jQuery(".agregarantes").click(function(e){
		e.preventDefault();
		contador++
		jQuery(".resultado").prepend("<div class='circulo'>"+contador+"</div>");
	})

	jQuery(".reemplazar").click(function(e){
		e.preventDefault();
		jQuery(".resultado").html("<div class='circulo'></div>");

	})

	jQuery(".cuadrado").click(function(){
		var cuadrado = jQuery(this);
		cuadrado.animate({
			"width" : "+=500px",
			"height" : "+=100px",
			"background-color" : "green"
		},10000,function(){
			cuadrado.animate({
				"background-color" : "blue"	
			},5000,function(){

			});
		});
	})	

	jQuery(".cuadrado").click(function(){
		girando();
	});
});

var ancho = jQuery(window).width() - jQuery(".cuadrado").width();	
var alto = jQuery(window).height() - jQuery(".cuadrado").height();

jQuery(window).resize(function(){
	ancho = jQuery(window).width() - jQuery(".cuadrado").width();	
	alto = jQuery(window).height() - jQuery(".cuadrado").height();
});

function girando()
{

}

	var contador = 0;
	jQuery(document).on("click",".agregardespues", function(e){
		e.preventDefault();
		contador++
		jQuery(".resultado").append("<div class='circulo agregardespues'>"+contador+"</div>");
		//jQuery(document).off("click",".agregardespues");
		if(contador == 5)
		{
			jQuery(document).off("click",".agregardespues");
		}
	})