import { FormValues } from '@/app/talk/Contact'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  pool: true,
  host: String(process.env.MAIL_HOST),
  port: Number(process.env.MAIL_PORT),
  secure: true, // use TLS
  auth: {
    user: String(process.env.MAIL_USER),
    pass: String(process.env.MAIL_PASS),
  },
});

// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

// verify connection configuration
transporter.verify(function (error, success) {
	if (error) {
		console.log(error);
	} else {
		console.log("Server is ready to take messages");
	}
});


export async function POST(req:Request) {
	try {
		const body: FormValues = await req.json() as FormValues

		const message = {
			from: process.env.MAIL_USER,
			to: ["Conor@GatesKennedy.com", body.email],
			subject: "Hello from Gates Kennedy",
			text: `Message: ${body.message}`,
			html: `<div><h3>Message from '${body.name}': </h3><p>${body.message}</p></div>`
		};

		transporter.sendMail(message, function(error, info) {
			console.log('enter sendMail() callback')
			if (error) {
				console.log(error);
			} else {
				console.log('Email sent: ' + info.response);
			}
		});

		return new Response('Email Sent')

	} catch (error: any) {
		console.log('ERR: ', error)
		return error
	}
}