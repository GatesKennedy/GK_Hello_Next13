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
} from 'react-icons/fc';
import { Icon } from '@chakra-ui/react';
import { TOOL } from '@/reference/stringConstants';
import { AttributeProps } from '@/components/cards/AttributeCard';
import { SkillSectionProps } from '@/components/cards/InfoColumns';

export const skillColumns: SkillSectionProps[] = [
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
			TOOL.REACTHOOKFORM,
			TOOL.STYLED_COMP,
			TOOL.MUI,
			TOOL.CHAKRA,
			TOOL.AXIOS,
			// TOOL.CHART_JS,
			// TOOL.NIVO,
			// TOOL.NEXTAUTH,
			TOOL.REDUX,
		],
	},
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
			TOOL.AWS_LAMBDA,
			TOOL.NODE_POSTGRES,
			TOOL.PRISMA,
			// TOOL.SEQUELIZE,
			// TOOL.LLAMA,
			// TOOL.CORS,
			// TOOL.NODEMAILER,
			TOOL.POSTMAN,
		],
	},
	// Data
	{
		title: 'Data',
		text: 'Data Storage Tools',
		icon: (
			<Icon
				as={FcDataConfiguration}
				w={10}
				h={10}
			/>
		),
		items: [
			TOOL.POSTGRES,
			TOOL.AWS_S3,
			TOOL.MONGO,
			TOOL.MY_SQL,
			TOOL.SQL_SERVER,
			// TOOL.REDIS,
			TOOL.AWS_RDS,
			TOOL.AWS_DYNAMO,
			TOOL.DB_DESIGN,
			TOOL.DB_MIGRATE,
		],
	},
	// Dev Ops
	{
		title: 'DevOps',
		text: 'Project Mgmt',
		icon: (
			<Icon
				as={FcSupport}
				w={10}
				h={10}
			/>
		),
		items: [
			TOOL.GIT,
			TOOL.GIT_LAB,
			TOOL.DOCKER_HUB,
			TOOL.DOCKER_COMPOSE,
			// TOOL.JENKINS,
			TOOL.ATLASSIAN,
			TOOL.GREEN_GEEKS,
			TOOL.AWS_ROUTE,
			TOOL.AWS_PIPE,
			TOOL.HEROKU_PIPE,
			TOOL.K6,
			TOOL.AGILE,
			TOOL.SCRUM,
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
			TOOL.VIM,
			TOOL.ZSH,
			TOOL.BASH,
			TOOL.YAML,
			TOOL.TMUX,
			TOOL.LINUX,
			TOOL.PYTHON,
			TOOL.CONDA,
			TOOL.NGROK,
			TOOL.PM2,
			TOOL.OPENSSL,
			TOOL.SSH,
			TOOL.SMTP,
			TOOL.WEB_SOCKETS,
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
