import {
  useContext,
  useState
} from "react";

import { FaCalendarCheck }
from "react-icons/fa";

import { NotificationContext }
from "../../context/NotificationContext";

const AttendanceForm = ({
  markAttendance
}) => {

  const [employee, setEmployee] =
    useState("");

  const [status, setStatus] =
    useState("Present");

  const { dispatch } =
    useContext(NotificationContext);

  const showNotification = (
    message,
    type = "info"
  ) => {
    dispatch({
      type: "SHOW_NOTIFICATION",
      payload: {
        message,
        type
      }
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const trimmedEmployee =
      employee.trim();

    if (!trimmedEmployee) {
      showNotification(
        "Please enter an employee name.",
        "warning"
      );
      return;
    }

    markAttendance({
      employee: trimmedEmployee,
      status
    });

    showNotification(
      "Attendance marked successfully.",
      "success"
    );

    setEmployee("");
  };

  return (
    <form
      className="attendance-form form-card"
      onSubmit={handleSubmit}
    >

      <div className="form-header">
        <div className="form-icon">
          <FaCalendarCheck />
        </div>

        <div>
          <h2>Mark Attendance</h2>
          <p>Record the latest employee status.</p>
        </div>
      </div>

      <div className="form-body attendance-fields">
        <label>
          Employee name
          <input
            type="text"
            placeholder="Employee Name"
            value={employee}
            onChange={(e) =>
              setEmployee(e.target.value)
            }
          />
        </label>

        <label>
          Status
          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
          >

            <option>
              Present
            </option>

            <option>
              Absent
            </option>

            <option>
              Remote
            </option>

          </select>
        </label>
      </div>

      <div className="form-footer">
        <span>Daily team check-in</span>

        <button
          type="submit"
          className="primary-btn"
        >
          Mark
        </button>
      </div>

    </form>
  );
};

export default AttendanceForm;
