'use client';
import { Center, Divider, HStack, StackDivider } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import NavButton from './buttons/NavButton';

const NavBar = () => {
	return (
		<nav>
			{/* <Center m={2}>
				<Image
					src='/aoe.png'
					width={40}
					height={40}
					alt='aoe'
				/>
			</Center> */}
			<Center>
				<HStack
					spacing={12}
					mb={1}
				>
					<Link href={'/'}>
						<NavButton btnText={'info'} />
					</Link>
					<Link href={'/work'}>
						<NavButton btnText={'work'} />
					</Link>
					<Link href={'/talk'}>
						<NavButton btnText={'talk'} />
					</Link>
				</HStack>
			</Center>
		</nav>
	);
};

export default NavBar;
