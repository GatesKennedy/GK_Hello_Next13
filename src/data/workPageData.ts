import { STATUS_TYPE, TAG } from '@/reference/stringConstants'
import { StaticImageData } from 'next/image'

import info_headShot from '../../public/HeadShot-square.png'
import mimir_arch from '../../public/mimir_arch.png';
import hello_info from '../../public/hello_info-min.png'
// import hello_talk from '../../public/hello_talk-min.png'
import hello_talk from '../../public/hello_talk.webp'
import hello_light from '../../public/hello_light.webp'
import hello_dark from '../../public/hello_dark.webp'
import hello_talkDemo from '../../public/hello_talk_demo.gif'
import dentalRisk_demo from '../../public/DentalRisk_demo.gif'
import dentalRisk_validation from '../../public/dentalRisk_validation.webp'
import dentalRisk_review from '../../public/dentalRisk_review.webp'


export interface ListImage {
	title: string;
	desc: string;
	src: StaticImageData;
}
export interface Feature {
	title: string;
	desc: string;
}
export interface TimeProps {
	start: string;
	end: string;
}
export interface ProjectAttributeProps {
	time: TimeProps;
	status: STATUS_TYPE;
	tags: TAG[];
}
export interface ProjectProps {
	title: string;
	description: string;
	attributes: ProjectAttributeProps;
	features: Feature[];
	images: ListImage[];
}

//	Projects Data
export const projectsData: ProjectProps[] = [
	{
		title: 'G_K Hello',
		description: 'This. A portfolio site of recent work.',
		images: [
			{ title: 'Hello', desc: 'Dark Mode', src: hello_dark },
			{ title: 'Auto-engagement', desc: 'hmu...', src: hello_talkDemo },
			// { title: 'Hello', desc: 'Light Mode', src: hello_light },
		],
		attributes: {
			time: { start: "August '23", end: "August '23" },
			status: STATUS_TYPE.IN_PROGRESS,
			tags: [TAG.TS, TAG.NEXT, TAG.NODEMAILER, TAG.CHAKRA],
		},
		features: [
			{title: 'Light/Dark Mode', desc:'Having a Light/Dark mode option instantly makes your website \"super cool\" and modern UI libraries make it straight forward to implement.'},
			{title: 'Auto Engagement', desc:'Upon submission of this form, nodemailer uses my SMTP server to send you and I an email to begin a conversation.'},
		],
	},
	{
		title: 'Mimir Dashboard',
		description: 'Business dasbhoard for dental practices',
		images: [
			{
				title: 'Argos Software Architecture',
				desc: 'Argos Software Architecture',
				src: mimir_arch,
			},
			{ title: 'two', desc: 'about two', src: info_headShot },
			{ title: 'three', desc: 'about three', src: info_headShot },
			{ title: 'four', desc: 'about four', src: info_headShot },
		],
		attributes: {
			time: { start: "August '22", end: "June '23" },
			status: STATUS_TYPE.CLOSED,
			tags: [TAG.TS, TAG.NEXT, TAG.NODE, TAG.POSTGRES, TAG.MUI, TAG.AWS_LAMBDA, TAG.PRISMA, TAG.CHART_JS, TAG.NIVO, TAG.NEXTAUTH  ],
		},
		features: [
			{title: 'Data Warehouse', desc:'Data is regularly collected from multiple APIs, processed into easily consumable metrics and stored as historical records'},
			{title: 'Dynamic Report Generation', desc:'Custom reports can be built from all available data and exported to a pdf or csv for presentations or further analysis'},
			{title: 'User Access Tiers', desc:'Users are granted access to features, admin settings and certain data based on their account type and profile'},
			{title: 'Admin Controls', desc:'Admin are able to set performance targets and specify access settings for other users'},
			{title: 'Domain Specific Userbase', desc:'each instance of the mimir dashboard whitelists users of specific Google Suite domains integrating an entire team safely'},
			{title: 'Domain Specific Userbase', desc:'each instance of the mimir dashboard whitelists users of specific Google Suite domains integrating an entire team safely'},
		],
	},
	{
		title: 'Dental Intake',
		description:
			"New Patient intake form for dentists to collect and provide information about a patient's potential risks related to their dental health.",
		images: [
			{ title: 'Demo', desc: 'Intake process demonstration', src: dentalRisk_demo },
			{ title: 'Form Validation', desc: 'Each input field has minimum requirements and/or pattern matching for validation.', src: dentalRisk_validation },
			{ title: 'Review Screen', desc: 'User can confirm no changes need to be made before results are generated and emailed.', src: dentalRisk_review },

		],
		attributes: {
			time: { start: "Feb '23", end: "March '23" },
			status: STATUS_TYPE.CLOSED,
			tags: [TAG.TS, TAG.NEXT, TAG.CHAKRA, TAG.REACTHOOKFORM, TAG.NODEMAILER],
		},
		features: [
			{title: 'Automated Emails', desc:'Upon user form submission, the results for the questionnaire are generated and sent to the provided email from the doctor\'s chosen email address.'},
			{title: 'Form Validation', desc:'Ensure data submitted matches the requirements set forth in the various form controls.'},
			{title: 'Ease of Use', desc:'Consistency across form and readability are key UX design descision.'},
		],
	},
	{
		title: 'Modern Suite for RMH',
		description: 'New West Technologies',
		images: [
			{ title: 'one', desc: 'about one', src: info_headShot },
			{ title: 'two', desc: 'about two', src: info_headShot },
			{ title: 'three', desc: 'about three', src: info_headShot },
			{ title: 'four', desc: 'about four', src: info_headShot },
		],
		attributes: {
			time: { start: "Feb '21", end: "April '22" },
			status: STATUS_TYPE.CLOSED,
			tags: [TAG.NODE, TAG.DOT_NET, TAG.SQL_SERVER, TAG.SEQUELIZE, TAG.GIT_LAB, TAG.PM2, TAG.ATLASSIAN, TAG.LINUX, TAG.VIM ],
		},
		features: [],
	},
];