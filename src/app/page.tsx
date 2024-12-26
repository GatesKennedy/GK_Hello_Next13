'use client';
import React from 'react';
import {
	Box,
	Flex,
	VStack,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import { ASSETS } from '../constants/layoutValues';

import { attributeData, skillColumns } from '@/data/infoPageData';
import ProfileIntro from '@/components/cards/ProfileIntro';
import InfoColumns from '@/components/cards/InfoColumns';
import FlexCards from '@/components/collections/FlexCards';

//	~ MAIN ~
export default function Home() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Box
			width={'full'}
			overflow={'clip'}
			backgroundPosition="center"
			backgroundRepeat="no-repeat"
			backgroundSize="cover"
			backgroundImage={`url(${ASSETS.lightHillsRolling.href})`}
		>
			<Box
				backdropFilter={colorMode === 'light' ? 'invert(36%)' : ''}
				position="relative"
				width={'full'}
				mb={'64px'}
				pb={'84px'}
				backgroundColor={useColorModeValue('whiteAlpha.200', 'blackAlpha.200')}
				opacity={'0.9'}
				zIndex={1}
			>
				<Flex direction={'row'} align={'center'} justify={'center'} zIndex={2}>
					<VStack
						width={{ base: 'full', lg: '60vw' }}
						align={'center'}
						justify={'center'}
						pt={{ base: 4, lg: 4 }}
						px={{ base: 2, md: 4 }}
					>
						<ProfileIntro />
						<InfoColumns columnsData={skillColumns} />
						<FlexCards attributeData={attributeData} />
					</VStack>
				</Flex>
			</Box>
		</Box>
	);
}
