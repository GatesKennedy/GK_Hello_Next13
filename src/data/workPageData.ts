import { STATUS_TYPE, STRINGS, TOOL } from '@/constants/stringConstants';
import { ProjectProps } from '../types';

import info_headShot from '../../public/images/projects/HeadShot-square.png';
import mimir_arch from '../../public/images/projects/mimir_arch.png';
import hello_info from '../../public/images/projects/hello_info-min.png';
// import hello_talk from '../../public/images/projects/hello_talk-min.png'
import hello_talk from '../../public/images/projects/hello_talk.webp';
import hello_light from '../../public/images/projects/hello_light.webp';
import hello_dark from '../../public/images/projects/hello_dark.webp';
import hello_talkDemo from '../../public/images/projects/hello_talk_demo.gif';
import dentalRisk_demo from '../../public/images/projects/DentalRisk_demo.gif';
import dentalRisk_validation from '../../public/images/projects/dentalRisk_validation.webp';
import dentalRisk_review from '../../public/images/projects/dentalRisk_review.webp';
import modernSuite_devices from '../../public/images/projects/modernSuite_devices.png';
import modernSuite_QuickTasks from '../../public/images/projects/modernSuite_POSQuickTasks.png';
import modernSuite_MSGraphic from '../../public/images/projects/modernSuite_Graphic.jpeg';
import modernSuite_ZamboniArch from '../../public/images/projects/modernSuite_zamboniSyncArchitecture.jpeg';
import k6_stress from '../../public/images/projects/k6-stress-test_1.webp';
import k6_load from '../../public/images/projects/k6-average-load.webp';
import k6_spike from '../../public/images/projects/k6-spike-test_1.webp';
import k6_break from '../../public/images/projects/k6-breakpoint-test.webp';
import esc_skull from '../../public/images/projects/esc_coronaskull.webp';
import esc_nike from '../../public/images/projects/esc_nikedome.webp';
import esc_nikeInterior from '../../public/images/projects/esc_nikedome_interior.webp';

//	Projects Data
export const projectsData: ProjectProps[] = [
	{
		title: 'Tritone Analytics ',
		description: 'Migrating AWS Lambda reporting to a dedicated server',
		images: [],
		attributes: {
			time: { start: "Dec '23", end: "Feb '24" },
			status: STATUS_TYPE.CLOSED,
			tags: [
				TOOL.FAST_API,
				TOOL.PANDAS,
				TOOL.SQL_ALCH,
				TOOL.MATPLOTLIB,
				TOOL.SMTP_LIB,
				TOOL.PYDANTIC,
			].sort(),
		},
		features: [
			{
				title: 'Code Migration',
				desc: 'Platform migration from AWS lambda functions (python) to a self-hosted python server (FastAPI) and Postgres database',
			},
			{
				title: 'Automated Requests and Reports',
				desc: 'Replicated original functionality to regularly query Open Dental and build internal reports for owners, managers and team leads.',
			},
			{
				title: 'Interfacing Data Warehouse',
				desc: 'Raw data, processed data and generated reports are stored to a local data warehousing solution.',
			},
			{
				title: 'API Creation',
				desc: 'Added API functionality for dashboard integration. Data warehouse is accesible via RESTful API for irregular report access and custom data visualization',
			},
		],
		linkDemo: null,
		// {
		// 	title: 'API Repo',
		// 	href: STRINGS.FASTIFY_REPO,
		// },
		linkRepo: null,
		//  {
		// 	title: 'K6 Repo',
		// 	href: STRINGS.K6_REPO,
		// },
		linkMore: null,
	},
	{
		title: 'Internal Business Reporting: Server Migration',
		description: 'Migrating AWS Lambda reporting to a dedicated server',
		images: [],
		attributes: {
			time: { start: "Dec '23", end: "Feb '24" },
			status: STATUS_TYPE.CLOSED,
			tags: [
				TOOL.FAST_API,
				TOOL.PANDAS,
				TOOL.SQL_ALCH,
				TOOL.MATPLOTLIB,
				TOOL.SMTP_LIB,
				TOOL.PYDANTIC,
			].sort(),
		},
		features: [
			{
				title: 'Code Migration',
				desc: 'Platform migration from AWS lambda functions (python) to a self-hosted python server (FastAPI) and Postgres database',
			},
			{
				title: 'Automated Requests and Reports',
				desc: 'Replicated original functionality to regularly query Open Dental and build internal reports for owners, managers and team leads.',
			},
			{
				title: 'Interfacing Data Warehouse',
				desc: 'Raw data, processed data and generated reports are stored to a local data warehousing solution.',
			},
			{
				title: 'API Creation',
				desc: 'Added API functionality for dashboard integration. Data warehouse is accesible via RESTful API for irregular report access and custom data visualization',
			},
		],
		linkDemo: null,
		// {
		// 	title: 'API Repo',
		// 	href: STRINGS.FASTIFY_REPO,
		// },
		linkRepo: null,
		//  {
		// 	title: 'K6 Repo',
		// 	href: STRINGS.K6_REPO,
		// },
		linkMore: null,
	},
	{
		title: 'Office Operations Auditing Software',
		description: 'A web UI that reduced time-spent by 40%.',
		images: [
			// {
			// 	title: 'Data Input UI',
			// 	desc: 'The app was able to streamline the data input process with a centralized UI.',
			// 	src: k6_stress,
			// },
			// {
			// 	title: 'Automated Reports',
			// 	desc: 'Results and feedback for each office are generated as pdfs and emailed to managers automatically',
			// 	src: k6_spike,
			// },
			// {
			// 	title: 'Interfacing Data Warehouse',
			// 	desc: 'Raw data, processed data and generated reports are stored to a pre-existing data warehouse.',
			// 	src: k6_break,
			// },
		],
		attributes: {
			time: { start: "Oct '23", end: "Nov '23" },
			status: STATUS_TYPE.CLOSED,
			tags: [
				TOOL.FAST_API,
				TOOL.HTMX,
				TOOL.JINJA,
				TOOL.PANDAS,
				TOOL.SQL_ALCH,
				TOOL.PYDANTIC,
			].sort(),
		},
		features: [
			{
				title: 'Data Input UI',
				desc: 'The app was able to streamline the data input process with a centralized UI.',
			},
			{
				title: 'Automated Reports',
				desc: 'Results and feedback for each office are generated as pdfs and emailed to managers automatically',
			},
			{
				title: 'Interfacing Data Warehouse',
				desc: 'Raw data, processed data and generated reports are stored to a pre-existing data warehouse.',
			},
		],
		linkDemo: null,
		// {
		// 	title: 'API Repo',
		// 	href: STRINGS.FASTIFY_REPO,
		// },
		linkRepo: null,
		//  {
		// 	title: 'K6 Repo',
		// 	href: STRINGS.K6_REPO,
		// },
		linkMore: null,
	},
	{
		title: 'Load Testing: Fastify REST API',
		description:
			'A personal learning project using Node.js with Fastify and Grafana K6 to optimize API throughput',
		images: [
			{
				title: 'Stress Tests',
				desc: 'Medium duration exposure to high load.',
				src: k6_stress,
			},
			{
				title: 'Spike Tests',
				desc: 'Short exposure to maximum load',
				src: k6_spike,
			},
			{
				title: 'Breakpoint Tests',
				desc: 'Determine which conditions cause failure.',
				src: k6_break,
			},
			{
				title: 'Soak Tests',
				desc: 'Expose system to long period of an average load.',
				src: k6_load,
			},
		],
		attributes: {
			time: { start: "Oct '23", end: "Oct '23" },
			status: STATUS_TYPE.IN_PROGRESS,
			tags: [TOOL.NODE, TOOL.FASTIFY, TOOL.K6, TOOL.POSTMAN].sort(),
		},
		features: [
			{
				title: 'Stress Testing',
				desc: 'Sustained heavy load...',
			},
			{
				title: 'Spike Testing',
				desc: 'Short maximum peak load...',
			},
			{
				title: 'Soak Testing',
				desc: 'Average load for a long time can help identify memory leaks',
			},
			{
				title: 'Breakpoint Testing',
				desc: 'Ramp the request load well beyond normal operation to determine where failures exist.',
			},
		],
		linkDemo: {
			title: 'API Repo',
			href: STRINGS.FASTIFY_REPO,
		},
		linkRepo: {
			title: 'K6 Repo',
			href: STRINGS.K6_REPO,
		},
		linkMore: null,
	},
	{
		title: 'G_K Hello',
		description:
			'A portfolio site of recent work. You are currently viewing this project.',
		images: [
			{ title: 'Hello', desc: 'Dark Mode', src: hello_dark },
			{ title: 'Auto-engagement', desc: 'hmu...', src: hello_talkDemo },
			// { title: 'Hello', desc: 'Light Mode', src: hello_light },
		],
		attributes: {
			time: { start: "August '23", end: 'Current' },
			status: STATUS_TYPE.OPEN,
			tags: [TOOL.TS, TOOL.NEXT, TOOL.NODEMAILER, TOOL.CHAKRA],
		},
		features: [
			{
				title: 'Light/Dark Mode',
				desc: 'Having a Light/Dark mode option instantly makes your website "super cool" and modern UI libraries make it straight forward to implement.',
			},
			{
				title: 'Auto Engagement',
				desc: 'Upon submission of this form, nodemailer uses my SMTP server to send you and I an email to begin a conversation.',
			},
		],
		linkDemo: null,
		linkRepo: {
			title: 'Github',
			href: STRINGS.GK_HELLO_REPO,
		},
		linkMore: null,
	},
	{
		title: "TDB Dashboard (formerly 'Mimir')",
		description: 'Business dashboard for Texas Dental & Braces',
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
			tags: [
				TOOL.TS,
				TOOL.NEXT,
				TOOL.NODE,
				TOOL.POSTGRES,
				TOOL.MUI,
				TOOL.AWS_LAMBDA,
				TOOL.PRISMA,
				TOOL.CHART_JS,
				TOOL.NIVO,
				TOOL.NEXTAUTH,
				TOOL.PUPPETEER,
			],
		},
		features: [
			{
				title: 'Data Warehouse',
				desc: 'Data is regularly collected from multiple APIs, processed into easily consumable metrics and stored as historical records',
			},
			{
				title: 'Dynamic Report Generation',
				desc: 'Custom reports can be built from all available data and exported to a pdf or csv for presentations or further analysis',
			},
			{
				title: 'User Access Tiers',
				desc: 'Users are granted access to features, admin settings and certain data based on their account type and profile',
			},
			{
				title: 'Admin Controls',
				desc: 'Admin are able to set performance targets and specify access settings for other users',
			},
			{
				title: 'Domain Specific Userbase',
				desc: 'Each instance of the mimir dashboard whitelists users of specific Google Suite domains integrating an entire team safely',
			},
			{
				title: 'OpenDental Integration',
				desc: 'The associated Nintu server instance regularly queries and stores vital bussiness metrics from the OpenDental API to expose behaviors over time.',
			},
		],
		linkDemo: null,
		linkRepo: null,
		linkMore: null,
	},
	{
		title: 'Dental Risk',
		description:
			"New Patient intake form for dentists to collect and provide information about a patient's potential risks related to their dental health.",
		images: [
			{
				title: 'Demo',
				desc: 'Intake process demonstration',
				src: dentalRisk_demo,
			},
			{
				title: 'Form Validation',
				desc: 'Each input field has minimum requirements and/or pattern matching for validation.',
				src: dentalRisk_validation,
			},
			{
				title: 'Review Screen',
				desc: 'User can confirm no changes need to be made before results are generated and emailed.',
				src: dentalRisk_review,
			},
		],
		attributes: {
			time: { start: "April '23", end: "May '23" },
			status: STATUS_TYPE.CLOSED,
			tags: [
				TOOL.TS,
				TOOL.NEXT,
				TOOL.CHAKRA,
				TOOL.REACTHOOKFORM,
				TOOL.NODEMAILER,
				TOOL.POSTGRES,
				TOOL.GRAPH_QL,
				TOOL.HASURA,
				TOOL.DOCKER,
			].sort(),
		},
		features: [
			{
				title: 'Automated Emails',
				desc: "Upon user form submission, the results for the questionnaire are generated and sent to the provided email from the doctor's chosen email address.",
			},
			{
				title: 'Form Validation',
				desc: 'Ensure data submitted matches the requirements set forth in the various form controls.',
			},
			{
				title: 'Content Management',
				desc: 'The list of questions and the resulting information exposed to the user can be customized by the instance admin.',
			},
			{
				title: 'SaaS Deployments',
				desc: 'Instances of Dental Risk can be independently deployed for seperate offices with custom styling and content.',
			},
		],
		linkDemo: { title: 'Demo', href: STRINGS.INTAKE_DEMO },
		linkRepo: null,
		linkMore: null,
	},
	{
		title: 'Modern Suite for RMH',
		description:
			"Developed by New West Technologies, Modern Suite is a device-agnostic software extension to Retail Managment Hero that's accessible via any device with a web browser and local network connection.",
		images: [
			{
				title: 'Modern Suite',
				desc: 'by New West Technologies',
				src: modernSuite_MSGraphic,
			},
			{
				title: 'Quick Tasks',
				desc: 'POS Quick Task lead to happier employees',
				src: modernSuite_QuickTasks,
			},
			{
				title: 'Works on Any Device',
				desc: 'Modern Suite can be accessed by any device with a browser via local network.',
				src: modernSuite_devices,
			},
			{
				title: 'MS Sync Architecture',
				desc: 'Rapid Sync & Zamboni Sync Architecture',
				src: modernSuite_ZamboniArch,
			},
		],
		attributes: {
			time: { start: "Feb '21", end: "April '22" },
			status: STATUS_TYPE.CLOSED,
			tags: [
				TOOL.TS,
				TOOL.NODE,
				TOOL.DOT_NET,
				TOOL.SQL_SERVER,
				TOOL.SEQUELIZE,
				TOOL.GIT_LAB,
				TOOL.PM2,
				TOOL.ATLASSIAN,
				TOOL.LINUX,
				TOOL.VIM,
				TOOL.PYTHON,
			].sort(),
		},
		features: [
			{
				title: 'New West Technologies',
				desc: "From New West Technologies, a device-agnostic software extension to Retail Managment Hero that's accessible via web browser on internal store network",
			},
			{
				title: 'Quick Tasks',
				desc: 'Quick Tasks have redefined efficiency in Modern Suite task execution. Akin to making a call to someone on speed dial, Quick Tasks are rapid singular-action commands that simply get the job done quicker!',
			},
			{
				title: 'Data Consistency',
				desc: "Real-time bidirectional synchronization to RMH, ensuring data at RMH Central matches the stores while 'Zamboni Data Cleanup' cleans up and resyncs Item, PO, and Transfer based on a designated date",
			},
		],
		linkDemo: null,
		linkRepo: null,
		linkMore: {
			title: 'More',
			href: STRINGS.RMH_LINK,
		},
	},
	{
		title: 'Escape Collective',
		description:
			'Escape Collective is a team of designers, artists, engineers, builders, and sewers. Friends before business partners, their mission is to promote escapism through creative practice driven by curiosity and adventure.',
		images: [
			{
				title: 'Nike Office Dome',
				desc: 'A creative space for meeting and working at Nike headquarters.',
				src: esc_nikeInterior,
			},
			{
				title: 'Corona Skull Dome',
				desc: 'Event structure for Corona Día de Muertos activations.',
				src: esc_skull,
			},
		],
		attributes: {
			time: { start: "Jun '12", end: "Fall '18" },
			status: STATUS_TYPE.CLOSED,
			tags: [TOOL.PYTHON].sort(),
		},
		features: [
			{
				title: 'Structural Design',
				desc: 'Nike Dome...',
			},
			{
				title: 'Project Managment',
				desc: 'Years of mananagement...',
			},
			{
				title: 'Project Managment',
				desc: 'Years of mananagement...',
			},
			{
				title: 'Installation Lead',
				desc: 'Leading teams of people to construct and install large structures',
			},
		],
		linkDemo: null,
		linkRepo: null,
		linkMore: {
			title: 'More',
			href: STRINGS.ESC_LINK,
		},
	},
];
