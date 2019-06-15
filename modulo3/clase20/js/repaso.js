var hola_mundo = "hola";
var numero = 1;
var numero2 = 2;

var texto_nuevo = hola_mundo + numero;
console.log(texto_nuevo);

function sumar(n = 10)
{
	//var sumanueva = numero + numero2;
	return numero + numero2 + n;
}

var sumaxixa = sumar(15);
sumaxixa = sumaxixa + 20;

console.log(sumaxixa);
console.log(sumar(20));

var cosa = ["hola","mundo"];

for (var i = 0; i < 1000; i++) {

	if((i % 2) == 0)
	{
		console.log("hola mundo"+i);
	}
	
}

var palabra = document.getElementById("titulo");
palabra.id = "holamundo";
palabra.className = "holamundo2";
palabra.innerHTML = "<span>"+sumaxixa+"</span>";
console.log(palabra.innerHTML);