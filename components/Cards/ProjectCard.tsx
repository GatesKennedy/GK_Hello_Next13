'use client';

import { CheckIcon } from '@chakra-ui/icons';
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
	HStack,
	Box,
	VStack,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import {
	MdComputer,
	MdGroups,
	MdOutlineSchool,
	MdSchedule,
} from 'react-icons/md';

export enum ATTRIBUTE_TITLE {
	TIME = 'Time: ',
	TECH = 'Tech: ',
	DUTY = 'Duty: ',
}
export interface ProjectAttributeProps {
	title: string;
	text: string[];
	iconBg: string;
	icon?: ReactElement;
}

const ProjectAttribute = ({ text, icon, iconBg }: ProjectAttributeProps) => {
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
			<Text fontWeight={600}>{text.map((t) => t + ' ')}</Text>
		</Stack>
	);
};

// Replace test data with your own
const features = Array.apply(null, Array(8)).map(function (x, i) {
	return {
		id: i,
		title: 'Lorem ipsum dolor sit amet',
		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
	};
});

export interface ProjectProps {
	title: string;
	description: string;
	image: string | null;
	attributes: ProjectAttributeProps[];
	tags?: string[];
}

export default function ProjectCard({
	title,
	description,
	attributes,
	image,
	tags,
}: ProjectProps) {
	return (
		<Container
			maxW={'full'}
			py={12}
			bgColor={useColorModeValue('whiteAlpha.600', 'blackAlpha.600')}
			borderRadius={'xl'}
		>
			<SimpleGrid
				id={'StaxNSnax'}
				columns={{ base: 1, md: 2, lg: 3 }}
				spacing={{ base: 1, sm: 2, md: 8 }}
				pb={12}
			>
				<Stack
					id={'StaxNSnax'}
					m={'auto'}
					spacing={{ base: 1, md: 4 }}
					px={{ base: 1, md: 4, lg: 8 }}
				>
					<Heading fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }}>
						{title}
					</Heading>
					<Text
						color={useColorModeValue('gray.700', 'gray.300')}
						fontSize={'lg'}
					>
						{description}
					</Text>
				</Stack>
				<Flex
					px={{ base: 1, sm: 2, lg: 8 }}
					my={{ base: 4, sm: 8, lg: 4 }}
				>
					<Image
						rounded={'full'}
						alt={'feature image'}
						src={'/HeadShot-square.png'}
						objectFit={'cover'}
					/>
				</Flex>
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
					{attributes.map((attr, index) => (
						<ProjectAttribute
							key={index}
							title={attr.title}
							icon={attr.icon}
							iconBg={attr.iconBg}
							text={attr.text}
						/>
					))}
				</Stack>
			</SimpleGrid>
			<Container
				maxW={'6xl'}
				my={'auto'}
			>
				<SimpleGrid
					columns={{ base: 1, md: 2, lg: 4 }}
					spacing={10}
				>
					{features.map((feature) => (
						<HStack
							key={feature.id}
							align={'top'}
						>
							<Box
								color={'green.400'}
								px={2}
							>
								<Icon as={CheckIcon} />
							</Box>
							<VStack align={'start'}>
								<Text fontWeight={600}>{feature.title}</Text>
								<Text color={'gray.600'}>{feature.text}</Text>
							</VStack>
						</HStack>
					))}
				</SimpleGrid>
			</Container>
		</Container>
	);
}
