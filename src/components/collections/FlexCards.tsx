'use client';

import {
	Container,
	Flex,
	Heading,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import AttributeCard, { AttributeProps } from '../cards/AttributeCard';

export default function CardWrapper(props: {
	attributeData: AttributeProps[];
}) {
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
					{props.attributeData.map((card, index) => (
						<AttributeCard
							key={index}
							heading={card.heading}
							description={card.description}
							icon={card.icon}
							href={card.href}
						/>
					))}
				</Flex>
			</Container>
		</Container>
	);
}
