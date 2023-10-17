<?php 

$name = $_POST['name'];
$number = $_POST['number'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'katerinagyseva2@gmail.com';                 // Наш логин
$mail->Password = 'bvbi cnmu ypiu pbcu';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('katerinagyseva2@gmail.com', 'window');   // От кого письмо 
$mail->addAddress('katerinagyseva2@gmail.com');     // Add a recipient
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данные';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $number . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>