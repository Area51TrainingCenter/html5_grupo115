var numero1 = document.getElementById("numero1");
var boton = document.getElementById("boton");

boton.addEventListener("click",function(){
	alert(numero1.value );
	numero1.value = "nuevonumero";
});