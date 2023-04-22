import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Accountant from '../../pages/Accountant';
import Tasks from '../../pages/Tasks';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/contador" element={<Accountant />} />
				<Route path="/tarefas" element={<Tasks />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
