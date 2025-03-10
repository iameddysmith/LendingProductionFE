import React, { useState } from "react";
import "./EmployeeForm.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import EmployeeModalForm from "../EmployeeModalForm/EmployeeModalForm";

function EmployeeForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const employeeData = {
      employeeName: formData.get("employeeName"),
      manager: formData.get("manager"),
      position: formData.get("position"),
      department: formData.get("department"),
      cfdqc: formData.get("cfdqc"),
      phone: formData.get("phone"),
      pod: formData.get("pod"),
      fundingTeamColor: formData.get("fundingTeamColor"),
    };
    console.log("Employee Data:", employeeData);
    handleCloseModal();
  };

  return (
    <div className="employee-form">
      <h3>Add/Edit Employee</h3>
      <button onClick={handleOpenModal}>Open Form</button>
      <ModalWithForm
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      >
        <EmployeeModalForm />
      </ModalWithForm>
    </div>
  );
}

export default EmployeeForm;
