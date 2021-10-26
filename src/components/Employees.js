/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import EmployeeCard from './EmployeeCard';
import EmployeeModal from './EmployeeModal';
import EditEmployee from './EditEmployee';
import AddEmployee from './AddEmployee';
import AddEmployeeModal from './AddEmployeeModal';
import { getEmployees } from '../Requests';

const Container = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  color: palevioletred;
	margin-top: 50px;
`;

const List = styled.ul`
	width: 95%;
	margin: 80px 15px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	gap: 10px 30px;
`;

const Employees = () => {
	const [employees, setEmployees] = useState({});
	const [modalOpen, setModalOpen] = useState(false);
	const [editModal, setEditModal] = useState(false);
	const [addEmployeeModal, setAddEmployeeModal] = useState(false);
	const [selectedEmployee, setSelectedEmployee] = useState({});

  useEffect(() => {
    const getData = async () => {
      await getEmployees().then((response) => {
				setEmployees(response);
			})
    }
    getData();
  }, [employees]);

	return (
		<Container>
			{modalOpen === true && 
				<EmployeeModal
					selectedEmployee={selectedEmployee}
					setModalOpen={setModalOpen}
					setEditModal={setEditModal}
				/>
			}
			{editModal === true &&
				<EditEmployee
					selectedEmployee={selectedEmployee}
					setEditModal={setEditModal}
				/>
			}
			{addEmployeeModal === true &&
				<AddEmployeeModal
					setAddEmployeeModal={setAddEmployeeModal}
				/>
			}
			<Title>
				Employee Directory
			</Title>
			<List>
				<AddEmployee setAddEmployeeModal={setAddEmployeeModal} />
				{Object.keys(employees).length !== 0 && employees.map((employee, i) => {
					return (
						<EmployeeCard
							key={employee.id}
							employee={employee}
							setModalOpen={setModalOpen}
							setSelectedEmployee={setSelectedEmployee}
						/>
					);
				})}
			</List>
		</Container>
	)
}

export default Employees;

