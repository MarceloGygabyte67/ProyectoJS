<?php
// process.php - Procesamiento y envío de correo en PHP

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    
    // 1. Limpieza y sanitización de entradas
    $name    = filter_var(trim($_POST['name'] ?? ''), FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $company = filter_var(trim($_POST['company'] ?? ''), FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $phone   = filter_var(trim($_POST['phone'] ?? ''), FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $email   = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
    $subject = filter_var(trim($_POST['subject'] ?? ''), FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $userMsg = filter_var(trim($_POST['message'] ?? ''), FILTER_SANITIZE_FULL_SPECIAL_CHARS);

    // 2. Regla de validación: Desaprueba si faltan datos obligatorios o el email es inválido
    if (empty($name) || empty($email) || empty($subject) || empty($userMsg) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: index.php?status=error&message=" . urlencode("Por favor, completa todos los campos obligatorios con un correo válido."));
        exit;
    }

    // 3. Regla para simular un fallo manual (escribiendo 'error' en asunto o mensaje)
    if (stripos($subject, 'error') !== false || stripos($userMsg, 'error') !== false) {
        header("Location: index.php?status=error&message=" . urlencode("El Lórax desaprobó tu mensaje por contener palabras no permitidas."));
        exit;
    }

    // 4. Configuración para el envío del correo electrónico
    $to = "ramirezolamarcelo546@gmail.com"; // <-- REEMPLAZA CON TU DIRECCIÓN DE CORREO REAL
    $emailSubject = "Nuevo mensaje de contacto: " . $subject;

    // Cuerpo del correo
    $body  = "Has recibido un nuevo mensaje desde el formulario:\n\n";
    $body .= "Nombre: " . $name . "\n";
    if (!empty($company)) { $body .= "Compañía: " . $company . "\n"; }
    if (!empty($phone))   { $body .= "Teléfono: " . $phone . "\n"; }
    $body .= "Correo: " . $email . "\n";
    $body .= "Asunto: " . $subject . "\n\n";
    $body .= "Mensaje:\n" . $userMsg . "\n";

    // Cabeceras HTTP
    $headers  = "From: no-reply@tu-dominio.com\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // 5. Envío y redirección según resultado
    if (@mail($to, $emailSubject, $body, $headers)) {
        // Redirige como ÉXITO -> activa la animación de vuelo del Lórax
        header("Location: index.php?status=success");
        exit;
    } else {
        // Redirige como ERROR -> activa la caída en 3D del Lórax
        header("Location: index.php?status=error&message=" . urlencode("No se pudo entregar el correo desde el servidor."));
        exit;
    }

} else {
    header("Location: index.php");
    exit;
}