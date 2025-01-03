import { sendEmail } from '../../../lib/email';
import { FormValues } from '../../../types';

export async function POST(req: Request): Promise<Response> {
	try {
		const body: FormValues = (await req.json()) as FormValues;

		const smtpResponse = await sendEmail({
			to: [body.email, String(process.env.SMTP_USER)],
			subject: 'Hello from Gates Kennedy',
			text: `Message: ${body.message}`,
			html: `<div style="background-color:black;color:ivory;border-radius: 12px; padding: 24px;"><h3>Auto-Engagment from Gates_Kennedy </h3><ul>
			<li>Sender: ${body.name}</li>
			<li>Message: ${body.message}</li>
			</ul></div>`,
		});

		return new Response(JSON.stringify(smtpResponse));
	} catch (error: any) {
		console.log('ERR: ', error);
		return error;
	}
}

//======REF======

// interface SentMessageInfo {
// 			/** includes the envelope object for the message */
// 		envelope: MimeNode.Envelope;
// 			/** most transports should return the final Message-Id value used with this property */
// 		messageId: string;
// 		accepted: Array<string | Mail.Address>;
// 		rejected: Array<string | Mail.Address>;
// 		pending: Array<string | Mail.Address>;
// 		response: string;
// }
