import { Typography } from '@mui/material';

interface TitleProps {
	children: React.ReactNode;
	variant: any;
	align: any;
	isBlue?: boolean;
}

const Title: React.FC<TitleProps> = ({ children, variant, align, isBlue }) => {
	return (
		<>
			<Typography
				variant={variant}
				align={align}
				sx={{
					color: `${isBlue ? 'blue' : 'black'}`,
				}}
			>
				{children}
			</Typography>
		</>
	);
};

export default Title;
