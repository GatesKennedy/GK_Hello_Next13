import { Inter } from 'next/font/google';
import Provider from '../components/Provider';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { calc } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'aoe',
	description: 'are you curious?',
};
export type ChildProps = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: ChildProps) {
	return (
		<html
			lang='en'
			className={inter.className}
		>
			<body style={{ height: '100vh', margin: 0, padding: 0 }}>
				<Provider>
					<Header />
					<main style={{ minHeight: '87%' }}>{children}</main>
					<Footer />
				</Provider>
			</body>
		</html>
	);
}
