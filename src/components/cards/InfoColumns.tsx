'use client';

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
	Center,
} from '@chakra-ui/react';
import { SkillSectionProps } from '../../types';

const SkillSection = ({ title, text, icon, items }: SkillSectionProps) => {
	return (
		<Box
			maxW={{ base: 'full', md: '275px' }}
			w={'full'}
			borderWidth="1px"
			borderRadius="lg"
			overflow="hidden"
			bg={useColorModeValue('whiteAlpha.700', 'blackAlpha.900')}
			p={5}
		>
			<Stack align={'start'} spacing={2} w={'full'}>
				<Center w={'full'}>
					<HStack
						align={'center'}
						justify={'center'}
						w={'full'}
						m={'auto'}
						bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
						borderRadius={'lg'}
					>
						<Flex
							h={16}
							align={'center'}
							justify={'right'}
							color={'white'}
							rounded={'full'}
							mb={1}
							ml={4}
						>
							{icon}
						</Flex>
						<Box>
							<Text
								color={useColorModeValue('black', 'white')}
								fontSize={{ base: '2xl' }}
								fontWeight={600}
								textAlign={'left'}
								mr={6}
							>
								{title}
							</Text>
						</Box>
					</HStack>
				</Center>
				<Text
					fontStyle={'oblique'}
					fontWeight={'bold'}
					color={useColorModeValue('gray.600', 'gray.400')}
					px={{ base: 4, md: 4, lg: 2 }}
				>
					{text}
				</Text>
				{items.map((item, index) => {
					return (
						<Text key={index} px={{ base: 8, md: 8, lg: 2 }}>
							{item}
						</Text>
					);
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
				<Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
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

			<Container maxW={'5xl'} py={8}>
				<SimpleGrid
					justifyContent={'center'}
					columns={{ base: 1, md: 2, lg: 3 }}
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
