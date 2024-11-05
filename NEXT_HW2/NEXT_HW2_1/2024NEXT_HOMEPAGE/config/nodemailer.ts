// 이 파일은 사용하지 않습니다 We don't use this file
import nodemailer from "nodemailer";

const email = process.env.NODEMAILOR_EMAIL;
const pass = process.env.NODEMAILOR_PASSWORD;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
