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
	Flex,
} from '@chakra-ui/react';
import Image from 'next/image';
import { ListImage } from '@/data/workPageData';
import CaptionCarousel from '../collections/Carosel';

function ModalCarosel(props: { imageList: ListImage[] }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Container
				id={'Modal-cont-root'}
				maxW={'6xl'}
				my={'auto'}
			>
				<Flex
					flexWrap={'wrap'}
					gridGap={6}
					justify={'center'}
				>
					{props.imageList.map((image, index) => (
						<Square
							key={index}
							maxW={160}
							maxH={160}
						>
							<Image
								style={{
									objectFit: 'cover',
									width: 160,
									height: 160,
								}}
								alt={`project image ${index + 1}`}
								src={image.src}
								onClick={onOpen}
							/>
						</Square>
					))}
				</Flex>
			</Container>
			<Modal
				id={'model-root'}
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay />
				<ModalContent id={'modelContent-root'}>
					{/* TODO: pass project title */}
					{/* <ModalHeader>Modal Title</ModalHeader> */}

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
