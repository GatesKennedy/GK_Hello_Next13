'use client';
import { Center, Divider, HStack, StackDivider } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import NavButton from './buttons/NavButton';

const NavBar = () => {
	return (
		<nav>
			<Center>
				<HStack
					spacing={12}
					mb={1}
				>
					<Link href={'/'}>
						<NavButton btnText={'Info'} />
					</Link>
					<Link href={'/work'}>
						<NavButton btnText={'Work'} />
					</Link>
					<Link href={'/talk'}>
						<NavButton btnText={'Talk'} />
					</Link>
				</HStack>
			</Center>
		</nav>
	);
};

export default NavBar;
