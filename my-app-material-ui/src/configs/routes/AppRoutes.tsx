import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from '../../pages/Login';
import Welcome from '../../pages/Welcome';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
