<?php
// Email Configuration
$to_email = "info@dashandots.tech"; // Change this to your email
$subject = "New Contact Form Submission";
$thanks_page = "thank-you.html"; // Redirect after successful submission
$contact_page = "contact.html"; // Redirect if an error occurs

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input data
    $name = htmlspecialchars(trim($_POST["contact_name"]));
    $email = filter_var(trim($_POST["contact_email"]), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST["contact_message"]));

    // Validate input fields
    if (empty($name) || empty($email) || empty($message)) {
        echo "All fields are required!";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address!";
        exit;
    }

    // Email headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
    $headers .= "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";

    // Email content
    $email_body = "
        <html>
        <head><title>Contact Form Submission</title></head>
        <body>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Message:</strong> $message</p>
        </body>
        </html>";

    // Send email
    if (mail($to_email, $subject, $email_body, $headers)) {
        header("Location: $thanks_page");
        exit;
    } else {
        echo "Email not sent. Try again!";
        exit;
    }
} else {
    header("Location: $contact_page");
    exit;
}
?>
