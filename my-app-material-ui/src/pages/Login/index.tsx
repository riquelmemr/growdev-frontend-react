import { Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';

import Title from '../../components/Title';

const Login: React.FC = () => {
	return (
		<>
			<Grid container justifyContent={'center'} gap={'30px'}>
				<Grid item xs={12} md={6} xl={3}>
					<Title variant={'h3'} align={'center'} isBlue>
						LOGIN
					</Title>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
					xl={3}
					sx={{ display: 'flex', justifyContent: 'center' }}
				>
					<TextField
						id="outlined-basic"
						label="Email address"
						variant="outlined"
					/>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
					xl={3}
					sx={{ display: 'flex', justifyContent: 'center' }}
				>
					<TextField
						id="outlined-basic"
						label="Password"
						variant="outlined"
					/>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
					xl={3}
					sx={{ display: 'flex', justifyContent: 'center' }}
				>
					<Button variant="outlined">Entrar</Button>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
					xl={3}
					sx={{ display: 'flex', justifyContent: 'center' }}
				>
					<Typography variant="subtitle1">
						Não possui uma conta? Clique aqui.
					</Typography>
				</Grid>
			</Grid>
		</>
	);
};

export default Login;
