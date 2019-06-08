var numero1;
numero1 = 2;

var numero2 = 4;
var nombre = "Alonso Perez";
var nombre2 = 'Cynthya Oropeza';
var nombre3 = '<p id="holamundo">Laura Leon</p>';
var decimales = 1.2;
var booleano = true;

var dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];

var lista = [numero1,numero2,nombre,nombre2,nombre3,decimales,booleano,dias];

var resultado = nombre3 +" "+ nombre2;
var resultado2 = numero1 + numero2 +" "+ nombre2;

/*
console.log(resultado);
console.log(resultado2);

console.log(lista);
console.log(lista[2]);
console.log(lista[7][3]);*/

var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;
var residuo = numero1 % numero2;

//alert(suma +" "+ resta +" "+ multiplicacion +" "+division+" "+residuo );

/*var n1 = prompt("ingresa un numero"); 
var n2 = prompt("ingresa un numero"); 

var resultradomensaje = parseInt(n1) + parseInt(n2); */
//console.log(resultradomensaje);

function sumar()
{
	var hola  = numero1 + numero2;
	return hola;
}

function sumar2()
{
	console.log(hola);
}

function suma3(p1,p2)
{
	return p1 + p2;
}

var xixa = sumar();
console.log(xixa);

var xixa2 = suma3(10,20);
console.log(xixa2);
//sumar2();