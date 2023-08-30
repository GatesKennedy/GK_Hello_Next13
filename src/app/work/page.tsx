'use client';

import React from 'react';
import { Box, Text, Container, Heading, Stack } from '@chakra-ui/react';
import ProjectCard from '../../components/cards/ProjectCard';
import { projectsData } from './projectData';

const WorkPage = () => {
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
						features={project.features}
					/>
				))}
			</Stack>
		</Box>
	);
};

export default WorkPage;
