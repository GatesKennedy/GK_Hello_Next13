import { ReactNode } from 'react';
import { chakra, useColorModeValue, VisuallyHidden } from '@chakra-ui/react';

const SocialButton = ({
	children,
	label,
	href,
}: {
	children: ReactNode;
	label: string;
	href: string;
}) => {
	return (
		<chakra.button
			aria-label={label}
			bg={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
			rounded={'full'}
			w={12}
			h={12}
			cursor={'pointer'}
			as={'a'}
			target={'_blank'}
			href={href}
			display={'inline-flex'}
			alignItems={'center'}
			justifyContent={'center'}
			transition={'background 0.3s ease'}
			_hover={{
				bg: 'blue.500',
				color: useColorModeValue('white', 'gray.700'),
				transform: 'translateY(-2px)',
				boxShadow: 'lg',
			}}
		>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</chakra.button>
	);
};

export default SocialButton;
