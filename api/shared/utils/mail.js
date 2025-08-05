const nodemailer = require('nodemailer');
const { logger } = require('./logger');

const sendEmail = async (email, subject, message, html) => {
  try {
    const toEmail = email;
    var transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL_FROM + ' <' + process.env.SMTP_USERNAME + '>',
      to: toEmail,
      subject: subject,
      text: message,
      html: html,
    };
    transport.sendMail(mailOptions, (error) => {
      if (error) {
        logger.error(error.message);
      }
    });
  } catch (error) {
    logger.error(error.message);
  }
};

module.exports = sendEmail;
