<?php
/* **********************************
 * A very simple PHP file which saves 
 * the data into a text file.
 * **********************************/

$email = $_GET['email'];
$to = 'stanleysathlerpinto@gmail.com';
$message = "
    Uma pessoa se cadastrou na newsletter. Seu e-mail é:
    $email
";

mail($to, 'Uma pessoa se cadastrou na newsletter', $message);