import { Grid } from '@mui/material';

import Student from '../../types/student';
import { Card } from '../Card';

interface StudentComponentProps {
	students: Student[];
	setStudents: React.Dispatch<React.SetStateAction<Student[]>>;
}

export const StudentComponent: React.FC<StudentComponentProps> = ({
	students,
	setStudents,
}) => {
	const handleDelete = (id: number) => {
		setStudents([...students].filter((student) => student.id !== id));
		console.log(students);
	};

	return (
		<Grid
			container
			justifyContent={'center'}
			alignItems={'center'}
			marginTop={'20px'}
			spacing={4}
			flexDirection={'column'}
		>
			{students.map((student) => (
				<Card
					id={student.id}
					key={student.id}
					name={student.name}
					classroom={student.classroom}
					handleDelete={handleDelete}
				/>
			))}
		</Grid>
	);
};
