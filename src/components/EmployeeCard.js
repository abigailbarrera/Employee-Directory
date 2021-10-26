/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import styled from 'styled-components';
import { formatName } from '../utils';

const ListItem = styled.li`
	width: 430px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	border: solid 2.25px #dddddd;
	border-radius: 10px;
	text-align: center;
	background-color: #fff;
	height: 160px;

	&:hover {
		opacity: 1.0;
		border: solid 2.5px #b2b2b2;
  }
`;

const Photo = styled.img`
	display: block;
	align-self: center;
	border-radius: 50%;
`;

const InfoRow = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px;
`

const Info = styled.p`
	text-align: left;
	margin-top: 5px;
	margin-bottom: 5px;
`;

const Name = styled.h2`
	text-align: left;	
	margin-top: 5px;
	margin-bottom: 5px;
`;

const EmployeeCard = ({employee, setModalOpen, setSelectedEmployee}) => {
	const handleClick = (employee) => {
		setModalOpen(true);
		setSelectedEmployee(employee);
	}
	return (
		<ListItem key={employee.id} onClick={() => handleClick(employee)}>
			<Photo src={employee.picture.large}/>
			<InfoRow>
				<Name>{formatName(employee)}</Name>
				<Info>{employee.title}</Info>
				<Info>{employee.email}</Info>
			</InfoRow>
		</ListItem>
	)
}

export default EmployeeCard;

