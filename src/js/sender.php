<?php

function error($msg){
    $responce = array("success" => false, "message" => $msg );

	return json_encode($responce);
}

$name = $_POST['name'];
$term = $_POST['term'];
$reason = $_POST['reason'];
$relatives = $_POST['relatives'];
$city = $_POST['city'];
$email = $_POST['email'];
$data = $_POST['data'];





$responce = array();
$responce["success"] =  true;
$responce["message"] = $message;




$to = $email;
$headers =  'From: noreply@turqusconsulting.com.pl' . "\r\n" .
                    'noreply@turqusconsulting.com.pl' . "\r\n" .
                    'MIME-Version: 1.0;' . "\r\n" . 
                    "Content-type: text/html; charset=UTF-8" . "\r\n" .
                    'X-Mailer: PHP/' . phpversion();
$subject = "New Request from " . $name . " id = " . microtime() ;
$message = "Name: " . $name . "\r\n" . " Duration: " . $term . "\r\n" . " Why here: " . $reason . "\r\n" . " Are there relatives in Poland: " . $relatives  . "\r\n" . " City: " . $city ; 




mail($to, $subject, $message, $headers);

echo json_encode($responce);

 ?>
