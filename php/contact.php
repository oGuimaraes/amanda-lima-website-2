<?php
/* **********************************
 * A very simple PHP file which sends 
 * a simple e-mail.
 * **********************************/
 
$_POST = json_decode(file_get_contents('php://input'), true);
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$to = 'consultoriafitnessal@gmail.com';

$finalMessage = "
	Nome: $name
	E-mail: $email
	---
	$message
";

mail($to, 'Contato enviado pelo site', $finalMessage);