import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

import { StudentComponent } from '../../components/StudentComponent';
import Student from '../../types/student';

const Home: React.FC = () => {
	const [name, setName] = useState('');
	const [classroom, setClassroom] = useState('');
	const [students, setStudents] = useState<Student[]>([]);

	const handleSubmit = () => {
		const student: Student = {
			id: Date.now(),
			name,
			classroom,
		};

		setStudents([...students, student]);
		console.log(students);
	};

	return (
		<React.Fragment>
			<Grid
				container
				justifyContent={'center'}
				spacing={4}
				alignItems={'center'}
			>
				<Grid item>
					<TextField
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>
				</Grid>
				<Grid item>
					<TextField
						onChange={(e) => setClassroom(e.target.value)}
						value={classroom}
					/>
				</Grid>
				<Grid item>
					<Button onClick={handleSubmit}>Postar</Button>
				</Grid>
			</Grid>
			<StudentComponent students={students} setStudents={setStudents} />
		</React.Fragment>
	);
};

export default Home;
