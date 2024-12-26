'use client';
import React from 'react';
import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import ContactForm from '../../components/forms/ContactForm';
import { ASSETS } from '../../constants/layoutValues';
import styles from './talk.module.css';

function TalkPage() {
	const bgShade: string = useColorModeValue(
		'whiteAlpha.600',
		'rgba(23, 25, 27, 0.8)'
	);
	const bgThin: string = useColorModeValue(
		'whiteAlpha.500',
		'rgba(23, 25, 27, 0.55)'
	);
	const bgThick: string = useColorModeValue(
		'whiteAlpha.700',
		'rgba(23, 25, 27, 0.8)'
	);
	const bgSolid: string = useColorModeValue(
		'whiteAlpha.900',
		'rgba(3, 5, 7, 0.96)'
	);
	return (
		<Box
			id={'talk-root'}
			height={'full'}
			position="relative"
			backgroundPosition="bottom"
			backgroundRepeat="no-repeat"
			backgroundSize="4xl"
			backgroundImage={`url(${ASSETS.lightHillsRolling.href})`}
		>
			<Flex
				id={'flex-cont'}
				width={'full'}
				height={'full'}
				padding={0}
				flexDir={'row-reverse'}
			>
				<Box> </Box>
				<Flex
					id={'ContactBox'}
					className={styles.centerShade}
					position={'absolute'}
					height={'full'}
					width={{ base: '75vw', md: '50vw' }}
					pl={{ base: 0, sm: '12vw', md: '6vw', lg: '12vw' }}
					backgroundColor={bgShade}
					bgGradient={`linear(to-r, transparent 0%, ${bgThin} 21%, ${bgThick} 45%, ${bgSolid} 100%)`}
				>
					<ContactForm />
				</Flex>
				<Box> </Box>
			</Flex>
		</Box>
	);
}

export default TalkPage;
