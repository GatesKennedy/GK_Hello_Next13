'use client';

import {
	ChakraProvider as ChakraUIProvider,
	extendTheme,
} from '@chakra-ui/react';
import theme from '../constants/theme';
import { ChildProps } from '../types';

// Renamed for clarity about its specific purpose
export function ChakraProvider({ children }: ChildProps) {
	return <ChakraUIProvider theme={theme}>{children}</ChakraUIProvider>;
}

export default ChakraProvider;
