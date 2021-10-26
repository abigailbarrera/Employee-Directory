/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import styled from 'styled-components';
import { formatName } from '../utils';
import { deleteEmployee } from '../Requests';

const Model = styled.div`
	z-index: auto;
	display: block;
	position: absolute;
	height: 100%;
	width: 100%;
	background: rgba(0,0,0,0.5);
`;

const Container = styled.div`
  background: white;
  width: 30%;
  height: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
`;

const Name = styled.h2`
	text-align: center;	
	margin-top: 5px;
	margin-bottom: 5px;
`;

const Photo = styled.img`
	display: block;
	align-self: center;
  margin: 20px auto;
	border-radius: 50%;
`;

const ButtonRow = styled.div`
  display: flex; 
  flex-direction: row;
  align-self: center;
  justify-content: space-evenly;
  margin-bottom: 30px;
  margin-top: 30px;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  border: solid 2.25px #dddddd;
  border-radius: 5px;
  text-align: center;
  background-color: #fff;
`;

const ExitButton = styled.button`
  width: 100px;
  height: 30px;
  border: solid 2.25px #dddddd;
  border-radius: 5px;
  text-align: center;
  background-color: #fff;
  float: right;
`;

const EmployeeModal = ({selectedEmployee, setModalOpen, setEditModal}) => {
  const handleEdit = () => {
    setModalOpen(false);
    setEditModal(true);
  };

  const handleDelete = async () => {
    await deleteEmployee(selectedEmployee.id).then((response) => {
      console.log(response);
    });
    setModalOpen(false);
  };

	return (
		<Model>
      <Container>
        <ExitButton onClick={() => setModalOpen(false)}>X</ExitButton>
        <Photo src={selectedEmployee.picture.large}/>
        <Name>{formatName(selectedEmployee)}</Name>
        <ButtonRow>
          <Button onClick={() => handleEdit()}>Edit</Button>
          <Button onClick={() => handleDelete()} >Delete</Button>
        </ButtonRow>
      </Container>
		</Model>
	)
}

export default EmployeeModal;

