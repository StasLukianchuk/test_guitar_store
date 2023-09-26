<?php

/*https://api.telegram.org/bot6392005401:AAFXDztusUKLd1JuqkaNKc1kQDdk5dF7Zrg/getUpdates*/ */

$name = $_POST['user_name'];
$name = $_POST['user_phone'];
$name = $_POST['user_email'];
$token = "6392005401:AAFXDztusUKLd1JuqkaNKc1kQDdk5dF7Zrg";
$chat_id = "-4089518539";
$arr = array(
  'User name' => $name,
  'Phone' => $phone,
  'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b>".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}
  &parse_mode=html&text={$txt}", "r");

if ($sendToTelegram) {
  echo '<h1 class="succes">Thanks for your message!</h1>';
    return true;
} else {
  header('Error');
}
?>
