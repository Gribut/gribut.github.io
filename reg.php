<?php

$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['phone'];

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$phone = htmlspecialchars($tel);

$name = urldecode($name);
$email = urldecode($email);
$phone = urldecode($phone);

$name = trim($name);
$email = trim($email);
$phone = trim($phone);
