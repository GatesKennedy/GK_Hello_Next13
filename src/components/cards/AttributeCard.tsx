import {
	useColorModeValue,
	Stack,
	Flex,
	Heading,
	Button,
	Box,
	Text,
} from '@chakra-ui/react';

import Link from 'next/link';
import { AttributeProps } from '../../types';

const AttributeCard = ({
	heading,
	description,
	icon,
	href,
}: AttributeProps) => {
	return (
		<Box
			maxW={{ base: 'full', md: '275px' }}
			w={'full'}
			borderWidth="1px"
			borderRadius="lg"
			overflow="hidden"
			bg={useColorModeValue('RGBA(255, 255, 255, 0.98)', 'blackAlpha.900')}
			p={5}
		>
			<Stack align={'start'} spacing={2}>
				<Flex
					w={16}
					h={16}
					align={'center'}
					justify={'center'}
					color={'white'}
					rounded={'full'}
					bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.200')}
				>
					{icon}
				</Flex>
				<Box mt={2}>
					<Heading size="md">{heading}</Heading>
					<Text mt={1} fontSize={'sm'}>
						{description}
					</Text>
				</Box>
				<Button variant={'link'} colorScheme={'blue'} size={'sm'}>
					<Link href={href}>Learn more</Link>
				</Button>
			</Stack>
		</Box>
	);
};

export default AttributeCard;
