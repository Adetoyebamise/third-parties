const express = require("express")
const app = express()
require('dotenv').config({ path: __dirname + '/.env' })
const sgMail = require('@sendgrid/mail');

const PORT = 3500

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'adetoye@zealightlabs.com',
  from: {
    name: "Send grid testing",
    email: 'adetoyebamise@gmail.com'
  }, // Use the email address or domain you verified above
  subject: 'Sending with Twilio SendGrid Testing',
  text: 'Hey, Hope this mail find you well mate.',
  html: '<strong>Chills</strong>',
};

sgMail
  .send(msg)
  .then(() => {}, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });


app.listen(PORT, () => console.log(`app started on port ${PORT}`))