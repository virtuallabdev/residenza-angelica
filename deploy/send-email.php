<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Carica la configurazione
$config = require_once(__DIR__ . '/config.php');

function verifyRecaptcha($token, $secret, $threshold) {
    $url = 'https://www.google.com/recaptcha/api/siteverify';
    $data = [
        'secret' => $secret,
        'response' => $token
    ];
    
    $options = [
        'http' => [
            'method' => 'POST',
            'header' => 'Content-Type: application/x-www-form-urlencoded',
            'content' => http_build_query($data)
        ]
    ];
    
    $context = stream_context_create($options);
    $response = file_get_contents($url, false, $context);
    $result = json_decode($response);
    
    return $result->success && $result->score >= $threshold;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    // 1. Honeypot
    if (!empty($data['website'])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Spam detected']);
        exit;
    }
    
    // 2. reCAPTCHA
    if (!isset($data['recaptchaToken']) || 
        !verifyRecaptcha($data['recaptchaToken'], $config['recaptcha_secret'], $config['recaptcha_threshold'])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'reCAPTCHA verification failed']);
        exit;
    }
    
    // 3. Validazione
    if (empty($data['name']) || empty($data['email']) || empty($data['message'])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Campi obbligatori mancanti']);
        exit;
    }
    
    // 4. Sanitizzazione
    $to = $config['email_to'];
    $subject = "Nuovo messaggio dal form di contatto";
    $name = htmlspecialchars(trim($data['name']), ENT_QUOTES, 'UTF-8');
    $email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($data['message']), ENT_QUOTES, 'UTF-8');
    
    // 5. Validazione email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Email non valida']);
        exit;
    }
    
    // 6. Lunghezza massima
    if (strlen($message) > 5000) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Messaggio troppo lungo']);
        exit;
    }
    
    // 7. Costruzione email
    $body = "Nome: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Messaggio:\n$message\n\n";
    $body .= "---\n";
    $body .= "IP: " . $_SERVER['REMOTE_ADDR'] . "\n";
    $body .= "Data: " . date('Y-m-d H:i:s');
    
    $headers = "From: " . $config['email_from'] . "\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    // 8. Invio
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => 'Error sending email']);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
?>