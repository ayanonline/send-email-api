const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

// Create a transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_MAIL, // Replace with your email address
    pass: process.env.SMTP_PASSWORD, // Replace with your password or app-specific password
  },
});

app.use(express.json());

// health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "API is up and running",
  });
});

// API endpoint to send email
app.post("/send-email", (req, res) => {
  const { to, subject, text } = req.body;

  // Set up email data
  const mailOptions = {
    from: process.env.SMTP_MAIL, // Replace with your email address
    to: to,
    subject: subject,
    text: text,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error occurred:", error.message);
      res
        .status(500)
        .json({ error: "An error occurred while sending the email" });
    } else {
      console.log("Email sent successfully!");
      console.log("Message ID:", info.messageId);
      res.json({ message: "Email sent successfully!" });
    }
  });
});

app.listen(3000, () => {
  console.log("API server is running on port 3000");
});
