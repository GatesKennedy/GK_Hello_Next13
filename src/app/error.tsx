'use client';

import { Container } from '@chakra-ui/react';
import type { ErrorProps } from 'next/error';
import { ErrorPageInitialProps } from '../types';

function Error({ statusCode }: ErrorProps) {
	return (
		<Container>
			{statusCode
				? `(>_<) darnit... An error ${statusCode} occurred on server`
				: '(>_<) darnit... An error occurred on client'}
		</Container>
	);
}

Error.getInitialProps = ({ res, err }: ErrorPageInitialProps) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
