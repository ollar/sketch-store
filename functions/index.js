const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(
    `smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

// Your company name to include in the emails
// TODO: Change this to your app or company name to customize the email sent.
const APP_NAME = 'Cloud Storage for Firebase quickstart';

// [START sendOrderEmail]
/**
 * Sends a welcome email to new user.
 */
// [START onCreateTrigger]
exports.sendOrderEmail = functions.database.ref('/orders').onCreate(event => {


  return sendOrderEmail(event.data.val());
});
// [END sendOrderEmail]


// Sends a welcome email to the given user.
function sendOrderEmail(order) {
  const mailOptions = {
    from: `${APP_NAME} <noreply@firebase.com>`,
    to: gmailEmail
  };

  // The user subscribed to the newsletter.
  mailOptions.subject = `New order on ${APP_NAME}!`;
  mailOptions.text = `See order details below:\n ${JSON.stringify(order)}`;
  return mailTransport.sendMail(mailOptions).then(() => {
    console.log('New welcome email sent to:', email);
  });
}
