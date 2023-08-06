'use client';

import {
	Box,
	chakra,
	Container,
	Stack,
	Text,
	useColorModeValue,
	VisuallyHidden,
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaSpotify } from 'react-icons/fa';
import { ReactNode } from 'react';

const SocialButton = ({
	children,
	label,
	href,
}: {
	children: ReactNode;
	label: string;
	href: string;
}) => {
	return (
		<chakra.button
			bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
			rounded={'full'}
			w={8}
			h={8}
			cursor={'pointer'}
			as={'a'}
			href={href}
			display={'inline-flex'}
			alignItems={'center'}
			justifyContent={'center'}
			transition={'background 0.3s ease'}
			_hover={{
				bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
			}}
		>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</chakra.button>
	);
};

export default function SmallWithSocial() {
	return (
		<Box
			bg={useColorModeValue('gray.50', 'gray.900')}
			color={useColorModeValue('gray.700', 'gray.200')}
		>
			<Container
				as={Stack}
				maxW={'9xl'}
				py={4}
				direction={{ base: 'column', md: 'row' }}
				spacing={4}
				justify={{ base: 'center', md: 'space-between' }}
				align={{ base: 'center', md: 'center' }}
			>
				<Text>© 2023 Gates Kennedy. All rights reserved</Text>
				{/* <Text>...are you curious?</Text> */}
				<Stack
					direction={'row'}
					spacing={6}
				>
					<SocialButton
						label={'LinkedIn'}
						href={'https://linkedin.com/in/conorgateskennedy'}
					>
						<FaLinkedin />
					</SocialButton>
					<SocialButton
						label={'GitHub'}
						href={'https://github.com/GatesKennedy'}
					>
						<FaGithub />
					</SocialButton>
					<SocialButton
						label={'Spotify'}
						href={'https://open.spotify.com/user/ohnodamn'}
					>
						<FaSpotify />
					</SocialButton>
				</Stack>
			</Container>
		</Box>
	);
}
