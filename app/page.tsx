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
import CardWrapper from '../components/Cards/CardWrapper';
import InfoColumns, {
	SkillSectionProps,
} from '../components/Cards/InfoColumns';
import ProfileIntro from '../components/Cards/ProfileIntro';

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
			'ReactJS (TS)',
			'NextJS (TS)',
			'ChartJS (TS)',
			'MaterialUI',
			'ChakraUI',
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
			'Node.js (TS)',
			'NextJS (TS)',
			'AWS Lambda (Python)',
			'ExpressJS (TS)',
			'Nodemailer',
			'Prisma ORM',
			'GraphQL',
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
		items: ['PostgreSQL', 'MySQL', 'MongoDB', 'GraphQL', 'ChakraUI'],
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
			'ReactJS (TS)',
			'NextJS (TS)',
			'ChartJS (TS)',
			'MaterialUI',
			'ChakraUI',
		],
	},
];

//	~ MAIN ~
export default function Home() {
	const { colorMode, toggleColorMode } = useColorMode();
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
						<CardWrapper />
					</VStack>
				</Flex>
			</Box>
		</Box>
	);
}
