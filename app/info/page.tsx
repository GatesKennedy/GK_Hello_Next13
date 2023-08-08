'use client';
import { Box, Container, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import ContactForm from '../../components/forms/Contact';
import { ASSETS } from '../../reference/layoutValues';
import styles from './info.module.css';

function InfoPage() {
	return (
		// <Box
		// 	position={'relative'}
		// 	width={'full'}
		// 	overflow={'hidden'}
		// >
		<Box
			height={'6xl'}
			position='relative'
			backgroundPosition='bottom'
			backgroundRepeat='no-repeat'
			backgroundSize='auto'
			backgroundImage={`url(${ASSETS.lightHillsRolling.href})`}
		>
			{/* This is the block you need to change, to customize the caption */}
			<Container
				size='container.lg'
				position='relative'
				id={'Container'}
				width={'100%'}
				minHeight={'88vh'}
				padding={0}
			>
				<Box
					className={styles.centerShade}
					id={'ContactBox'}
					top={'64px'}
					height={'88vh'}
					bg={useColorModeValue('gray.100', 'rgba(23, 25, 27, 0.8)')}
				>
					<ContactForm />
				</Box>
			</Container>
		</Box>
		// </Box>
	);
}

export default InfoPage;
