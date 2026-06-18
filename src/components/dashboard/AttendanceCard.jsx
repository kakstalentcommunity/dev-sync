const AttendanceCard = ({
  employee,
  status
}) => {

  return (
    <div className="attendance-card">

      <h4>{employee}</h4>

      <p>Status: {status}</p>

    </div>
  );
};

export default AttendanceCard;