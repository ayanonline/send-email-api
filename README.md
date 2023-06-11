# Node.js Email Sending Project

This is a Node.js project that demonstrates how to send emails using the Nodemailer library. It provides an API endpoint for sending emails, and a basic React client to interact with the API.

## Features

- Sends emails using the Nodemailer library
- Provides a simple API endpoint to send emails
- Includes a React client to interact with the API

## Requirements

- Node.js (version 18.13.0)
- NPM (version 8.19.3)

## Configuration

- Create .env file with your email and password information.

## API Endpoint

- The API endpoint for sending emails is /send-email.

- Method: POST
- URL: http://localhost:3000/send-email
- Headers: Content-Type: application/json
- Request Body:
- to: Recipient's email address
- subject: Email subject
- text: Email content

## Sending a Request (React.js)
```jsx
import axios from 'axios';

const handleSendEmail = async () => {
  try {
    await axios.post('/send-email', {
      to: 'recipient@example.com',
      subject: 'Hello from React',
      text: 'Hello, this is a test email from React using Axios!'
    });
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

handleSendEmail();
```