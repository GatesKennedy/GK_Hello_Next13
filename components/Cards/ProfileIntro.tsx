'use client';

import {
	Container,
	SimpleGrid,
	Image,
	Flex,
	Heading,
	Text,
	Stack,
	StackDivider,
	Icon,
	useColorModeValue,
} from '@chakra-ui/react';
import {
	IoAnalyticsSharp,
	IoLogoBitcoin,
	IoSearchSharp,
} from 'react-icons/io5';
import { ReactElement } from 'react';

interface AttributeProps {
	text: string;
	iconBg: string;
	icon?: ReactElement;
}

const Attribute = ({ text, icon, iconBg }: AttributeProps) => {
	return (
		<Stack
			direction={'row'}
			align={'center'}
		>
			<Flex
				w={8}
				h={8}
				align={'center'}
				justify={'center'}
				rounded={'full'}
				bg={iconBg}
			>
				{icon}
			</Flex>
			<Text fontWeight={600}>{text}</Text>
		</Stack>
	);
};

export default function ProfileIntro() {
	return (
		<Container
			maxW={'5xl'}
			py={12}
			bgColor={useColorModeValue('whiteAlpha.600', 'blackAlpha.600')}
			borderTopRadius={'lg'}
		>
			<SimpleGrid
				columns={{ base: 1, md: 2 }}
				spacing={10}
			>
				<Stack
					spacing={4}
					px={8}
				>
					<Text
						textTransform={'uppercase'}
						color={'blue.400'}
						fontWeight={600}
						fontSize={'sm'}
						bg={useColorModeValue('blue.50', 'blue.900')}
						p={2}
						alignSelf={'flex-start'}
						rounded={'md'}
					>
						Hello
					</Text>
					<Heading>Conor Gates Kennedy</Heading>
					<Text
						color={'gray.500'}
						fontSize={'lg'}
					>
						Full-stack App Developer comfortable building
						data-driven web applications and interested solving
						challenging problems.
					</Text>
					<Stack
						spacing={4}
						divider={
							<StackDivider
								borderColor={useColorModeValue(
									'gray.100',
									'gray.700',
								)}
							/>
						}
					>
						<Attribute
							icon={
								<Icon
									as={IoAnalyticsSharp}
									color={'yellow.500'}
									w={5}
									h={5}
								/>
							}
							iconBg={useColorModeValue(
								'yellow.100',
								'yellow.900',
							)}
							text={'Full-stack Application Developer'}
						/>
						<Attribute
							icon={
								<Icon
									as={IoLogoBitcoin}
									color={'green.500'}
									w={5}
									h={5}
								/>
							}
							iconBg={useColorModeValue('green.100', 'green.900')}
							text={'Experienced Project Manager'}
						/>
						<Attribute
							icon={
								<Icon
									as={IoSearchSharp}
									color={'purple.500'}
									w={5}
									h={5}
								/>
							}
							iconBg={useColorModeValue(
								'purple.100',
								'purple.900',
							)}
							text={'Resilient Solution Collaborator'}
						/>
					</Stack>
				</Stack>
				<Flex px={8}>
					<Image
						rounded={'full'}
						alt={'feature image'}
						src={'/HeadShot-square.png'}
						objectFit={'cover'}
					/>
				</Flex>
			</SimpleGrid>
		</Container>
	);
}
