import { StaticImageData } from 'next/image';
import { ReactElement } from 'react';
import { STATUS_TYPE, TOOL } from '../constants/stringConstants.js';

export interface AttributeProps {
	heading: string;
	description: string;
	icon: ReactElement;
	href: string;
}

export interface SkillSectionProps {
	icon: ReactElement;
	title: string;
	text: string;
	items: string[];
}

export interface ListImage {
	title: string;
	desc: string;
	src: StaticImageData;
}
export interface Feature {
	title: string;
	desc: string;
}
export interface TimeProps {
	start: string;
	end: string;
}
export interface ProjectAttributeProps {
	time: TimeProps;
	status: STATUS_TYPE;
	tags: TOOL[];
}
export interface ProjectProps {
	title: string;
	description: string;
	attributes: ProjectAttributeProps;
	features: Feature[];
	images: ListImage[];
	linkDemo: { title: string; href: string } | null;
	linkRepo: { title: string; href: string } | null;
	linkMore: { title: string; href: string } | null;
}
