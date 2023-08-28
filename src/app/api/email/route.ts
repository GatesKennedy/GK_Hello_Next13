import { FormValues } from '@/app/talk/Contact'



export async function POST(req:Request) {
	const body: FormValues = await req.json() as FormValues

	console.log('body: ', body)

	return new Response('Email Sent')
}