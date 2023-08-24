'use client';

import React from 'react';
import {
	Box,
	IconButton,
	useBreakpointValue,
	Stack,
	Heading,
	Text,
	Container,
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import imgHeadshot from '../../public/HeadShot-square.png';
import Image from 'next/image';
import { ListImage } from '../cards/ProjectCard';

// Settings for the slider
const settings = {
	dots: true,
	arrows: false,
	fade: true,
	infinite: true,
	autoplay: true,
	speed: 500,
	autoplaySpeed: 5000,
	slidesToShow: 1,
	slidesToScroll: 1,
};

export default function CaptionCarousel(props: { imageList: ListImage[] }) {
	// As we have used custom buttons, we need a reference variable to
	// change the state
	const [slider, setSlider] = React.useState<Slider | null>(null);

	// These are the breakpoints which changes the position of the
	// buttons as the screen size changes
	const top = useBreakpointValue({ base: '90%', md: '50%' });
	const side = useBreakpointValue({ base: '30%', md: '40px' });

	// This list contains all the data for carousels
	// This can be static or loaded from a server
	const cards = [
		{
			title: 'HeadShot Image',
			text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
			image: imgHeadshot,
		},
		{
			title: 'Unsplash IMG 2',
			text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
			image: 'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
		},
		{
			title: 'unsplash 3',
			text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
			image: 'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
		},
	];

	return (
		<Box
			position={'relative'}
			height={'600px'}
			width={'full'}
			overflow={'hidden'}
		>
			{/* CSS files for react-slick */}
			<link
				rel='stylesheet'
				type='text/css'
				href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
			/>
			<link
				rel='stylesheet'
				type='text/css'
				href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
			/>
			{/* Left Icon */}
			<IconButton
				aria-label='left-arrow'
				variant='ghost'
				position='absolute'
				left={side}
				top={top}
				transform={'translate(0%, -50%)'}
				zIndex={2}
				onClick={() => slider?.slickPrev()}
			>
				<BiLeftArrowAlt size='40px' />
			</IconButton>
			{/* Right Icon */}
			<IconButton
				aria-label='right-arrow'
				variant='ghost'
				position='absolute'
				right={side}
				top={top}
				transform={'translate(0%, -50%)'}
				zIndex={2}
				onClick={() => slider?.slickNext()}
			>
				<BiRightArrowAlt size='40px' />
			</IconButton>
			{/* Slider */}
			<Slider
				{...settings}
				ref={(slider) => setSlider(slider)}
			>
				{props.imageList.map((image, index) => (
					<Box
						key={index}
						height={'6xl'}
						position='relative'
						backgroundPosition='center'
						backgroundRepeat='no-repeat'
						backgroundSize='cover'
					>
						<Container
							size='container.lg'
							height='600px'
							position='relative'
						>
							<Stack
								spacing={6}
								w={'full'}
								maxW={'lg'}
								position='absolute'
								top='50%'
								transform='translate(0, -50%)'
							>
								<Heading
									fontSize={{
										base: '3xl',
										md: '4xl',
										lg: '5xl',
									}}
								>
									{image.title}
								</Heading>
								<Image
									alt={`project image ${index + 1}`}
									src={image.src}
								/>
								<Text
									fontSize={{ base: 'md', lg: 'lg' }}
									color='GrayText'
								>
									{image.desc}
								</Text>
							</Stack>
						</Container>
					</Box>
				))}
			</Slider>
		</Box>
	);
}
