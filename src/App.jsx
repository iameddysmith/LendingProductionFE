import React, { useState } from "react";
import Header from "./components/Header/Header";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import ModalWithForm from "./components/ModalWithForm/ModalWithForm";
import EmployeeModalForm from "./components/EmployeeModalForm/EmployeeModalForm";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John Doe",
      manager: "Jane Smith",
      position: "Developer",
      department: "Centralized Funding Desk",
      phone: "Yes",
      pod: "POD123",
      fundingTeamColor: "Blue",
      cfdqc: "Yes",
    },
    {
      id: 2,
      name: "Jane Smith",
      manager: "John Doe",
      position: "Manager",
      department: "Operations",
      phone: "-",
      pod: "-",
      fundingTeamColor: "-",
      cfdqc: "No",
    },
  ]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleOpenModal = () => {
    setSelectedEmployee(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const employeeData = {
      id: selectedEmployee ? selectedEmployee.id : Date.now(),
      name: formData.get("employeeName"),
      manager: formData.get("manager"),
      position: formData.get("position"),
      department: formData.get("department"),
      cfdqc: formData.get("cfdqc"),
      phone: formData.get("phone") || "-",
      pod: formData.get("pod") || "-",
      fundingTeamColor: formData.get("fundingTeamColor") || "-",
    };

    if (selectedEmployee) {
      setEmployees(
        employees.map((emp) =>
          emp.id === selectedEmployee.id ? employeeData : emp
        )
      );
    } else {
      setEmployees([...employees, employeeData]);
    }
    console.log("Employee Data:", employeeData);
    handleCloseModal();
  };

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <div className="App__header">
          <h1 className="App__title"></h1>
          <button className="App__add-button" onClick={handleOpenModal}>
            Add Employee
          </button>
        </div>
        <EmployeeList employees={employees} onEdit={handleEdit} />
        <ModalWithForm
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleSubmit}
        >
          <EmployeeModalForm initialData={selectedEmployee} />
        </ModalWithForm>
      </main>
    </div>
  );
}

export default App;
