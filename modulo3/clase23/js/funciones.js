jQuery(document).ready(function(){
	jQuery("#enviar").click(function(){
		jQuery.ajax({
			method : "post",
			dataType : "json",
			url : "proceso.php",
			/*data : {
				user : jQuery("#user").val(),
				pass : jQuery("#pass").val()
			},*/
			data : jQuery("#frmlogin").serialize(),
			beforeSend: function()
			{
				//alert("estoy enviando...");
			}
		}).done(function(xixa){
			var html = "";
			if(xixa.estado == 1)
			{
				html+='<table>';
				//console.log(xixa.lista);
				jQuery.each(xixa.lista,function(indice,valor){
					html+='<tr>';
					html+= "<td>"+valor.nombre+"</td>";
					html+= "<td>"+valor.apellido+"</td>";
					html+= "<td>"+valor.dni+"</td>";
					html+= "<td>"+valor.fecnac+"</td>";
					html+='</tr>';		
				})
				html+='</table>';

			/*	html+= "<p>"+data.nombre+"</p>";
				html+= "<p>"+data.apellido+"</p>";
				html+= "<p>"+data.dni+"</p>";
				html+= "<p>"+data.fecnac+"</p>";*/
				jQuery("#resultado").css({
					"color" : "green"
				})
			}else{
				//alert("holaaa");
				jQuery("#resultado").css({
					"color" : "red"
				})
			}

			html+= "<p>"+xixa.mensaje+"</p>";

			jQuery("#resultado").html(html);
		});

	});
});
