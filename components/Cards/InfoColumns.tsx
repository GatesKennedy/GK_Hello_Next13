'use client';

import { ReactElement } from 'react';
import {
	Box,
	SimpleGrid,
	Icon,
	Text,
	Stack,
	Flex,
	Container,
	Center,
	useColorModeValue,
	Heading,
	useColorMode,
} from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

export interface SkillSectionProps {
	title: string;
	text: string;
	icon: ReactElement;
}

const SkillSection = ({ title, text, icon }: SkillSectionProps) => {
	return (
		<Box
			maxW={{ base: 'full', md: '275px' }}
			w={'full'}
			borderWidth='1px'
			borderRadius='lg'
			overflow='hidden'
			bg={useColorModeValue('whiteAlpha.900', 'blackAlpha.900')}
			p={5}
		>
			<Stack
				align={'start'}
				spacing={2}
			>
				<Flex
					w={16}
					h={16}
					align={'center'}
					justify={'center'}
					color={'white'}
					rounded={'full'}
					bg={'gray.100'}
					mb={1}
				>
					{icon}
				</Flex>
				<Text fontWeight={600}>{title}</Text>
				<Text color={'gray.600'}>{text}</Text>
			</Stack>
		</Box>
	);
};

export default function InfoColumns(props: {
	columnsData: SkillSectionProps[];
}) {
	const { columnsData } = props;
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Container
			maxW={'5xl'}
			bgColor={useColorModeValue('whiteAlpha.600', 'blackAlpha.600')}
			backdropInvert={colorMode === 'light' ? '80%' : '50%'}
			py={4}
		>
			<Stack
				spacing={4}
				as={Container}
				maxW={'3xl'}
				textAlign={'center'}
				py={4}
			>
				<Heading
					fontSize={{ base: '2xl', sm: '4xl' }}
					fontWeight={'bold'}
				>
					Tool Belt
				</Heading>
				<Text
					color={'gray.100'}
					fontSize={{ base: 'sm', sm: 'lg' }}
				>
					Languages &nbsp;|&nbsp; Concepts &nbsp;|&nbsp; Frameworks
					&nbsp;|&nbsp; Libraries &nbsp;|&nbsp; Platforms
				</Text>
				<Text
					color={'gray.400'}
					fontSize={{ base: 'sm', sm: 'md' }}
				>
					Sorted by experience and interest in descending order.
				</Text>
			</Stack>

			<Container
				maxW={'5xl'}
				py={8}
			>
				<SimpleGrid
					columns={{ base: 1, md: 4 }}
					spacing={10}
				>
					{columnsData.map((column) => {
						const key = columnsData.indexOf(column);
						return (
							<SkillSection
								key={key}
								icon={column.icon}
								title={column.title}
								text={column.text}
							/>
						);
					})}
				</SimpleGrid>
			</Container>
		</Container>
	);
}
