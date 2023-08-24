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
	Circle,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import {
	MdComputer,
	MdGroups,
	MdOutlineSchool,
	MdSchedule,
} from 'react-icons/md';

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
			py={{ base: 8, lg: 12 }}
			bgColor={useColorModeValue('whiteAlpha.600', 'blackAlpha.600')}
			borderTopRadius={'lg'}
		>
			<SimpleGrid
				columns={{ base: 1, md: 2 }}
				spacing={{ base: 4, lg: 10 }}
			>
				<Stack
					spacing={4}
					px={{ base: 2, md: 2, lg: 8 }}
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
					<Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
						Conor Gates Kennedy
					</Heading>
					<Text
						color={useColorModeValue('gray.700', 'gray.300')}
						fontSize={'lg'}
					>
						Full-stack Web Developer comfortable building
						data-driven web applications and interested solving
						challenging problems.
					</Text>
					<Stack
						spacing={{ base: 2, lg: 3 }}
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
									as={MdComputer}
									color={'purple.500'}
									w={5}
									h={5}
								/>
							}
							iconBg={useColorModeValue(
								'purple.100',
								'purple.900',
							)}
							text={'Full-stack Application Developer'}
						/>
						<Attribute
							icon={
								<Icon
									as={MdGroups}
									color={'green.500'}
									w={5}
									h={5}
								/>
							}
							iconBg={useColorModeValue('green.100', 'green.900')}
							text={'Effective Solution Collaborator'}
						/>
						<Attribute
							icon={
								<Icon
									as={MdSchedule}
									color={'blue.500'}
									w={5}
									h={5}
								/>
							}
							iconBg={useColorModeValue('blue.100', 'blue.900')}
							text={'Resilient Project Manager'}
						/>
						<Attribute
							icon={
								<Icon
									as={MdOutlineSchool}
									color={'yellow.500'}
									w={5}
									h={5}
								/>
							}
							iconBg={useColorModeValue(
								'yellow.100',
								'yellow.900',
							)}
							text={'B.S. Mechanical Engineering'}
						/>
					</Stack>
				</Stack>
				<Flex px={{ base: 2, md: 2, lg: 8 }}>
					<Circle
						maxWidth={'full'}
						overflow={'hidden'}
					>
						<Image
							rounded={'full'}
							alt={'profile image'}
							src={'HeadShot-square.png'}
							objectFit={'cover'}
						/>
					</Circle>
				</Flex>
			</SimpleGrid>
		</Container>
	);
}
