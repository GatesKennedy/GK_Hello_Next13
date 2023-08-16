'use client';
import {
	Box,
	Text,
	Container,
	Heading,
	Icon,
	Stack,
	useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import ProjectCard, { ProjectProps } from '../../components/Cards/ProjectCard';
import { MdComputer, MdDescription, MdSchedule } from 'react-icons/md';
import { describe } from 'node:test';
import {
	ATTRIBUTE_TITLE,
	STATUS_TYPE,
	TAG,
} from '../../reference/stringConstants';

const WorkPage = () => {
	//	Projects Data
	const projectsData: ProjectProps[] = [
		{
			title: 'Mimir Dashboard',
			description: 'Business dasbhoard for dental practices',
			images: [''],
			attributes: {
				time: { start: "August '22", end: "June '23" },
				status: STATUS_TYPE.COMPLETE,
				tags: [TAG.AWS_LAMBDA, TAG.NEXT, TAG.NODE],
			},
		},
		{
			title: 'Dental Intake',
			description: 'Business dasbhoard for dental practices',
			images: [''],
			attributes: {
				time: { start: "August '22", end: "June '23" },
				status: STATUS_TYPE.COMPLETE,
				tags: [TAG.AWS_LAMBDA, TAG.NEXT, TAG.NODE],
			},
		},
		{
			title: 'New West Technologies',
			description: 'Business dasbhoard for dental practices',
			images: [''],
			attributes: {
				time: { start: "August '22", end: "June '23" },
				status: STATUS_TYPE.COMPLETE,
				tags: [TAG.AWS_LAMBDA, TAG.NEXT, TAG.NODE],
			},
		},
		{
			title: 'GK Hello',
			description: 'Business dasbhoard for dental practices',
			images: [''],
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
