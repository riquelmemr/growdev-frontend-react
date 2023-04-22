import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
	const navigate = useNavigate();

	return (
		<Grid container justifyContent="space-between" padding={'30px'}>
			<Grid>
				<Button onClick={() => navigate('/')}>Home</Button>
				<Button onClick={() => navigate('/login')}>Login</Button>
				<Button onClick={() => navigate('/register')}>Register</Button>
			</Grid>
			<Grid item>
				<AccountCircleIcon fontSize="large" />
			</Grid>
		</Grid>
	);
};
