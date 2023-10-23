'use client';

import React from 'react';
import {
	Box,
	Text,
	Container,
	Heading,
	Stack,
	Divider,
} from '@chakra-ui/react';
import { projectsData } from '@/data/workPageData';
import ProjectCard from '@/components/cards/ProjectCard';

const WorkPage = () => {
	return (
		<Box
			maxW={'8xl'}
			mx={'auto'}
			mb={'152px'}
			pb={'76px'}
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
						linkDemo={project.linkDemo}
						linkRepo={project.linkRepo}
						linkMore={project.linkMore}
					/>
				))}
			</Stack>
		</Box>
	);
};

export default WorkPage;
