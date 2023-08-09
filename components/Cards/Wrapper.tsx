'use client';

import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Icon,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import {
	FcAbout,
	FcAssistant,
	FcCollaboration,
	FcDonate,
	FcManager,
} from 'react-icons/fc';

interface CardProps {
	heading: string;
	description: string;
	icon: ReactElement;
	href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
	return (
		<Box
			maxW={{ base: 'full', md: '275px' }}
			w={'full'}
			borderWidth='1px'
			borderRadius='lg'
			overflow='hidden'
			bg={useColorModeValue('whiteAlpha.700', 'blackAlpha.700')}
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
					bg={useColorModeValue('gray.100', 'gray.700')}
				>
					{icon}
				</Flex>
				<Box mt={2}>
					<Heading size='md'>{heading}</Heading>
					<Text
						mt={1}
						fontSize={'sm'}
					>
						{description}
					</Text>
				</Box>
				<Button
					variant={'link'}
					colorScheme={'blue'}
					size={'sm'}
				>
					Learn more
				</Button>
			</Stack>
		</Box>
	);
};

export default function CardWrapper() {
	return (
		<Box p={4}>
			<Stack
				spacing={4}
				as={Container}
				maxW={'3xl'}
				textAlign={'center'}
			>
				<Heading
					fontSize={{ base: '2xl', sm: '4xl' }}
					fontWeight={'bold'}
				>
					Tool Belt
				</Heading>
				<Text
					color={'gray.600'}
					fontSize={{ base: 'sm', sm: 'lg' }}
				>
					Only perspective sorts problem from puzzle.
				</Text>
			</Stack>

			<Container
				maxW={'5xl'}
				mt={12}
			>
				<Flex
					flexWrap='wrap'
					gridGap={6}
					justify='center'
				>
					<Card
						heading={'Application Development'}
						icon={
							<Icon
								as={FcAssistant}
								w={10}
								h={10}
							/>
						}
						description={
							'Data-driven solutions for good people that make them feel good and strong and stuff'
						}
						href={'#'}
					/>
					<Card
						heading={'Project Managment'}
						icon={
							<Icon
								as={FcCollaboration}
								w={10}
								h={10}
							/>
						}
						description={
							"Some people are better than others and that's ok when the best of them is telling them what to do!"
						}
						href={'#'}
					/>
					<Card
						heading={'Creativity'}
						icon={
							<Icon
								as={FcDonate}
								w={10}
								h={10}
							/>
						}
						description={
							"Look at the design of this website. Isn't it Unique? I made this look like this because I too am unique and special. Hire me."
						}
						href={'#'}
					/>
					<Card
						heading={'Full-Stack'}
						icon={
							<Icon
								as={FcManager}
								w={10}
								h={10}
							/>
						}
						description={
							'I know lots of things about building software and my knowledge is for sale in the form of monthly payments for challenging tasks.'
						}
						href={'#'}
					/>
					<Card
						heading={'Bachelors of Science: Mechanical Engineering'}
						icon={
							<Icon
								as={FcAbout}
								w={10}
								h={10}
							/>
						}
						description={
							'I am currently single but that is unrelated to the degree I earned in mechanical engineering.'
						}
						href={'#'}
					/>
				</Flex>
			</Container>
		</Box>
	);
}
