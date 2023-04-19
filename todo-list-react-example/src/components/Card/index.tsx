import React from 'react';
import { Task } from '../../types';
import CardStyled from './styles';

const Card: React.FC<Task> = ({ id, title, createdAt }) => {
	return (
		<CardStyled>
			<strong>{title}</strong>
			<small>{createdAt}</small>
		</CardStyled>
	);
};

export default Card;
