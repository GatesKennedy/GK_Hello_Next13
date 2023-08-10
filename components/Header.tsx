'use client';

import {
	Box,
	Flex,
	Text,
	Button,
	useDisclosure,
	useColorModeValue,
	useColorMode,
	Center,
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
						{' '}
						<Center
							h={'40px'}
							w={'48px'}
							borderRadius={'lg'}
							bg={useColorModeValue(
								'blackAlpha.200',
								'whiteAlpha.200',
							)}
						>
							<Text
								textAlign={'center'}
								color={useColorModeValue('black', 'white')}
							>
								G_K
							</Text>
						</Center>
					</Flex>

					<NavBar />

					<Flex
						alignItems={'center'}
						width={{ base: 12, md: 24 }}
					>
						<Button
							onClick={toggleColorMode}
							transition={'background 0.3s ease'}
							bg={useColorModeValue(
								'blackAlpha.200',
								'whiteAlpha.200',
							)}
						>
							{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
						</Button>
					</Flex>
				</Flex>
			</Box>
		</header>
	);
}
