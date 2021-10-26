/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import styled from 'styled-components';
import { addEmployee } from '../Requests';

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

const Form = styled.form`
  width: 100%;
  height: 100%;
  margin: 20px;
`;

const Row = styled.div`
  display: flex; 
  flex-direction: row;
  align-self: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
`;


const Input = styled.input`
	padding: 5px;
  border: solid 2.25px #dddddd;
  border-radius: 5px;
	width: 200px;
	margin-bottom: 0.5em;
  margin: 10px auto;
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

const AddEmployeeModal = ({setAddEmployeeModal}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState("");

  const handleCancel = () => {
    setAddEmployeeModal(false);
  };

  const handleAdd = async () => {
    await addEmployee(
        firstName, 
        lastName,
        title,
        email,
        picture
      ).then((response) => {
      console.log(response);
    });
    setAddEmployeeModal(false);
  };

	return (
		<Model>
      <Container>
        <Form
          onSubmit={e => {
            e.preventDefault();
            handleAdd();
          }}
        >
          <Row>
            <label>First Name:</label>
            <Input
              type="text"
              value={firstName}
              onChange={(e) => {setFirstName(e.target.value)}}
            />
          </Row>
          <Row>
            <label>Last Name:</label>
            <Input
              type="text"
              value={lastName}
              onChange={(e) => {setLastName(e.target.value)}}
            />
          </Row>
          <Row>
            <label>Title Name:</label>
            <Input
              type="text"
              value={title}
              onChange={(e) => {setTitle(e.target.value)}}
            />
          </Row>
          <Row>
            <label>Email:</label>
            <Input
              type="text"
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
            />
          </Row>
          <Row>
            <label>Picture Url:</label>
            <Input
              type="text"
              value={picture}
              onChange={(e) => {setPicture(e.target.value)}}
            />
          </Row>
        </Form>
        <ButtonRow>
          <Button onClick={() => handleCancel()}>Cancel</Button>
          <Button onClick={() => handleAdd()}>Add</Button>
        </ButtonRow>
      </Container>
		</Model>
	)
}

export default AddEmployeeModal;

