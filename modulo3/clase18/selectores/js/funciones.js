//Selector por ID
var xixa =  document.getElementById("titulo");
xixa.innerHTML = "HOLA MUNDO ESTO ES JS";
alert(xixa.innerHTML);

//Selector por Nombre de etiqueta
var titulos =  document.getElementsByTagName("h1");
for (var i = 0; i < titulos.length; i++) {
	titulos[i].innerHTML = "titulo "+i;
	//titulos[i].className = "clasetitulo";
	console.log(titulos[i].className);
}

//Selector por Nombre de clase
var tituloporclase =  document.getElementsByClassName("xixa");
for (var i = 0; i < tituloporclase.length; i++) {
	tituloporclase[i].innerHTML = "titulo por clase "+i;
	//titulos[i].className = "clasetitulo";
	console.log(tituloporclase[i].className);
}

//selector por el tipo de seleccion, devolviendo solo el primero que encuentre
var titulo2 = document.querySelector("#titulo");
titulo2.innerHTML = "HOLA MUNDO 3";

//selector por el tipo de seleccion, devolviendo solo todos, como un arreglo
var titulo3 = document.querySelectorAll(".xixa.xixa2");
for (var i = 0; i < titulo3.length ; i++) {
	titulo3[i].innerHTML = "HOLA MUNDO 4";
}