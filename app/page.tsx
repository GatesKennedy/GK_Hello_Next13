'use client';
import React from 'react';
import {
	Box,
	Flex,
	Icon,
	Stack,
	VStack,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import { ASSETS } from '../reference/layoutValues';

import { FcAssistant } from 'react-icons/fc';
import CardWrapper from '../components/Cards/CardWrapper';
import InfoColumns, {
	SkillSectionProps,
} from '../components/cards/InfoColumns';
import ProfileIntro from '../components/cards/ProfileIntro';

const skillColumns: SkillSectionProps[] = [
	{
		title: 'Client',
		text: 'Client-side Tools',
		icon: (
			<Icon
				as={FcAssistant}
				w={10}
				h={10}
			/>
		),
	},
	{
		title: 'Server',
		text: 'Server-side Tools',
		icon: (
			<Icon
				as={FcAssistant}
				w={10}
				h={10}
			/>
		),
	},
	{
		title: 'Data',
		text: 'Data Storage Tools',
		icon: (
			<Icon
				as={FcAssistant}
				w={10}
				h={10}
			/>
		),
	},
	{
		title: 'Utils',
		text: 'Other Tools',
		icon: (
			<Icon
				as={FcAssistant}
				w={10}
				h={10}
			/>
		),
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
						width={{ base: 'full', md: '60vw' }}
						align={'center'}
						justify={'center'}
						pt={4}
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
