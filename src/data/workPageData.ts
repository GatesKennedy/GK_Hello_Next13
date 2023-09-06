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
import modernSuite_devices from '../../public/modernSuite_devices.png'
import modernSuite_QuickTasks from '../../public/modernSuite_POSQuickTasks.png'
import modernSuite_MSGraphic from '../../public/modernSuite_Graphic.jpeg'
import modernSuite_ZamboniArch from '../../public/modernSuite_zamboniSyncArchitecture.jpeg'

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
	href: string | null
}

//	Projects Data
export const projectsData: ProjectProps[] = [
	{
		title: 'G_K Hello',
		description: 'A portfolio site of recent work. You are currently viewing this project.',
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
		href: null
	},
	{
		title: 'Mimir Dashboard',
		description: 'Business dashboard for dental practices',
		images: [
			{
				title: 'Argos Software Architecture',
				desc: 'Argos Software Architecture',
				src: mimir_arch,
			},
		],
		attributes: {
			time: { start: "August '22", end: "June '23" },
			status: STATUS_TYPE.CLOSED,
			tags: [TAG.TS, TAG.NEXT, TAG.NODE, TAG.POSTGRES, TAG.MUI, TAG.AWS_LAMBDA, TAG.PRISMA, TAG.CHART_JS, TAG.NIVO, TAG.NEXTAUTH, TAG.PUPPETEER],
		},
		features: [
			{title: 'Data Warehouse', desc:'Data is regularly collected from multiple APIs, processed into easily consumable metrics and stored as historical records'},
			{title: 'Dynamic Report Generation', desc:'Custom reports can be built from all available data and exported to a pdf or csv for presentations or further analysis'},
			{title: 'User Access Tiers', desc:'Users are granted access to features, admin settings and certain data based on their account type and profile'},
			{title: 'Admin Controls', desc:'Admin are able to set performance targets and specify access settings for other users'},
			{title: 'Domain Specific Userbase', desc:'Each instance of the mimir dashboard whitelists users of specific Google Suite domains integrating an entire team safely'},
			{title: 'OpenDental Integration', desc:'The associated Nintu server instance regularly queries and stores vital bussiness metrics from the OpenDental API to expose behaviors over time.'}
		],
		href: null
	},
	{
		title: 'Dental Risk',
		description:
			"New Patient intake form for dentists to collect and provide information about a patient's potential risks related to their dental health.",
		images: [
			{ title: 'Demo', desc: 'Intake process demonstration', src: dentalRisk_demo },
			{ title: 'Form Validation', desc: 'Each input field has minimum requirements and/or pattern matching for validation.', src: dentalRisk_validation },
			{ title: 'Review Screen', desc: 'User can confirm no changes need to be made before results are generated and emailed.', src: dentalRisk_review },

		],
		attributes: {
			time: { start: "April '23", end: "May '23" },
			status: STATUS_TYPE.CLOSED,
			tags: [TAG.TS, TAG.NEXT, TAG.CHAKRA, TAG.REACTHOOKFORM, TAG.NODEMAILER, TAG.POSTGRES, TAG.GRAPH_QL, TAG.HASURA, TAG.DOCKER].sort(),
		},
		features: [
			{title: 'Automated Emails', desc:'Upon user form submission, the results for the questionnaire are generated and sent to the provided email from the doctor\'s chosen email address.'},
			{title: 'Form Validation', desc:'Ensure data submitted matches the requirements set forth in the various form controls.'},
			{title: 'Content Management', desc:'The list of questions and the resulting information exposed to the user can be customized by the instance admin.'},
			{title: 'SaaS Deployments', desc: 'Instances of Dental Risk can be independently deployed for seperate offices with custom styling and content.'}
		],
		href: null
	},
	{
		title: 'Modern Suite for RMH',
		description: 'Developed by New West Technologies, Modern Suite is a device-agnostic software extension to Retail Managment Hero that\'s accessible via web browser on internal store network',
		images: [
			{ title: 'Modern Suite', desc: 'by New West Technologies', src: modernSuite_MSGraphic },
			{ title: 'Quick Tasks', desc: 'POS Quick Task lead to happier employees', src: modernSuite_QuickTasks },
			{ title: 'Works on Any Device', desc: 'Modern Suite can be accessed by any device with a browser via local network.', src: modernSuite_devices },
			{ title: 'MS Sync Architecture', desc: 'Rapid Sync & Zamboni Sync Architecture', src: modernSuite_ZamboniArch },
		],
		attributes: {
			time: { start: "Feb '21", end: "April '22" },
			status: STATUS_TYPE.CLOSED,
			tags: [ TAG.TS, TAG.NODE, TAG.DOT_NET, TAG.SQL_SERVER, TAG.SEQUELIZE, TAG.GIT_LAB, TAG.PM2, TAG.ATLASSIAN, TAG.LINUX, TAG.VIM, TAG.PYTHON ].sort(),
		},
		features: [
			{title: 'New West Technologies', desc:'From New West Technologies, a device-agnostic software extension to Retail Managment Hero that\'s accessible via web browser on internal store network'},
			{title: 'Quick Tasks', desc:'Quick Tasks have redefined efficiency in Modern Suite task execution. Akin to making a call to someone on speed dial, Quick Tasks are rapid singular-action commands that simply get the job done quicker!'},
			{title: 'Data Consistency', desc:'Real-time bidirectional synchronization to RMH, ensuring data at RMH Central matches the stores while \'Zamboni Data Cleanup\' cleans up and resyncs Item, PO, and Transfer based on a designated date'},
		],
		href: 'https://www.newestech.com/modern-suite-software/'
	},
];