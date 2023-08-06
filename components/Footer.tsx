'use client';

import {
	Box,
	Container,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaSpotify } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import SocialButton from './buttons/SocialButton';
import CopyButton from './buttons/CopyButton';
import { STRINGS } from '../reference/stringConstants';

export default function SmallWithSocial() {
	return (
		<Box
			bg={useColorModeValue('gray.50', 'gray.900')}
			color={useColorModeValue('gray.700', 'gray.200')}
		>
			<Container
				as={Stack}
				maxW={'9xl'}
				py={2}
				direction={{ base: 'column', md: 'row' }}
				spacing={4}
				justify={{ base: 'center', md: 'space-between' }}
				align={{ base: 'center', md: 'center' }}
			>
				<Text>© 2023 Gates Kennedy. All rights reserved</Text>
				<Stack
					direction={'row'}
					spacing={6}
				>
					<CopyButton
						label={'Email'}
						copyText={STRINGS.EMAIL_CONOR}
					>
						<MdMail size={24} />
					</CopyButton>
					<SocialButton
						label={'LinkedIn'}
						href={STRINGS.LINKEDIN_CONOR}
					>
						<FaLinkedin size={24} />
					</SocialButton>
					<SocialButton
						label={'GitHub'}
						href={STRINGS.GITHUB_GK}
					>
						<FaGithub size={24} />
					</SocialButton>
					<SocialButton
						label={'Spotify'}
						href={STRINGS.SPOTIFY_ONO}
					>
						<FaSpotify size={24} />
					</SocialButton>
				</Stack>
			</Container>
		</Box>
	);
}
