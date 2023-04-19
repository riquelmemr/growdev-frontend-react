import { Typography } from '@mui/material';
import React from 'react';

import Title from '../../components/Title';

const Welcome: React.FC = () => {
	return (
		<>
			<Title align="center" variant="h1" isBlue={false}>
				Welcome, Dev!
			</Title>
		</>
	);
};

export default Welcome;
