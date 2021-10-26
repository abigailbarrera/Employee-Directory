import axios from "axios";

const getEmployees = async () => {
	return await axios.get(`http://localhost:8000/employees`)
	.then((response) => response.data)
	.catch(() => {
		alert("Error: Please try getEmployees again or contact support for additional help")
	});
};

const updateEmployee = async (employee, firstName, lastName, title, email) => {
	await axios.put(`http://localhost:8000/employees/${employee.id}`, {
		"first_name": firstName,
		"last_name": lastName,
		"title": title,
		"email": email,
		id: employee.id,
		picture: employee.picture
	})
	.then((response) => response)
	.catch(() => {
		alert("Error: Please try updateEmployee again or contact support for additional help")
	});
};

const deleteEmployee = async (id) => {
	await axios.delete(`http://localhost:8000/employees/${id}`)
	.then((response) => response)
	.catch(() => {
		alert("Error: Please try deleteEmployee again or contact support for additional help")
	});
};

const addEmployee = async (firstName, lastName, title, email, picture) => {
	await axios.post(`http://localhost:8000/employees/`, {
		"first_name": firstName,
		"last_name": lastName,
		"title": title,
		"email": email,
		picture: {
			large: picture
		}
	})
	.then((response) => response)
	.catch(() => {
		alert("Error: Please try updateEmployee again or contact support for additional help")
	});
};

const addRandomEmployees = async () => {
	return await axios.get(`https://randomuser.me/api/?results=5`)
	.then((response) => response.data.results)
	.catch(() => {
		alert("Error: Please try addEmployees again or contact support for additional help")
	});
};

export {
	getEmployees,
	updateEmployee,
	deleteEmployee,
	addEmployee,
	addRandomEmployees
}