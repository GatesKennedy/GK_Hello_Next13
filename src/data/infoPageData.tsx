import {
	FcBinoculars,
	FcCloseUpMode,
	FcCollaboration,
	FcDataConfiguration,
	FcGraduationCap,
	FcMindMap,
	FcMultipleDevices,
	FcParallelTasks,
	FcSupport,
	FcDataSheet,
	FcSerialTasks,
} from 'react-icons/fc';
import { Icon } from '@chakra-ui/react';
import { TOOL } from '@/reference/stringConstants';
import { AttributeProps } from '@/components/cards/AttributeCard';
import { SkillSectionProps } from '@/components/cards/InfoColumns';

export const skillColumns: SkillSectionProps[] = [
	// Server
	{
		title: 'Server',
		text: 'Server-side Tools',
		icon: (
			<Icon
				as={FcParallelTasks}
				w={10}
				h={10}
			/>
		),
		items: [
			TOOL.NODE,
			TOOL.EXPRESS,
			TOOL.FAST_API,
			TOOL.FASTIFY,
			TOOL.REST,
			TOOL.GRAPH_QL,
			TOOL.AWS_EC2,
			// TOOL.AWS_LAMBDA,
			TOOL.NODE_POSTGRES,
			TOOL.PRISMA,
			// TOOL.SEQUELIZE,
			// TOOL.CORS,
			// TOOL.NODEMAILER,
			TOOL.POSTMAN,
		],
	},
	// Data
	{
		title: 'Data & AI',
		text: 'Data Analytics...',
		icon: (
			<Icon
				as={FcDataSheet}
				w={10}
				h={10}
			/>
		),
		items: [
			TOOL.PYTHON,
			TOOL.PANDAS,
			TOOL.NUMPY,
			TOOL.PYDANTIC,
			TOOL.MATPLOTLIB,
			TOOL.SQL_ALCH,
			TOOL.CONDA,
			TOOL.LocalLLMs,
			TOOL.HUGGING,
			TOOL.AUTOGEN,
		],
	},
	// Storage
	{
		title: 'Storage',
		text: 'Database Tools',
		icon: (
			<Icon
				as={FcDataConfiguration}
				w={10}
				h={10}
			/>
		),
		items: [
			TOOL.DB_DESIGN,
			TOOL.POSTGRES,
			TOOL.AWS_S3,
			TOOL.MONGO,
			TOOL.MY_SQL,
			TOOL.SQL_SERVER,
			TOOL.REDIS,
			TOOL.AWS_RDS,
			// TOOL.AWS_DYNAMO,
			TOOL.DB_MIGRATE,
		],
	},
	// Client
	{
		title: 'Client',
		text: 'Client-side Tools',
		icon: (
			<Icon
				as={FcMultipleDevices}
				w={10}
				h={10}
			/>
		),
		items: [
			TOOL.HTML_CSS,
			TOOL.REACT,
			TOOL.NEXT,
			TOOL.DATA_VIS,
			// TOOL.REACTHOOKFORM,
			TOOL.STYLED_COMP,
			TOOL.MUI,
			TOOL.CHAKRA,
			TOOL.REDUX,
			TOOL.AXIOS,
			// TOOL.JWT,
			TOOL.OAUTH,
			// TOOL.SAML,
			// TOOL.WEB_SOCKETS,
		],
	},
	// Dev Ops
	{
		title: 'DevOps',
		text: 'Project Mgmt',
		icon: (
			<Icon
				as={FcSerialTasks}
				w={10}
				h={10}
			/>
		),
		items: [
			TOOL.GIT,
			TOOL.ATLASSIAN,
			// TOOL.GIT_LAB,
			TOOL.DOCKER_HUB,
			TOOL.DOCKER_COMPOSE,
			// TOOL.JENKINS,
			TOOL.AGILE,
			TOOL.GREEN_GEEKS,
			TOOL.AWS_ROUTE,
			TOOL.AWS_PIPE,
			TOOL.HEROKU_PIPE,
			TOOL.K6,
			// TOOL.SCRUM,
			// TOOL.MOCHA,
		],
	},

	// Util
	{
		title: 'Utility',
		text: 'Other Tools...',
		icon: (
			<Icon
				as={FcSupport}
				w={10}
				h={10}
			/>
		),
		items: [
			TOOL.LINUX,
			TOOL.VIM,
			TOOL.ZSH,
			TOOL.BASH,
			TOOL.TMUX,
			TOOL.YAML,
			TOOL.PM2,
			TOOL.NGROK,
			TOOL.OPENSSL,
			TOOL.SSH,
			// TOOL.SMTP,
			// TOOL.WEB_SOCKETS,
		],
	},
];

export const attributeData: AttributeProps[] = [
	{
		heading: 'Exceedingly Curious',
		icon: (
			<Icon
				as={FcBinoculars}
				w={10}
				h={10}
			/>
		),
		description:
			'Fundamentally passionate about learning and understanding systems of all kinds; digital, mechanical, societal, etc.',
		href: '/work',
	},
	{
		heading: 'B.S Mechanical Engineering',
		icon: (
			<Icon
				as={FcGraduationCap}
				w={10}
				h={10}
			/>
		),
		description: 'Washington State University from 2006 to 2011.',
		href: '/work',
	},
	{
		heading: 'Project Managment',
		icon: (
			<Icon
				as={FcCollaboration}
				w={10}
				h={10}
			/>
		),
		description:
			'As a co-founder of an design and fabrication company for large events. I have experience leading teams through structural fabrication and installations.',
		href: '/work',
	},
	{
		heading: 'Creativity',
		icon: (
			<Icon
				as={FcCloseUpMode}
				w={10}
				h={10}
			/>
		),
		description:
			"Look at the design of this website. Isn't it Unique? I made this look like this because I too am unique and cool. Hire me.",
		href: '/work',
	},
	{
		heading: 'Full-Stack',
		icon: (
			<Icon
				as={FcMindMap}
				w={10}
				h={10}
			/>
		),
		description:
			'I know lots of things about building web application software and my knowledge is for sale in the form of monthly payments!',
		href: '/work',
	},
];
