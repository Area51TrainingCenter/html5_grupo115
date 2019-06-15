jQuery(document).ready(function(){

	var palabra = jQuery("#titulo");

	palabra.text("Hola mundo");

	//alert(palabra.text());

	//palabra.attr("class","xixa");

	//alert(palabra.attr("class"));

	var cuadro = jQuery("#nombre");

	cuadro.val("alonso perez");

	//alert(cuadro.val());

	

	//jQuery("input[name='nombre']").attr("id","mare2");

	jQuery(".boton").click(function(){
		var elementos = jQuery(".tituloprincipal");
		elementos.attr("id","nathaly");
	});
});