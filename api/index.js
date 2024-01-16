import dotenv from 'dotenv';
import express from 'express';
import cors from "cors";
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();

const port = 3000;
app.use(cors({
    origin: ["http://127.0.0.1:5500/", "https://ujjawalrr.github.io", "https://ujjawalrr.github.io/ujjawal-kumar/"],
}))
app.listen(port, () => {
    console.log("Server is running!");
});

app.use(express.json());

app.get('/', async (req, res, next) => {
    res.status(200).json("Server Running!")
})
app.post('/contact', async (req, res, next) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'josaacounsellors@gmail.com',
                pass: process.env.MAIL
            }
        })
        const mailOptions = {
            from: 'josaacounsellors@gmail.com',
            to: "ujjawalrr@gmail.com",
            subject: "Important Message From Portfolio Website",
            html: `User <b>${req.body.name}</b> is trying to contact you via <b>${req.body.email}</b>. <br> <b>Message:</b> ${req.body.message}`
        }
        transporter.sendMail(mailOptions, (error, info) => {
            res.status(200).json("Message sent!");
        })
    } catch (error) {
        next(error);
    }
});