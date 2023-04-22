import React, { useCallback, useState } from 'react';

interface Tarefa {
	id: number;
	title: string;
}

const Tasks: React.FC = () => {
	// Iniciando o useState de tarefas
	const [tasks, setTasks] = useState<Tarefa[]>([]);

	// Iniciando o useState de nova tarefa
	const [novaTarefa, setNovaTarefa] = useState<Tarefa>({} as Tarefa);

	// Utilização do callback para exibir o estado UTILIZANDO a dependência
	const handleTasksUptodate = useCallback(() => {
		console.log(tasks);
	}, [tasks]);

	// Utilização do callback para exibir o estado NÃO UTILIZANDO a dependência
	const handleTasksNotUptodate = useCallback(() => {
		console.log(tasks);
	}, []);

	// Função de incrementar uma tarefa na lista de tarefas
	function handleAddTask() {
		setTasks((prevTasks) => [...prevTasks, novaTarefa]);
	}

	return (
		<React.Fragment>
			<div>
				<label htmlFor="task">Digite sua tarefa:</label>
				<input
					style={{ padding: '10px', marginRight: '10px' }}
					type="text"
					onChange={(e) =>
						setNovaTarefa({
							id: new Date().getTime(),
							title: e.target.value,
						})
					}
				/>
				<button onClick={handleAddTask} style={{ margin: '10px' }}>
					Adicionar Tarefa
				</button>
				<button
					onClick={handleTasksUptodate}
					style={{ margin: '10px' }}
				>
					Mostrar tarefas atualizadas
				</button>
				<button
					onClick={handleTasksNotUptodate}
					style={{ margin: '10px' }}
				>
					Mostrar tarefas não atualizadas
				</button>
			</div>
		</React.Fragment>
	);
};

export default Tasks;
