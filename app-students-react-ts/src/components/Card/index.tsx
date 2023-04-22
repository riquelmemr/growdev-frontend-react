import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';

interface CardProps {
	id: number;
	name: string;
	classroom: string;
	handleDelete: (id: number) => void;
}

export const Card: React.FC<CardProps> = ({
	id,
	name,
	classroom,
	handleDelete,
}) => {
	return (
		<Grid item key={id} sx={{ display: 'flex' }}>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					maxWidth: '400px',
					border: '2px solid black',
					padding: '20px',
					borderRadius: '8px',
					backgroundColor: '#eee',
				}}
			>
				<Typography variant="h4" fontSize={16}>
					{name}
				</Typography>
				<Typography
					variant="body1"
					fontSize={16}
					fontWeight={600}
					marginLeft={'10px'}
				>
					{classroom}
				</Typography>
				<Box
					sx={{
						display: 'flex',
					}}
				>
					<IconButton onClick={() => handleDelete(id)}>
						<ClearIcon sx={{ marginLeft: '10px' }} />
					</IconButton>
					<IconButton>
						<EditIcon sx={{ marginLeft: '10px' }} />
					</IconButton>
				</Box>
			</Box>
		</Grid>
	);
};
