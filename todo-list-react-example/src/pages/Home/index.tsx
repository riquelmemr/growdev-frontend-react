import React, { useCallback, useState } from 'react';
import { v4 as generateId } from 'uuid';
import ButtonStyled from '../../components/Button/styles';
import Card from '../../components/Card';
import Container from '../../components/Container/styles';
import TitleDefault from '../../components/Heading';
import Input from '../../components/Input';
import { Task } from '../../types';
import generateDate from '../../utils/generateDate';

const Home: React.FC = () => {
	const [title, setTitle] = useState('');
	const [todoList, setTodoList] = useState<Task[]>([]);

	const handleAddTask = useCallback(() => {
		const task = {
			id: generateId(),
			title,
			createdAt: generateDate(),
		};

		if (!title) return;
		
		setTodoList((todoList) => [task, ...todoList]);
		setTitle('');
	}, [title]);

	return (
		<Container display="flex" alignItems="center" flexDirection="column">
			<TitleDefault title="Lista de Tarefas" />
			<Input
				id="task"
				name="tarefa"
				placeholder="Descreva a tarefa..."
				type="text"
				value={title}
				handleChange={setTitle}
			/>

			<ButtonStyled onClick={handleAddTask}>Adicionar</ButtonStyled>

			{todoList.map(({ id, createdAt, title }) => {
				return (
					<Card
						key={id}
						id={id}
						title={title}
						createdAt={createdAt}
					/>
				);
			})}
		</Container>
	);
};

export default Home;
