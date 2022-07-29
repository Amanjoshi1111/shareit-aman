//to send image we use nodemailer package (keep in mind aman)
const nodemailer = require('nodemailer');

async function sendMail({ from, to, subject, text, html }) {

    let trasnsporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: `${process.env.MAIL_USER}@gmail.com`,
            pass: process.env.MAIL_PASS
        }
    });

    let info = await trasnsporter.sendMail({
        from: `shareIT <${from}>`,
        to: to,
        subject: subject,
        text: text,
        html: html,
    });

    console.log(info);
}

module.exports = sendMail;