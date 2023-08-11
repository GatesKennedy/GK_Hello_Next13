'use client';

import { ReactElement } from 'react';
import {
	Box,
	SimpleGrid,
	Text,
	Stack,
	Flex,
	Container,
	useColorModeValue,
	Heading,
	useColorMode,
	HStack,
} from '@chakra-ui/react';

export interface SkillSectionProps {
	icon: ReactElement;
	title: string;
	text: string;
	items: string[];
}

const SkillSection = ({ title, text, icon, items }: SkillSectionProps) => {
	return (
		<Box
			maxW={{ base: 'full', md: '275px' }}
			w={'full'}
			borderWidth='1px'
			borderRadius='lg'
			overflow='hidden'
			bg={useColorModeValue('whiteAlpha.700', 'blackAlpha.900')}
			p={5}
		>
			<Stack
				align={'start'}
				spacing={2}
			>
				<HStack
					bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
					borderRadius={'lg'}
					w={'full'}
				>
					<Flex
						w={16}
						h={16}
						align={'center'}
						justify={'right'}
						color={'white'}
						rounded={'full'}
						mb={1}
					>
						{icon}
					</Flex>
					<Box w={'50%'}>
						<Text
							color={useColorModeValue('black', 'white')}
							fontSize={{ base: '2xl' }}
							fontWeight={600}
							textAlign={'left'}
						>
							{title}
						</Text>
					</Box>
				</HStack>
				<Text
					fontStyle={'oblique'}
					fontWeight={'bold'}
					color={useColorModeValue('gray.600', 'gray.400')}
				>
					{text}
				</Text>
				{items.map((item, index) => {
					return <Text key={index}>{item}</Text>;
				})}
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
			bgColor={useColorModeValue('whiteAlpha.700', 'blackAlpha.700')}
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
					color={useColorModeValue('gray.800', 'gray.200')}
					fontSize={{ base: 'sm', sm: 'lg' }}
				>
					Languages &nbsp;|&nbsp; Concepts &nbsp;|&nbsp; Frameworks
					&nbsp;|&nbsp; Libraries &nbsp;|&nbsp; Platforms
				</Text>
				<Text
					color={useColorModeValue('gray.600', 'gray.400')}
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
					{columnsData.map((column, index) => (
						<SkillSection
							key={index}
							icon={column.icon}
							title={column.title}
							text={column.text}
							items={column.items}
						/>
					))}
				</SimpleGrid>
			</Container>
		</Container>
	);
}
