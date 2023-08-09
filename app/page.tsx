'use client';
import React from 'react';
import { Box, Flex, Stack, VStack, useColorModeValue } from '@chakra-ui/react';
import { ASSETS } from '../reference/layoutValues';
import CardWrapper from '../components/cards/Wrapper';
import ProfileIntro from '../components/cards/ProfileIntro';
import InfoThreeColumns from '../components/cards/InfoThreeColumns';

export default function Home() {
	return (
		<Box
			// position={'absolute'}
			width={'full'}
			overflow={'hidden'}
			backgroundPosition='center'
			backgroundRepeat='no-repeat'
			backgroundSize='cover'
			backgroundImage={`url(${ASSETS.lightHillsRolling.href})`}
		>
			<Box
				position='relative'
				width={'full'}
				backgroundColor={useColorModeValue(
					'whiteAlpha.700',
					'blackAlpha.800',
				)}
				opacity={'0.8'}
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
					>
						<ProfileIntro />
						<InfoThreeColumns />
						<CardWrapper />
					</VStack>
				</Flex>
			</Box>
		</Box>
	);
}
