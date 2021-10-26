/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import EmployeeCard from './EmployeeCard';
import EmployeeModal from './EmployeeModal';
import EditEmployee from './EditEmployee';
import AddEmployee from './AddEmployee';
import AddEmployeeModal from './AddEmployeeModal';
import { getEmployees, addRandomEmployees, addEmployee } from '../Requests';

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
	const [randomEmployees, setRandomEmployees] = useState([]);
	const [modalOpen, setModalOpen] = useState(false);
	const [editModal, setEditModal] = useState(false);
	const [addEmployeeModal, setAddEmployeeModal] = useState(false);
	const [selectedEmployee, setSelectedEmployee] = useState({});

  useEffect(() => {
    const getData = async () => {
      await getEmployees().then((response) => {
				setEmployees(response);
			});
    };
    getData();
  }, [employees]);

	useEffect(() => {
    const getRandomUsers = async () => {
      await addRandomEmployees().then((response) => {
				setRandomEmployees(response);
			});
    };
    getRandomUsers();
  }, []);

	useEffect(() => {
    const addRandomUsers = async (firstName, lastName, title, email, picture) => {
			await addEmployee(
        firstName, 
        lastName,
        title,
        email,
        picture
				).then((response) => {
				console.log(response);
			});
    }

		if (randomEmployees.length > 0) {
			for (let i = 0; i < randomEmployees.length; i++) {
				const employee = randomEmployees[i];
				addRandomUsers(
					employee.name.first,
					employee.name.last,
					"developer",
					employee.email,
					employee.picture.large
				);
			};
		};
	}, [randomEmployees])

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

