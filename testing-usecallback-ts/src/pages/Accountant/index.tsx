import React, { useCallback, useState } from 'react';

const Accountant: React.FC = () => {
	// Iniciando o useState
	const [accountant, setAccountant] = useState(0);

	// Utilização do callback para exibir o estado utilizando a dependência
	const callbackUptodate = useCallback(() => {
		console.log('Uso do callback atualizado:', accountant);
	}, [accountant]);

	// Utilização do callback para exibir o estado sem a utilização da dependência
	const callbackNotUptodate = useCallback(() => {
		console.log('Uso do callback não atualizado:', accountant);
	}, []);

	// Função de incremento do contador
	function increase() {
		setAccountant(accountant + 1);
	}

	return (
		<div>
			<p>Contador: {accountant}</p>
			<button onClick={increase}>Incrementar</button>
			<button onClick={callbackUptodate}>
				Exibir contador atualizado
			</button>
			<button onClick={callbackNotUptodate}>
				Exibir contador não atualizado
			</button>
		</div>
	);
};

export default Accountant;
