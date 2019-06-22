<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
		<script src="js/jquery.js"></script>
		<style>
		*{
			box-sizing: border-box;
		}
		body{
			margin: 0;
			padding: 0;
			background-color: #ccc;
			height: 100vh;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
		}

		.conteendor-login
		{
			width: 33%;
			padding: 30px;
			border:1px solid #000;	
			background-color: #fff;		
		}

		.form-group
		{
			display: block;
			margin-bottom: 15px;
		}

		.form-group:last-child
		{
			margin: 0;
		}

		.form-control
		{
			width: 100%;
			padding: 5px;
			height: 35px;
			border:1px solid #000;
			border-radius: 5px;
			display: block;
		}

		.boton
		{
			width: 100%;
			padding: 10px 15px;
			text-align: center;
			color: #fff;
			background-color: #ff0000;
			display: inline-block;
			border-radius: 5px;
			border:none;
			transition: all .3s ease-in;
		}

		.boton:hover
		{
			opacity: .75;
		}

		</style>
	</head>
	<body>
		<section class="conteendor-login">
			<form action="proceso.php" onsubmit="return false;" method="post" id="frmlogin">
				<div class="form-group">
					<input type="text" name="user" id="user" class="form-control" placeholder="Usuario">
				</div>
				<div class="form-group">
					<input type="password" name="pass" id="pass" class="form-control"  placeholder="Password">
				</div>
				<div class="form-group">
					<input type="submit" value="ENVIAR" id="enviar" class="boton" >
				</div>	
				<div id="resultado"></div>
			</form>
		</section>
		<script src="js/funciones.js"></script>
	</body>
</html>