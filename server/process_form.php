<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    http_response_code(200);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = $_POST['fullName'] ?? '';
    $email = $_POST['email'] ?? '';
    $company = $_POST['company'] ?? '';
    $employees = $_POST['employees'] ?? '';
    $message = $_POST['message'] ?? '';
    $findUs = $_POST['findUs'] ?? '';

    $to = "hello@epfdesk.com";
    $subject = "New Contact Form Submission from $fullName";
    $body = "
    You have received a new message from the contact form:\n\n
    Full Name: $fullName\n
    Email: $email\n
    Company: $company\n
    Company Size: $employees\n
    Message: $message\n
    Found Us: $findUs\n
    ";
    $headers = "From: noreply@epfdesk.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode([
            "success" => true,
            "message" => "✅ Email sent successfully!"
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "message" => "❌ Failed to send email."
        ]);
    }
} else {
    http_response_code(405);
    echo json_encode([
        "success" => false,
        "message" => "Method not allowed"
    ]);
}
?>
