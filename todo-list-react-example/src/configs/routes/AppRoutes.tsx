import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastro from '../../pages/Cadastro';
import Home from '../../pages/Home';
import Login from '../../pages/Login';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signin" element={<Login />} />
				<Route path="/signup" element={<Cadastro />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
