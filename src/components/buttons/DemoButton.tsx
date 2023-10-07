import React, { ReactNode } from 'react';
import Link from 'next/link';
import { chakra, useColorModeValue, VisuallyHidden } from '@chakra-ui/react';

interface DemoButtonProps {
	href: string;
	label: string;
}
const DemoButton = ({ label, href }: DemoButtonProps) => {
	return (
		<chakra.button
			aria-label={label}
			px={{ base: 4, md: 8 }}
			bg={useColorModeValue('blue.400', 'blue.600')}
			fontWeight={'bold'}
			rounded={'md'}
			w={12}
			h={12}
			cursor={'pointer'}
			as={'a'}
			target={'_blank'}
			href={href}
			display={'inline-flex'}
			alignItems={'center'}
			justifyContent={'center'}
			transition={'background 0.3s ease'}
			_hover={{
				bg: 'blue.500',
				color: useColorModeValue('white', 'white'),
				transform: 'translateY(-2px)',
				boxShadow: 'lg',
			}}
		>
			{label}
		</chakra.button>
	);
};

export default DemoButton;
