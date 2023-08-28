'use client';
import React from 'react';
import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import ContactForm from './Contact';
import { ASSETS } from '../../reference/layoutValues';
import styles from './talk.module.css';

function TalkPage() {
	const bgShade: string = useColorModeValue(
		'whiteAlpha.600',
		'rgba(23, 25, 27, 0.8)',
	);
	const bgThin: string = useColorModeValue(
		'whiteAlpha.500',
		'rgba(23, 25, 27, 0.55)',
	);
	const bgThick: string = useColorModeValue(
		'whiteAlpha.700',
		'rgba(23, 25, 27, 0.8)',
	);
	const bgSolid: string = useColorModeValue(
		'whiteAlpha.900',
		'rgba(3, 5, 7, 0.96)',
	);
	return (
		<Box
			height={'6xl'}
			position='relative'
			backgroundPosition='bottom'
			backgroundRepeat='no-repeat'
			backgroundSize='auto'
			backgroundImage={`url(${ASSETS.lightHillsRolling.href})`}
		>
			<Flex
				position='fixed'
				id={'Container'}
				width={'100%'}
				minHeight={'84vh'}
				padding={0}
				alignContent={'center'}
				flexDir={'row-reverse'}
			>
				<Box> </Box>
				<Box
					className={styles.centerShade}
					id={'ContactBox'}
					position={'absolute'}
					height={'88vh'}
					width={{ base: '75vw', md: '50vw' }}
					backgroundColor={bgShade}
					bgGradient={`linear(to-r, transparent 0%, ${bgThin} 21%, ${bgThick} 45%, ${bgSolid} 100%)`}
				>
					<ContactForm />
				</Box>
				<Box> </Box>
			</Flex>
		</Box>
	);
}

export default TalkPage;
