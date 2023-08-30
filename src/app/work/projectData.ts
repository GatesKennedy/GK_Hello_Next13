import { STATUS_TYPE, TAG } from '@/reference/stringConstants'
import { StaticImageData } from 'next/image'

import headShotImage from '../../../public/HeadShot-square.png';
import mimir_arch from '../../../public/mimir_arch.png';

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
	tags: TAG[];
}
export interface ProjectProps {
	title: string;
	description: string;
	attributes: ProjectAttributeProps;
	features: Feature[];
	images: ListImage[];
}

//	Projects Data
export const projectsData: ProjectProps[] = [
	{
		title: 'Mimir Dashboard',
		description: 'Business dasbhoard for dental practices',
		images: [
			{
				title: 'Argos Software Architecture',
				desc: 'Argos Software Architecture',
				src: mimir_arch,
			},
			{ title: 'two', desc: 'about two', src: headShotImage },
			{ title: 'three', desc: 'about three', src: headShotImage },
			{ title: 'four', desc: 'about four', src: headShotImage },
		],
		attributes: {
			time: { start: "August '22", end: "June '23" },
			status: STATUS_TYPE.COMPLETE,
			tags: [TAG.AWS_LAMBDA, TAG.NEXT, TAG.NODE],
		},
		features: [
			{title: 'Data Warehouse', desc:'Data is regularly collected from multiple APIs, processed into easily consumable metrics and stored as historical records'},
			{title: 'Dynamic Report Generation', desc:'Custom reports can be built from all available data and exported to a pdf or csv for presentations or further analysis'},
			{title: 'User Access Tiers', desc:'Users are granted access to features, admin settings and certain data based on their account type and profile'},
			{title: 'Admin Controls', desc:'Admin are able to set performance targets and specify access settings for other users'},
			{title: 'Domain Specific Userbase', desc:'each instance of the mimir dashboard whitelists users of specific Google Suite domains integrating an entire team safely'},
		],
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
		features: [],
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
		features: [],
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
		features: [],
	},
];