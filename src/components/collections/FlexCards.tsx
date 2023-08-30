'use client';

import {
	Container,
	Flex,
	Heading,
	Icon,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import {
	FcBinoculars,
	FcCloseUpMode,
	FcCollaboration,
	FcGraduationCap,
	FcMindMap,
} from 'react-icons/fc';
import { AttributeCard } from '../cards/AttributeCard';

export default function CardWrapper() {
	return (
		<Container
			maxW={'5xl'}
			p={4}
			bgColor={useColorModeValue('whiteAlpha.800', 'blackAlpha.800')}
			borderBottomRadius={'xl'}
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
					Soft Skills
				</Heading>
				<Text
					color={useColorModeValue('gray.800', 'gray.200')}
					fontSize={{ base: 'sm', sm: 'lg' }}
				>
					Interests &nbsp;|&nbsp; Personality &nbsp;|&nbsp; History
					&nbsp;|&nbsp; Attributes &nbsp;|&nbsp; Weaknesses
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
				pb={8}
			>
				<Flex
					flexWrap='wrap'
					gridGap={6}
					justify='center'
				>
					<AttributeCard
						heading={'Exceedingly Curious'}
						icon={
							<Icon
								as={FcBinoculars}
								w={10}
								h={10}
							/>
						}
						description={
							'Fundamentally passionate about learning and understanding systems of all kinds.'
						}
						href={'/work'}
					/>
					<AttributeCard
						heading={'B.S Mechanical Engineering'}
						icon={
							<Icon
								as={FcGraduationCap}
								w={10}
								h={10}
							/>
						}
						description={
							'I attended Washington State University From 2006 to 2011 and earned a bachelors of science in mechanical engineering.'
						}
						href={'/work'}
					/>
					<AttributeCard
						heading={'Project Managment'}
						icon={
							<Icon
								as={FcCollaboration}
								w={10}
								h={10}
							/>
						}
						description={
							'As a co-founder of an design and fabrication company for large events. I have experience leading teams through structural fabrication and installations.'
						}
						href={'/work'}
					/>
					<AttributeCard
						heading={'Creativity'}
						icon={
							<Icon
								as={FcCloseUpMode}
								w={10}
								h={10}
							/>
						}
						description={
							"Look at the design of this website. Isn't it Unique? I made this look like this because I too am unique and cool. Hire me."
						}
						href={'/work'}
					/>
					<AttributeCard
						heading={'Full-Stack'}
						icon={
							<Icon
								as={FcMindMap}
								w={10}
								h={10}
							/>
						}
						description={
							'I know lots of things about building application software and my knowledge is for sale in the form of monthly payments for challenging tasks.'
						}
						href={'/work'}
					/>
				</Flex>
			</Container>
		</Container>
	);
}
