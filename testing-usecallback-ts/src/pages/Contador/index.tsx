import React, { useCallback, useState } from 'react';

const Contador: React.FC = () => {
	const [contador, setContador] = useState(3);

	const callbackAtualizado = useCallback(() => {
		console.log('callbackAtualizado:', contador);
	}, [contador]);

	const callbackNaoAtualizado = useCallback(() => {
		console.log('callbackNaoAtualizado:', contador);
	}, []);

	function incrementar() {
		setContador(contador + 1);
	}

	return (
		<div>
			<p>contador: {contador}</p>
			<button onClick={incrementar}>Incrementar</button>
			<button onClick={callbackAtualizado}>callbackAtualizado</button>
			<button onClick={callbackNaoAtualizado}>
				callbackNaoAtualizado
			</button>
		</div>
	);
};

export default Contador;
