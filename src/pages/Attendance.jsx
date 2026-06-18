import {
  useReducer
} from "react";

import AttendanceForm
from "../components/forms/AttendanceForm";

import AttendanceCard
from "../components/dashboard/AttendanceCard";

import {
  attendanceReducer,
  initialAttendanceState
}
from "../reducers/attendanceReducer";

const Attendance = () => {

  const [state, dispatch] =
    useReducer(
      attendanceReducer,
      initialAttendanceState
    );

  const markAttendance =
    (data) => {

      dispatch({
        type: "MARK_ATTENDANCE",
        payload: data
      });

    };

  return (
    <div>

      <AttendanceForm
        markAttendance={markAttendance}
      />

      <div className="attendance-list">

        {state.attendance.map(
          (record, index) => (

          <AttendanceCard
            key={index}
            employee={record.employee}
            status={record.status}
          />

        ))}

      </div>

    </div>
  );
};

export default Attendance;