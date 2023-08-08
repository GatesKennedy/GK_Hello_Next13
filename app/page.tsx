'use client';
import React from 'react';
import {
	Box,
	useColorModeValue,
	Stack,
	Heading,
	Text,
	Container,
} from '@chakra-ui/react';
import CardWrapper from '../components/cards/Wrapper';
import { ASSETS } from '../reference/layoutValues';

// This list contains all the data for carousels
// This can be static or loaded from a server
const cards = [
	{
		title: 'Gates Kennedy',
		text: 'Only perspective sorts problem from puzzle.',
		image: ASSETS.peopleOnBeach.href,
	},
	{
		title: 'Gates Kennedy',
		text: 'Only perspective sorts problem from puzzle.',
		image: ASSETS.palmLeafPattern.href,
	},
	{
		title: 'Gates Kennedy',
		text: 'Only perspective sorts problem from puzzle.',
		image: ASSETS.lightHillsRolling.href,
	},
];

export default function Home() {
	return (
		<Box
			position={'relative'}
			// height={'120px'}
			width={'full'}
			overflow={'hidden'}
		>
			<Box
				height={'4xl'}
				position='relative'
				backgroundPosition='center'
				backgroundRepeat='no-repeat'
				backgroundSize='cover'
				backgroundImage={`url(${cards[2].image})`}
			>
				{/* This is the block you need to change, to customize the caption */}
				<Container
					size='container.lg'
					height='600px'
					position='relative'
				>
					<Stack
						spacing={6}
						w={'full'}
						maxW={'lg'}
						position='absolute'
						top='50%'
						transform='translate(0, -50%)'
						bg={useColorModeValue('gray.50', 'gray.900')}
						color={useColorModeValue('gray.700', 'gray.200')}
						padding={4}
					>
						<Heading
							fontSize={{
								base: '3xl',
								md: '4xl',
								lg: '5xl',
							}}
						>
							{cards[2].title}
						</Heading>
						<Text
							fontSize={{ base: 'md', lg: 'lg' }}
							color='GrayText'
						>
							{cards[2].text}
						</Text>
					</Stack>
				</Container>
				<CardWrapper />
			</Box>
		</Box>
	);
}
