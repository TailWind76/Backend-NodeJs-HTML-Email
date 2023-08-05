// Import the required modules
const nodemailer = require('nodemailer');

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'Your_Email_Service',
  auth: {
    user: 'your_email@example.com',
    pass: 'your_email_password'
  }
});

// Define the email options
const mailOptions = {
  from: 'your_email@example.com',
  to: 'recipient@example.com',
  subject: 'Testing Nodemailer - HTML Email',
  html: '<h1>Hello,</h1><p>This is an HTML email from Nodemailer!</p>'
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
