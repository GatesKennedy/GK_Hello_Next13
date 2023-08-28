import {
	Button,
	Tooltip,
	useClipboard,
	useColorModeValue,
	VisuallyHidden,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

const CopyButton = ({
	children,
	label,
	copyText,
}: {
	children: ReactNode;
	label: string;
	copyText: string;
}) => {
	const { hasCopied, onCopy } = useClipboard(copyText);

	return (
		<Tooltip
			label={hasCopied ? `${label} Copied!` : `Copy ${label}`}
			closeOnClick={false}
			hasArrow
		>
			<Button
				aria-label={label}
				bg={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
				rounded={'full'}
				w={12}
				h={12}
				p={0}
				onClick={onCopy}
				_hover={{
					bg: useColorModeValue('blackAlpha.300', 'whiteAlpha.300'),
				}}
			>
				<VisuallyHidden>{label}</VisuallyHidden>
				{children}
			</Button>
		</Tooltip>
	);
};

export default CopyButton;
