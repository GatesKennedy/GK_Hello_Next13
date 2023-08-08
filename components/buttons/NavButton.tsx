'use client';

import { Button, useColorModeValue } from '@chakra-ui/react';

export default function NavButton({ btnText }: { btnText: string }) {
	return (
		<Button
			px={8}
			bg={useColorModeValue('#151f21', 'gray.900')}
			color={'white'}
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
