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
	Spinner,
	Stack,
	Textarea,
	useColorModeValue,
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
	const [formViz, setFormViz] = useState(true);
	const [spinnerViz, setSpinnerViz] = useState(false);
	const bgThick: string = useColorModeValue(
		'whiteAlpha.700',
		'blackAlpha.200',
	);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();

	const sendEmail: SubmitHandler<FormValues> = async (data) => {
		setSpinnerViz(true);
		const apiResponse = await fetch('api/email', {
			method: 'POST',
			body: JSON.stringify(data),
		});

		if (apiResponse.ok) {
			console.log('\nSENT SUCCESS\n');
			setFormViz(false);
		} else {
			console.log('\nSEND FAILURE\n');
		}
		setSpinnerViz(false);
	};

	return (
		<Flex
			id='contactFlex'
			align='center'
			justify='center'
			height='full'
		>
			<Box
				id={'ContactBox'}
				borderRadius='lg'
				mx={{ base: 4, md: 4, lg: 4 }}
				p={{ base: 2, lg: 4 }}
			>
				<VStack
					id={'contact-stack'}
					spacing={{ base: 1, md: 4, lg: 8 }}
				>
					<Heading
						fontSize={{
							base: '2xl',
							md: '5xl',
						}}
					>
						{formViz ? 'Email Me' : 'Talk Soon...'}
					</Heading>

					<Stack
						id={'form-stack'}
						spacing={{ base: 1, md: 8, lg: 12 }}
						direction={{ base: 'column', md: 'row' }}
						bg={bgThick}
						borderRadius={'lg'}
					>
						<Box
							borderRadius='lg'
							py={{ base: 2, md: 4 }}
							px={4}
							color={useColorModeValue(
								'gray.700',
								'whiteAlpha.900',
							)}
							shadow='base'
							hidden={!formViz}
						>
							<VStack
								id={'Contact-VStack'}
								spacing={{ base: 1, md: 4 }}
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
										placeholder='Your Message'
										rows={4}
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
									{spinnerViz ? <Spinner /> : 'Send Message'}
								</Button>
							</VStack>
						</Box>
					</Stack>
				</VStack>
			</Box>
		</Flex>
	);
}
