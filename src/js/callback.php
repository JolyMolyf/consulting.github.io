<?php

function error($msg){
    $responce = array("success" => false, "message" => $msg );

	return json_encode($responce);
}

$nameDesk = $_POST['nameDesk'];
$phone = $_POST['phoneDesk'];


$message = "Created: " . $nameDesk . " " . $phone ;

$responce = array();
$responce["success"] =  true;
$responce["message"] = $message;




$to = "vsdorwork@gmail.com";
$headers =  'From: noreply@turqusconsulting.com.pl' . "\r\n" .
                    'noreply@turqusconsulting.com.pl' . "\r\n" .
                    'MIME-Version: 1.0;' . "\r\n" . 
                    "Content-type: text/html; charset=UTF-8" . "\r\n" .
                    'X-Mailer: PHP/' . phpversion();
$subject = "Call back :" . $nameDesk . " id = " . $phone ;
$message = "Call back: " . "\r\n" . $nameDesk . "\r\n". " Phone: " . $phone ;




mail($to, $subject, $message, $headers);

echo json_encode($responce);

 ?>