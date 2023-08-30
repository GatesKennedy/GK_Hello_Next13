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
							'Data-driven solutions for good people that make them feel good and strong and stuff'
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
							'I am currently single but that is unrelated to the degree I earned in mechanical engineering.'
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
							"Some people are better than others and that's ok when the best of them is telling them what to do!"
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
							"Look at the design of this website. Isn't it Unique? I made this look like this because I too am unique and special. Hire me."
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
							'I know lots of things about building software and my knowledge is for sale in the form of monthly payments for challenging tasks.'
						}
						href={'/work'}
					/>
				</Flex>
			</Container>
		</Container>
	);
}
