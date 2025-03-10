import React, { useState } from "react";
import "./EmployeeModalForm.css";

const EmployeeModalForm = () => {
  const [department, setDepartment] = useState("");
  const [phone, setPhone] = useState("");
  const [pod, setPod] = useState("");
  const [fundingTeamColor, setFundingTeamColor] = useState("");
  const [cfdqc, setCfdqc] = useState("");

  const handleDepartmentChange = (e) => {
    const selectedDepartment = e.target.value;
    setDepartment(selectedDepartment);

    if (selectedDepartment === "centralized-funding-desk") {
      setPhone("");
      setPod("");
      setFundingTeamColor("");
    } else {
      setPhone("");
      setPod("");
      setFundingTeamColor("");
    }
  };

  return (
    <>
      <div className="employee-modal-form__field">
        <label className="modal__label">Employee Name*:</label>
        <input
          className="modal__input"
          type="text"
          name="employeeName"
          required
          placeholder="Enter name"
        />
      </div>
      <div className="employee-modal-form__field">
        <label className="modal__label">Manager*:</label>
        <select
          className="modal__input"
          name="manager"
          required
          onChange={handleDepartmentChange}
        >
          <option value="">Select a manager</option>
          <option value="edward-smith">Edward Smith</option>
          <option value="jane-doe">Jane Doe</option>
          <option value="john-smith">John Smith</option>
        </select>
      </div>
      <div className="employee-modal-form__field">
        <label className="modal__label">Position*:</label>
        <select className="modal__input" name="position" required>
          <option value="">Select Role</option>
          <option value="developer">Developer</option>
          <option value="manager">Manager</option>
          <option value="analyst">Analyst</option>
          <option value="team-lead">Team Lead</option>
        </select>
      </div>
      <div className="employee-modal-form__field department-row">
        <label className="modal__label">Department*:</label>
        <div className="department-fields">
          <select
            className="modal__input department-select"
            name="department"
            required
            value={department}
            onChange={handleDepartmentChange}
          >
            <option value="">Select a department</option>
            <option value="centralized-funding-desk">
              Centralized Funding Desk
            </option>
            <option value="operations">Operations</option>
            <option value="it">IT</option>
            <option value="finance">Finance</option>
          </select>
          {department === "centralized-funding-desk" && (
            <div className="additional-fields">
              <select
                className="modal__input"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              >
                <option value="" disabled>
                  Phone?
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <input
                className="modal__input"
                type="text"
                name="pod"
                placeholder="POD?"
                value={pod}
                onChange={(e) => setPod(e.target.value)}
              />
              <select
                className="modal__input"
                name="fundingTeamColor"
                value={fundingTeamColor}
                onChange={(e) => setFundingTeamColor(e.target.value)}
              >
                <option value="" disabled>
                  Funding Color?
                </option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="gold">Gold</option>
                <option value="red">Red</option>
              </select>
            </div>
          )}
        </div>
      </div>
      <div className="employee-modal-form__field">
        <label className="modal__label">CFDQC*:</label>
        <select
          className="modal__input"
          name="cfdqc"
          required
          value={cfdqc}
          onChange={(e) => setCfdqc(e.target.value)}
        >
          <option value="" disabled>
            Grade CFDQC?
          </option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
    </>
  );
};

export default EmployeeModalForm;
