
const nodemailer = require('nodemailer')
require('dotenv').config()

const subject = 'Welcome to My App';
const message = 'Thank you for subscribing to our app!';

exports.sendEmail = async (email) => {
    let transporter = nodemailer.createTransport({
       // service: 'gmail',
        host: "smtp.abv.bg",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL, // replace with your email
            pass: process.env.PASS // replace with your password
        },
        tls:{
          rejectUnauthorized:false
        }
    });

     await transporter.sendMail({
        from: process.env.EMAIL,
        to:email,
        subject,
        text: message
    });
}