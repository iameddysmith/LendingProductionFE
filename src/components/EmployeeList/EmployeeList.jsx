import "./EmployeeList.css";

function EmployeeList() {
  return (
    <div className="employee-list">
      <p className="employee-header">Lending Operations </p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee Name</th>
            <th>Manager</th>
            <th>Position</th>
            <th>Department</th>
            <th>Phone</th>
            <th>POD</th>
            <th>Funding Team Color</th>
            <th>CFDQC</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>Jane Smith</td>
            <td>Developer</td>
            <td>Centralized Funding Desk</td>
            <td>Yes</td>
            <td>POD123</td>
            <td>Blue</td>
            <td>Yes</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>John Doe</td>
            <td>Manager</td>
            <td>Operations</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>No</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
