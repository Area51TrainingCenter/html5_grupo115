<?php
//print_r($_POST);

$usuario = $_POST["user"];
$password = $_POST["pass"];

$objeto = array();
$lista_objeto = array();

if($usuario == "alonso" and $password == "123456")
{
	$objeto["nombre"] = "Alonso";
	$objeto["apellido"] = "Perez";
	$objeto["dni"] = "42890190";
	$objeto["fecnac"] = "1985/03/27";
	$lista_objeto["lista"][0]  = $objeto;

	$objeto["nombre"] = "Mauricio";
	$objeto["apellido"] = "Ramal";
	$objeto["dni"] = "44826745";
	$objeto["fecnac"] = "1987/08/26";
	$lista_objeto["lista"][1] = $objeto;

	$objeto["nombre"] = "Fernando";
	$objeto["apellido"] = "Amaya";
	$objeto["dni"] = "70102948";
	$objeto["fecnac"] = "1990/02/19";
	$lista_objeto["lista"][2] = $objeto;	

	$objeto["nombre"] = "Rocio";
	$objeto["apellido"] = "Sotomayor";
	$objeto["dni"] = "45977828";
	$objeto["fecnac"] = "1989/09/14";
	$lista_objeto["lista"][3]= $objeto;	

	$objeto["nombre"] = "Sergio";
	$objeto["apellido"] = "Rubio";
	$objeto["dni"] = "43989710";
	$objeto["fecnac"] = "1986/12/20";
	$lista_objeto["lista"][4] = $objeto;	

	$lista_objeto["estado"] = 1;
	$lista_objeto["mensaje"] = "Ingreso";
	//echo 1;
}else{
	//echo 2;
	$lista_objeto["estado"] = 2;
	$lista_objeto["mensaje"] = "No Ingreso";	
}

//echo json_encode($objeto);
echo json_encode($lista_objeto);
die();
?>
