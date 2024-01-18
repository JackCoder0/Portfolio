<?php

$nome = addslashes($_POST['name']);
$email = addslashes($_POST['email']);
$mensagem = addslashes($_POST['message']);

$to = "jacksonxcontato13@gmail.com";
$subject = "Contato por Portfolio";

$body = "Nome: " . $nome . "\n" .
    "E-mail: " . $email . "\n" .
    "Mensagem: " . $mensagem . "\n";

$header = "From: teste@gmail.com" . "\n" .
    "Reply-to: " . $email . "\n" .
    "X-Mailer:PHP/" . phpversion();

if (mail($to, $subject, $body, $header)) {
    echo ("E-mail enviado com sucesso!");
}else{
    echo ("Houve um erro ao enviar o email!");
}
