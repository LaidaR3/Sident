import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const { fullName, phone, email, service, message } =
            await request.json();

        if (!fullName || !phone || !email || !service) {
            return NextResponse.json(
                { message: "Missing required fields." },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Sident Website" <${process.env.EMAIL_USER}>`,
            to: "rusinovcilaida13@gmail.com",
            replyTo: email,

            subject: `Kërkesë e re nga faqja Sident - ${fullName}`,

            text: `
KËRKESË E RE NGA FAQJA SIDENT

Të dhënat e kontaktit
---------------------

Emri dhe mbiemri: ${fullName}
Telefoni: ${phone}
Email: ${email}
Shërbimi i interesuar: ${service}

Mesazhi
-------
${message || "Nuk është shkruar mesazh."}

---------------------
Ky mesazh është dërguar përmes formularit të kontaktit në faqen Sident.
      `,
        });

        return NextResponse.json(
            { message: "Email sent successfully." },
            { status: 200 }
        );
    } catch (error) {
        console.error("EMAIL ERROR:", error);

        return NextResponse.json(
            { message: "Email could not be sent." },
            { status: 500 }
        );
    }
}