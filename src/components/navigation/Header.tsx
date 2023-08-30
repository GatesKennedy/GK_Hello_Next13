'use client';

import {
	Box,
	Flex,
	Text,
	Button,
	useColorModeValue,
	useColorMode,
	Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import NavBar from './NavBar';

export default function Header() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Box
			as={'header'}
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
						borderWidth={2}
						borderColor={useColorModeValue(
							'blackAlpha.200',
							'whiteAlpha.200',
						)}
						// bg={useColorModeValue(
						// 	'blackAlpha.100',
						// 	'whiteAlpha.100',
						// )}
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
						_hover={{
							bg: useColorModeValue(
								'blackAlpha.300',
								'whiteAlpha.300',
							),
						}}
					>
						{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
					</Button>
				</Flex>
			</Flex>
		</Box>
	);
}
