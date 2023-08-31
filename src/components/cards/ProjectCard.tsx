'use client';

import { CheckIcon } from '@chakra-ui/icons';
import {
	Container,
	SimpleGrid,
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
import { MdComputer, MdDescription, MdSchedule } from 'react-icons/md';
import { STATUS_TYPE, TAG } from '../../reference/stringConstants';
import ModalCarosel from '../modal/Modal';
import { TimeProps, ProjectProps } from '@/data/workPageData';

const TimeAttribute = ({ start, end }: TimeProps) => {
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
				bg={useColorModeValue('blue.100', 'blue.900')}
			>
				<Icon
					as={MdSchedule}
					color={'blue.500'}
					w={5}
					h={5}
				/>
			</Flex>
			<Text fontWeight={600}>{`${start} - ${end}`}</Text>
		</Stack>
	);
};
const StatusAttribute = (props: { status: STATUS_TYPE }) => {
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
				bg={useColorModeValue('purple.100', 'purple.900')}
			>
				<Icon
					as={MdDescription}
					color={'purple.500'}
					w={5}
					h={5}
				/>
			</Flex>
			<Text fontWeight={600}>{props.status.toString()}</Text>
		</Stack>
	);
};
const TagAttribute = (props: { tags: TAG[] }) => {
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
				bg={useColorModeValue('green.100', 'green.900')}
			>
				<Icon
					as={MdComputer}
					color={'green.500'}
					w={5}
					h={5}
				/>
			</Flex>
			<Box fontWeight={600}>
				{props.tags.map((tag, index) => {
					return <Text key={index}>{tag}</Text>;
				})}
			</Box>
		</Stack>
	);
};

export default function ProjectCard({
	title,
	description,
	attributes,
	images,
	features,
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
					<ModalCarosel imageList={images} />
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
					<TimeAttribute
						start={attributes.time.start}
						end={attributes.time.end}
					/>
					<StatusAttribute
						status={attributes.status as STATUS_TYPE}
					/>
					<TagAttribute tags={attributes.tags} />
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
					{features.map((feature, index) => (
						<HStack
							key={index}
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
								<Text color={'gray.600'}>{feature.desc}</Text>
							</VStack>
						</HStack>
					))}
				</SimpleGrid>
			</Container>
		</Container>
	);
}

// !!!    SO COOL    !!!
// !!!    SO COOL    !!!
// !!!    SO COOL    !!!
// Replace test data with your own

// const features = Array.apply(null, Array(8)).map(function (x, i) {
// 	return {
// 		id: i,
// 		title: 'Lorem ipsum dolor sit amet',
// 		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
// 	};
// });
