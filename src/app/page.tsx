'use client';
import React from 'react';
import {
	Box,
	Flex,
	Icon,
	VStack,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import { ASSETS } from '../reference/layoutValues';
import {
	FcDataConfiguration,
	FcMultipleDevices,
	FcParallelTasks,
	FcSupport,
} from 'react-icons/fc';
import FlexCards from '../components/collections/FlexCards';
import InfoColumns, {
	SkillSectionProps,
} from '../components/cards/InfoColumns';
import ProfileIntro from '../components/cards/ProfileIntro';
import { TAG } from '@/reference/stringConstants';

//	~ MAIN ~
export default function Home() {
	const { colorMode, toggleColorMode } = useColorMode();

	const skillColumns: SkillSectionProps[] = [
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
				TAG.CHAKRA,
				TAG.MUI,
				TAG.CHART_JS,
				TAG.AXIOS,
				TAG.CSS,
				TAG.HTML,
				TAG.NEXTAUTH,
				TAG.NIVO,
				TAG.REACTHOOKFORM,
				TAG.REDUX,
				TAG.SASS,
			],
		},
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
				TAG.AWS_LAMBDA,
				TAG.AWS_S3,
				TAG.CORS,
				TAG.EXPRESS,
				TAG.NODEMAILER,
				TAG.NODE_POSTGRES,
				TAG.PRISMA,
				TAG.SEQUELIZE,
				TAG.GRAPH_QL,
				TAG.LLAMA,
				TAG.POSTMAN,
				TAG.REST,
			],
		},
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
				TAG.MY_SQL,
				TAG.SQL_SERVER,
				TAG.MONGO,
				TAG.GRAPH_QL,
				TAG.AWS_S3,
				TAG.AWS_RDS,
				// TAG.REDIS,
			],
		},
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
				TAG.VIM,
				TAG.BASH,
				// TAG.HTTPS,
				TAG.PM2,
				TAG.NGROK,
				TAG.SMTP,
				TAG.OPENSSL,
				TAG.LINUX,
				TAG.DOCKER,
				// TAG.DOCKER_COMPOSE,
				TAG.ATLASSIAN,
				TAG.WEB_SOCKETS,
				TAG.ZSH,
				TAG.AWS,
			],
		},
	];

	return (
		<Box
			width={'full'}
			overflow={'clip'}
			backgroundPosition='center'
			backgroundRepeat='no-repeat'
			backgroundSize='cover'
			backgroundImage={`url(${ASSETS.lightHillsRolling.href})`}
		>
			<Box
				backdropFilter={colorMode === 'light' ? 'invert(36%)' : ''}
				position='relative'
				width={'full'}
				mb={'64px'}
				pb={'84px'}
				backgroundColor={useColorModeValue(
					'whiteAlpha.200',
					'blackAlpha.200',
				)}
				opacity={'0.9'}
				zIndex={1}
			>
				<Flex
					direction={'row'}
					align={'center'}
					justify={'center'}
					zIndex={2}
				>
					<VStack
						width={{ base: 'full', lg: '60vw' }}
						align={'center'}
						justify={'center'}
						pt={{ base: 4, lg: 4 }}
						px={{ base: 2, md: 4 }}
					>
						<ProfileIntro />
						<InfoColumns columnsData={skillColumns} />
						<FlexCards />
					</VStack>
				</Flex>
			</Box>
		</Box>
	);
}
