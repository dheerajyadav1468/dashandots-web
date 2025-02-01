<?php
// Enable error logging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Log the request method
error_log("Request method: " . $_SERVER['REQUEST_METHOD']);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['contact_name'] ?? '';
    $email = $_POST['contact_email'] ?? '';
    $message = $_POST['contact_message'] ?? '';

    // Log the received data
    error_log("Received data: " . print_r($_POST, true));

    // Email details
    $to = "dheerajyadav1468@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    
    // Create email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Email headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send email
    if (mail($to, $subject, $email_content, $headers)) {
        // Email sent successfully
        echo json_encode(["status" => "success", "message" => "Thank you! Your message has been sent."]);
    } else {
        // Email sending failed
        $error = error_get_last();
        error_log("Email sending failed: " . print_r($error, true));
        echo json_encode(["status" => "error", "message" => "Sorry, there was an error sending your message."]);
    }
} else {
    // Not a POST request
    echo json_encode(["status" => "error", "message" => "Invalid request method: " . $_SERVER['REQUEST_METHOD']]);
}
?>