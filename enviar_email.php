<?php
// 1. Capturar los datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

// 2. Configurar los detalles del correo electrónico
$destinatario = "nachozaldo3@gmail.com";
$asunto = "Nuevo mensaje de contacto desde Nalartist's Shop";
$cuerpo = "Has recibido un nuevo mensaje.\n\n";
$cuerpo .= "Nombre Completo: $nombre\n";
$cuerpo .= "Email: $email\n";
$cuerpo .= "Mensaje:\n$mensaje\n";

// 3. Encabezados adicionales para el correo
$encabezados = "From: $email\r\n"; // Correo del remitente
$encabezados .= "Reply-To: $email\r\n";
$encabezados .= "X-Mailer: PHP/" . phpversion();

// 4. Enviar el correo
if (mail($destinatario, $asunto, $cuerpo, $encabezados)) {
    echo "Mensaje enviado correctamente.";
} else {
    echo "Error al enviar el mensaje.";
}
?>
