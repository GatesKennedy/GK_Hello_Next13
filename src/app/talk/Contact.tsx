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
	useToast,
	VStack,
} from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
export type FormValues = {
	name: string;
	email: string;
	message: string;
};

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();

	const [formVisibility, setFormVisibility] = useState(true);

	const sendEmail: SubmitHandler<FormValues> = async (data) => {
		// TODO: Fetch API to nodemailer endpoint
		console.log('data: ', data);
		console.log('errors: ', errors);
		const apiResponse = await fetch('api/email', {
			method: 'POST',
			body: JSON.stringify(data),
		});

		console.log('apiResponse: ', apiResponse);
		if (apiResponse.ok) {
			console.log('\nSENT SUCCESS\n');
			setFormVisibility(false);
		} else {
			console.log('\nSEND FAILURE\n');
		}
	};

	const bgThick: string = useColorModeValue(
		'whiteAlpha.700',
		'blackAlpha.200',
	);

	return (
		<Flex
			id='contact'
			align='center'
			justify='center'
			height={'87vh'}
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
							{formVisibility ? 'Email Me' : 'Talk Soon...'}
						</Heading>

						<Stack
							spacing={{ base: 4, md: 8, lg: 12 }}
							direction={{ base: 'column', md: 'row' }}
							bg={bgThick}
							borderRadius={'lg'}
						>
							<Box
								borderRadius='lg'
								p={{ base: 4 }}
								color={useColorModeValue(
									'gray.700',
									'whiteAlpha.900',
								)}
								shadow='base'
								hidden={!formVisibility}
							>
								<VStack
									id={'Contact-VStack'}
									spacing={4}
									as={'form'}
									onSubmit={handleSubmit(sendEmail)}
								>
									<FormControl isRequired>
										<FormLabel>Name</FormLabel>

										<InputGroup>
											<InputLeftElement>
												<BsPerson />
											</InputLeftElement>
											<Input
												type='text'
												// name='name'
												placeholder='Your Name'
												{...register('name', {
													required:
														'Please enter your name...',
													minLength: 3,
													maxLength: 36,
												})}
											/>
										</InputGroup>
									</FormControl>

									<FormControl isRequired>
										<FormLabel>Email</FormLabel>

										<InputGroup>
											<InputLeftElement>
												<MdOutlineEmail />
											</InputLeftElement>
											<Input
												type='email'
												placeholder='Your Email'
												// name='email'
												{...register('email', {
													required:
														'Please provide an email address...',
													pattern: /^\S+@\S+$/i,
												})}
											/>
										</InputGroup>
									</FormControl>

									<FormControl isRequired>
										<FormLabel>Words</FormLabel>

										<Textarea
											// name='message'
											placeholder='Your Message'
											rows={6}
											resize='none'
											{...register('message', {
												required: true,
												min: 2,
												maxLength: 120,
											})}
										/>
									</FormControl>

									<Button
										type={'submit'}
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
