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
import imgHeadshot from '../../../public/HeadShot-square.png';
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
										base: 'xl',
										md: '2xl',
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
