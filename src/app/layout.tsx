import { Metadata } from 'next';
import './globals.css';
import Footer from '../components/navigation/Footer';
import Header from '../components/navigation/Header';
import Provider from '../components/util/Provider';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'G_K',
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
				</Provider>
			</body>
		</html>
	);
}
