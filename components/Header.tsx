'use client';

import {
	Box,
	Flex,
	Text,
	Button,
	useDisclosure,
	useColorModeValue,
	useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import NavBar from './NavBar';

export default function Header() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<header>
			<Box
				position={'fixed'}
				top={0}
				width={'full'}
				zIndex={99}
				bg={useColorModeValue('gray.100', 'gray.900')}
				px={4}
			>
				<Flex
					h={16}
					alignItems={'center'}
					justifyContent={'space-between'}
				>
					<Flex
						alignItems={'center'}
						width={{ base: 12, md: 24 }}
					>
						<Text>G_K</Text>
					</Flex>

					<NavBar />

					<Flex
						alignItems={'center'}
						width={{ base: 12, md: 24 }}
					>
						<Button onClick={toggleColorMode}>
							{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
						</Button>
					</Flex>
				</Flex>
			</Box>
		</header>
	);
}
