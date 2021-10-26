/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import styled from 'styled-components';

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


const InfoRow = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px;
`

const Title = styled.h2`
	text-align: left;	
	margin-top: 5px;
	margin-bottom: 5px;
`;

const AddEmployee = ({setAddEmployeeModal}) => {
	const handleClick = () => {
		setAddEmployeeModal(true);
	}
	return (
		<ListItem onClick={() => handleClick()}>
			<InfoRow>
				<Title>Add Employee</Title>
			</InfoRow>
		</ListItem>
	)
}

export default AddEmployee;

