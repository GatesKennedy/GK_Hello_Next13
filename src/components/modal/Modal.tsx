import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure,
	Container,
	SimpleGrid,
	Square,
} from '@chakra-ui/react';
import Image from 'next/image';
import CaptionCarousel from '../collections/Carosel';
import imgHeadshot from '../../public/HeadShot-square.png';
import { ListImage } from '../cards/ProjectCard';

function ModalCarosel(props: { imageList: ListImage[] }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Container
				maxW={'6xl'}
				my={'auto'}
			>
				<SimpleGrid
					columns={{ base: 2, lg: 2 }}
					spacing={4}
				>
					{props.imageList.map((image, index) => (
						<Square key={index}>
							<Image
								alt={`project image ${index + 1}`}
								src={image.src}
								onClick={onOpen}
							/>
						</Square>
					))}
				</SimpleGrid>
			</Container>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<CaptionCarousel imageList={props.imageList} />
					</ModalBody>

					<ModalFooter>
						<Button
							colorScheme='blue'
							mr={3}
							onClick={onClose}
						>
							Close
						</Button>
						{/* <Button variant='ghost'>Secondary Action</Button> */}
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

export default ModalCarosel;
