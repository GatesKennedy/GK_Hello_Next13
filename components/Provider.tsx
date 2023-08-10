'use client';

// import { SessionProvider } from 'next-auth/react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ChildProps } from '../app/layout';
import theme from '../config/theme';

const Provider = ({ children }: ChildProps) => {
	return (
		<ChakraProvider theme={theme}>
			{/* <SessionProvider>{children}</SessionProvider> */}
			{children}
		</ChakraProvider>
	);
};

export default Provider;
