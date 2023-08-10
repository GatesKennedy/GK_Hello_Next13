'use client';

import { Button, useColorModeValue } from '@chakra-ui/react';

export default function NavButton({ btnText }: { btnText: string }) {
	return (
		<Button
			px={8}
			bg={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
			color={useColorModeValue('black', 'white')}
			rounded={'md'}
			_hover={{
				transform: 'translateY(-2px)',
				boxShadow: 'lg',
			}}
		>
			{btnText}
		</Button>
	);
}
