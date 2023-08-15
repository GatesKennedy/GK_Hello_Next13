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
import React, { ReactElement } from 'react';
import GridList from '../../components/GridList';
import ProjectCard, {
	ATTRIBUTE_TITLE,
	ProjectProps,
} from '../../components/Cards/ProjectCard';
import { MdComputer, MdDescription, MdSchedule } from 'react-icons/md';
import { describe } from 'node:test';

const WorkPage = () => {
	//	Projects Data
	const projectsData: ProjectProps[] = [
		{
			title: 'Mimir Dashboard',
			description: 'Business dasbhoard for dental practices',
			image: null,
			attributes: [
				{
					title: ATTRIBUTE_TITLE.TIME,
					text: ['August 2022', ' - ', 'July 2023'],
					iconBg: useColorModeValue('purple.100', 'purple.900'),
					icon: (
						<Icon
							as={MdSchedule}
							color={'purple.500'}
							w={5}
							h={5}
						/>
					),
				},
				{
					title: ATTRIBUTE_TITLE.TECH,
					text: ['NodeTS', 'NextTS', 'PostgreSQL'],
					iconBg: useColorModeValue('purple.100', 'purple.900'),
					icon: (
						<Icon
							as={MdComputer}
							color={'purple.500'}
							w={5}
							h={5}
						/>
					),
				},
				{
					title: ATTRIBUTE_TITLE.DUTY,
					text: ['Displays KPI to admin'],
					iconBg: useColorModeValue('purple.100', 'purple.900'),
					icon: (
						<Icon
							as={MdComputer}
							color={'purple.500'}
							w={5}
							h={5}
						/>
					),
				},
			],
		},
		{
			title: 'Mimir Dashboard',
			description: 'Business dasbhoard for dental practices',
			image: null,
			attributes: [
				{
					title: ATTRIBUTE_TITLE.TIME,
					text: ['August 2022', ' - ', 'July 2023'],
					iconBg: useColorModeValue('purple.100', 'purple.900'),
					icon: (
						<Icon
							as={MdSchedule}
							color={'purple.500'}
							w={5}
							h={5}
						/>
					),
				},
				{
					title: ATTRIBUTE_TITLE.TECH,
					text: ['NodeTS', 'NextTS', 'PostgreSQL'],
					iconBg: useColorModeValue('purple.100', 'purple.900'),
					icon: (
						<Icon
							as={MdComputer}
							color={'purple.500'}
							w={5}
							h={5}
						/>
					),
				},
				{
					title: ATTRIBUTE_TITLE.DUTY,
					text: ['Displays KPI to admin'],
					iconBg: useColorModeValue('purple.100', 'purple.900'),
					icon: (
						<Icon
							as={MdComputer}
							color={'purple.500'}
							w={5}
							h={5}
						/>
					),
				},
			],
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
			>
				<Heading fontSize={'3xl'}>Project History</Heading>
				<Text
					color={'gray.600'}
					fontSize={'xl'}
				>
					A highlighted list of my work
				</Text>
			</Stack>
			<Stack>
				{projectsData.map((project, index) => (
					<ProjectCard
						key={index}
						title={project.title}
						description={project.description}
						image={project.image}
						attributes={project.attributes}
					/>
				))}
			</Stack>
		</Box>
	);
};

export default WorkPage;
