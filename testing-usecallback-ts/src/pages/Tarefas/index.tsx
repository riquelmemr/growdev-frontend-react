import React, { useCallback, useState } from 'react';

interface Tarefa {
	id: number;
	title: string;
}

const Tarefas: React.FC = () => {
	const [tarefas, setTarefas] = useState<Tarefa[]>([]);
	const [novaTarefa, setNovaTarefa] = useState<Tarefa>({} as Tarefa);

	const handleTarefas = useCallback(() => {
		console.log(tarefas);
	}, [tarefas]);

	const handleTarefasNaoAtualizadas = useCallback(() => {
		console.log(tarefas);
	}, []);

	function handleAdicionarTarefa() {
		setTarefas((prevTarefas) => [...prevTarefas, novaTarefa]);
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
				<button
					onClick={handleAdicionarTarefa}
					style={{ margin: '10px' }}
				>
					Adicionar Tarefa
				</button>
				<button onClick={handleTarefas} style={{ margin: '10px' }}>
					Mostrar tarefas atualizadas
				</button>
				<button
					onClick={handleTarefasNaoAtualizadas}
					style={{ margin: '10px' }}
				>
					Adicionar tarefas não atualizadas
				</button>
			</div>
		</React.Fragment>
	);
};

export default Tarefas;
