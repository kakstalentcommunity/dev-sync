import { useMemo } from "react";

const DashboardStats = ({
  tasks
}) => {

  const completedTasks =
    useMemo(() => {

      return tasks.filter(
        task => task.completed
      ).length;

    }, [tasks]);

  return (
    <div className="stats-container">

      <div className="stat-card">
        <h3>Total Tasks</h3>
        <p>{tasks.length}</p>
      </div>

      <div className="stat-card">
        <h3>Completed</h3>
        <p>{completedTasks}</p>
      </div>

    </div>
  );
};

export default DashboardStats;