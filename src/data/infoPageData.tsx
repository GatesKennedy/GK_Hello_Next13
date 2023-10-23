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
import { TAG } from '@/reference/stringConstants';
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
			TAG.REACT,
			TAG.NEXT,
			TAG.HTML,
			TAG.CSS,
			TAG.MUI,
			TAG.CHAKRA,
			TAG.AXIOS,
			TAG.CHART_JS,
			TAG.NIVO,
			TAG.REACTHOOKFORM,
			TAG.NEXTAUTH,
			TAG.REDUX,
			TAG.SASS,
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
			TAG.NODE,
			TAG.EXPRESS,
			TAG.FASTIFY,
			TAG.NODE_POSTGRES,
			TAG.PRISMA,
			TAG.REST,
			TAG.GRAPH_QL,
			TAG.AWS_LAMBDA,
			TAG.LLAMA,
			TAG.SEQUELIZE,
			TAG.CORS,
			TAG.NODEMAILER,
			TAG.POSTMAN,
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
			TAG.POSTGRES,
			TAG.REDIS,
			TAG.MY_SQL,
			TAG.SQL_SERVER,
			TAG.MONGO,
			TAG.AWS_S3,
			TAG.AWS_RDS,
			// TAG.REDIS,
		],
	},
	// Util
	{
		title: 'Utility',
		text: 'Other Tools',
		icon: (
			<Icon
				as={FcSupport}
				w={10}
				h={10}
			/>
		),
		items: [
			TAG.GIT,
			TAG.DOCKER,
			TAG.K6,
			TAG.PM2,
			TAG.ATLASSIAN,
			TAG.AWS,
			TAG.VIM,
			// TAG.BASH,
			// TAG.HTTPS,
			TAG.NGROK,
			// TAG.SMTP,
			TAG.PYTHON,
			TAG.OPENSSL,
			TAG.LINUX,
			// TAG.DOCKER_COMPOSE,
			TAG.WEB_SOCKETS,
			TAG.ZSH,
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
