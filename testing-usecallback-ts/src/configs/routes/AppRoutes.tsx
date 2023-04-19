import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Contador from '../../pages/Contador';
import Tarefas from '../../pages/Tarefas';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/contador" element={<Contador />} />
				<Route path="/tarefas" element={<Tarefas />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
