//var edad = parseInt(prompt("¿Cual es tu edad?"));
var edad = prompt("¿Cual es tu edad?");
edad = parseInt(edad);

if(edad >= 18 && edad <=50)
{
	alert("Eres mayor de edad");
}else if(edad >=51 && edad <= 70 ){
	alert("Eres casi viejo");
}else{
	alert("hay algo raro");
}