'use client';
import React from 'react';
import { Box, Text, Container, Heading, Stack } from '@chakra-ui/react';
import ProjectCard, { ProjectProps } from '@/components/cards/ProjectCard';

import { STATUS_TYPE, TAG } from '../../reference/stringConstants';
import headShotImage from '../../public/HeadShot-square.png';

const WorkPage = () => {
	//	Projects Data
	const projectsData: ProjectProps[] = [
		{
			title: 'Mimir Dashboard',
			description: 'Business dasbhoard for dental practices',
			images: [
				{ title: 'one', desc: 'about one', src: headShotImage },
				{ title: 'two', desc: 'about two', src: headShotImage },
				{ title: 'three', desc: 'about three', src: headShotImage },
				{ title: 'four', desc: 'about four', src: headShotImage },
			],
			attributes: {
				time: { start: "August '22", end: "June '23" },
				status: STATUS_TYPE.COMPLETE,
				tags: [TAG.AWS_LAMBDA, TAG.NEXT, TAG.NODE],
			},
		},
		{
			title: 'Dental Intake',
			description:
				"New Patient intake form for dentists to collect and provide information about a patient's potential risks related to their dental health.",
			images: [
				{ title: 'one', desc: 'about one', src: headShotImage },
				{ title: 'two', desc: 'about two', src: headShotImage },
				{ title: 'three', desc: 'about three', src: headShotImage },
				{ title: 'four', desc: 'about four', src: headShotImage },
			],
			attributes: {
				time: { start: "August '22", end: "June '23" },
				status: STATUS_TYPE.COMPLETE,
				tags: [TAG.AWS_LAMBDA, TAG.NEXT, TAG.NODE],
			},
		},
		{
			title: 'New West Technologies',
			description: 'Business dasbhoard for dental practices',
			images: [
				{ title: 'one', desc: 'about one', src: headShotImage },
				{ title: 'two', desc: 'about two', src: headShotImage },
				{ title: 'three', desc: 'about three', src: headShotImage },
				{ title: 'four', desc: 'about four', src: headShotImage },
			],
			attributes: {
				time: { start: "August '22", end: "June '23" },
				status: STATUS_TYPE.COMPLETE,
				tags: [TAG.AWS_LAMBDA, TAG.NEXT, TAG.NODE],
			},
		},
		{
			title: 'GK Hello',
			description: 'Business dasbhoard for dental practices',
			images: [
				{ title: 'one', desc: 'about one', src: headShotImage },
				{ title: 'two', desc: 'about two', src: headShotImage },
				{ title: 'three', desc: 'about three', src: headShotImage },
				{ title: 'four', desc: 'about four', src: headShotImage },
			],
			attributes: {
				time: { start: "August '22", end: "June '23" },
				status: STATUS_TYPE.COMPLETE,
				tags: [TAG.AWS_LAMBDA, TAG.NEXT, TAG.NODE],
			},
		},
	];

	return (
		<Box
			maxW={'8xl'}
			mx={'auto'}
			mb={'152px'}
		>
			<Stack
				spacing={4}
				as={Container}
				maxW={'3xl'}
				textAlign={'center'}
				my={8}
			>
				<Heading fontSize={'3xl'}>Project History</Heading>
				<Text
					color={'gray.600'}
					fontSize={'xl'}
				>
					A highlighted list of work
				</Text>
			</Stack>
			<Stack mx={2}>
				{projectsData.map((project, index) => (
					<ProjectCard
						key={index}
						title={project.title}
						description={project.description}
						images={project.images}
						attributes={project.attributes}
					/>
				))}
			</Stack>
		</Box>
	);
};

export default WorkPage;
