'use client';

import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	InputGroup,
	InputLeftElement,
	Stack,
	Textarea,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { COLOR } from '../../reference/layoutValues';

export default function ContactForm() {
	const bgThick: string = useColorModeValue(
		'whiteAlpha.700',
		'blackAlpha.200',
	);
	return (
		<Flex
			id='contact'
			align='center'
			justify='center'
			height={'full'}
			margin-bottom={'64px'}
		>
			<Box
				id={'ContactBox'}
				borderRadius='lg'
				m={{ base: 4, md: 4, lg: 4 }}
				p={{ base: 4, lg: 4 }}
			>
				<Box>
					<VStack spacing={{ base: 4, md: 8, lg: 4 }}>
						<Heading
							fontSize={{
								base: '4xl',
								md: '5xl',
							}}
						>
							email me
						</Heading>

						<Stack
							spacing={{ base: 4, md: 8, lg: 12 }}
							direction={{ base: 'column', md: 'row' }}
							bg={bgThick}
							borderRadius={'lg'}
						>
							<Box
								// bg={useColorModeValue('white', 'gray.700')}
								borderRadius='lg'
								p={8}
								color={useColorModeValue(
									'gray.700',
									'whiteAlpha.900',
								)}
								shadow='base'
							>
								<VStack
									id={'Contact-VStack'}
									spacing={4}
								>
									<FormControl isRequired>
										<FormLabel>name</FormLabel>

										<InputGroup>
											<InputLeftElement>
												<BsPerson />
											</InputLeftElement>
											<Input
												type='text'
												name='name'
												placeholder='Your Name'
											/>
										</InputGroup>
									</FormControl>

									<FormControl isRequired>
										<FormLabel>email</FormLabel>

										<InputGroup>
											<InputLeftElement>
												<MdOutlineEmail />
											</InputLeftElement>
											<Input
												type='email'
												name='email'
												placeholder='Your Email'
											/>
										</InputGroup>
									</FormControl>

									<FormControl isRequired>
										<FormLabel>words</FormLabel>

										<Textarea
											name='message'
											placeholder='Your Message'
											rows={6}
											resize='none'
										/>
									</FormControl>

									<Button
										colorScheme='blue'
										bg='blue.400'
										color='white'
										_hover={{
											bg: 'blue.500',
										}}
										width='full'
									>
										Send Message
									</Button>
								</VStack>
							</Box>
						</Stack>
					</VStack>
				</Box>
			</Box>
		</Flex>
	);
}
