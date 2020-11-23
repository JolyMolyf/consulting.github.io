<?php

function error($msg){
    $responce = array("success" => false, "message" => $msg );

	return json_encode($responce);
}

$nameDesk = $_POST['nameDesk'];
$phone = $_POST['phoneDesk'];




$responce = array();
$responce["success"] =  true;
$responce["message"] = $message;




$to = $email;
$headers =  'From: noreply@turqusconsulting.com.pl' . "\r\n" .
                    'noreply@turqusconsulting.com.pl' . "\r\n" .
                    'MIME-Version: 1.0;' . "\r\n" . 
                    "Content-type: text/html; charset=UTF-8" . "\r\n" .
                    'X-Mailer: PHP/' . phpversion();
$subject = "New Request from " . $nameDesk . " id = " . $phone ;
$message = "Name: " . $nameDesk . "\r\n" . "Phone: " . $phone;



mail($to, $subject, $message, $headers);

echo json_encode($responce);

 ?>
