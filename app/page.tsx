'use client';
import React from 'react';
import { Box } from '@chakra-ui/react';
import CardWrapper from '../components/cards/Wrapper';
import { ASSETS } from '../reference/layoutValues';

export default function Home() {
	return (
		<Box
			position={'relative'}
			width={'full'}
			overflow={'hidden'}
		>
			<Box
				height={'4xl'}
				position='relative'
				backgroundPosition='center'
				backgroundRepeat='no-repeat'
				backgroundSize='cover'
				backgroundImage={`url(${ASSETS.lightHillsRolling.href})`}
			>
				<CardWrapper />
			</Box>
		</Box>
	);
}
