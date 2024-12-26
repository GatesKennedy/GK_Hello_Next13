import { Metadata } from 'next';
import './globals.css';
import Footer from '../components/navigation/Footer';
import Header from '../components/navigation/Header';
import { ChakraProvider } from '../providers';
import { Inter } from 'next/font/google';
import { ChildProps } from '../types';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'G_K',
	description: 'are you curious?',
};

export default function RootLayout({ children }: ChildProps) {
	return (
		<html lang="en" className={inter.className}>
			<body style={{ height: '100vh', margin: 0, padding: 0 }}>
				<ChakraProvider>
					<Header />
					<main
						id={'main-element'}
						style={{
							position: 'relative',
							top: '64px',
						}}
					>
						{children}
					</main>
					<Footer />
				</ChakraProvider>
			</body>
		</html>
	);
}
