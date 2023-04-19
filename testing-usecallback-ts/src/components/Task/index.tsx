import React from 'react';

import { TaskStyled } from './styles';

interface TaskProps {
	id: number;
	title: string;
}

export const Task: React.FC<TaskProps> = ({ id, title }) => {
	return (
		<TaskStyled>
			{id} - {title}
		</TaskStyled>
	);
};
